"use client";

import { useEffect, useRef, useState } from "react";
import { doc, getDoc, onSnapshot, serverTimestamp, setDoc, type Timestamp } from "firebase/firestore";
import { getFirebaseDb } from "./firebase";
import { useAuth } from "./auth";
import { readJson, writeJson } from "./storage";
import type { LearnProgress, MockSessionState, SrsState } from "./types";

const KEY_VOCAB = "srs/vocab";
const KEY_QUANT = "srs/quant";
const KEY_MOCK = "mock/active";
const KEY_LEARN_VOCAB = "learn/vocab";
const KEY_LEARN_VOCAB_MASTERY = "learn/vocab-mastery-count";
const KEY_LEARN_QUANT = "learn/quant";
const KEY_WRITING_READ = "writing/read";
const LOCAL_WRITE_EVENT = "gre-master:local-write";

export type SyncStatus = "idle" | "loading" | "ready" | "syncing" | "error";

interface CloudPayload {
  vocab: Record<string, SrsState>;
  quant: Record<string, SrsState>;
  learnVocab: Record<string, LearnProgress>;
  learnVocabMastery: number;
  learnQuant: Record<string, LearnProgress>;
  mockActive: MockSessionState | null;
  writingRead: Record<string, boolean>;
  updatedAt?: Timestamp;
}

function readLocalPayload(): CloudPayload {
  return {
    vocab: readJson<Record<string, SrsState>>(KEY_VOCAB, {}),
    quant: readJson<Record<string, SrsState>>(KEY_QUANT, {}),
    learnVocab: readJson<Record<string, LearnProgress>>(KEY_LEARN_VOCAB, {}),
    learnVocabMastery: readJson<number>(KEY_LEARN_VOCAB_MASTERY, 0),
    learnQuant: readJson<Record<string, LearnProgress>>(KEY_LEARN_QUANT, {}),
    mockActive: readJson<MockSessionState | null>(KEY_MOCK, null),
    writingRead: readJson<Record<string, boolean>>(KEY_WRITING_READ, {}),
  };
}

function writeLocalPayload(payload: CloudPayload): void {
  writeJson(KEY_VOCAB, payload.vocab);
  writeJson(KEY_QUANT, payload.quant);
  writeJson(KEY_LEARN_VOCAB, payload.learnVocab);
  writeJson(KEY_LEARN_VOCAB_MASTERY, payload.learnVocabMastery);
  writeJson(KEY_LEARN_QUANT, payload.learnQuant);
  writeJson(KEY_MOCK, payload.mockActive);
  writeJson(KEY_WRITING_READ, payload.writingRead);
}

function mergeLearn(
  local: Record<string, LearnProgress>,
  remote: Record<string, LearnProgress>,
): Record<string, LearnProgress> {
  const out: Record<string, LearnProgress> = { ...local };
  for (const id in remote) {
    const localState = out[id];
    const remoteState = remote[id];
    if (!localState) {
      out[id] = remoteState;
      continue;
    }
    const localTs = localState.lastSeenAt ?? 0;
    const remoteTs = remoteState.lastSeenAt ?? 0;
    if (remoteTs > localTs) out[id] = remoteState;
  }
  return out;
}

function mergeSrs(
  local: Record<string, SrsState>,
  remote: Record<string, SrsState>,
): Record<string, SrsState> {
  const out: Record<string, SrsState> = { ...local };
  for (const id in remote) {
    const localState = out[id];
    const remoteState = remote[id];
    if (!localState) {
      out[id] = remoteState;
      continue;
    }
    const localTs = localState.lastReviewedAt ?? 0;
    const remoteTs = remoteState.lastReviewedAt ?? 0;
    if (remoteTs > localTs) out[id] = remoteState;
  }
  return out;
}

function pickLatestMock(
  a: MockSessionState | null,
  b: MockSessionState | null,
): MockSessionState | null {
  if (!a) return b;
  if (!b) return a;
  return a.startedAt >= b.startedAt ? a : b;
}

/**
 * Read flags are unioned: a prompt marked read on any device stays read
 * everywhere. This keeps the progress marker stable (like everMastered) at the
 * cost of not propagating an explicit "mark unread" across devices.
 */
function mergeReadState(
  local: Record<string, boolean>,
  remote: Record<string, boolean>,
): Record<string, boolean> {
  const out: Record<string, boolean> = { ...local };
  for (const id in remote) {
    if (remote[id]) out[id] = true;
  }
  return out;
}

function mergePayloads(local: CloudPayload, remote: Partial<CloudPayload>): CloudPayload {
  return {
    vocab: mergeSrs(local.vocab, remote.vocab ?? {}),
    quant: mergeSrs(local.quant, remote.quant ?? {}),
    learnVocab: mergeLearn(local.learnVocab, remote.learnVocab ?? {}),
    learnVocabMastery: Math.max(local.learnVocabMastery, remote.learnVocabMastery ?? 0),
    learnQuant: mergeLearn(local.learnQuant, remote.learnQuant ?? {}),
    mockActive: pickLatestMock(local.mockActive, remote.mockActive ?? null),
    writingRead: mergeReadState(local.writingRead, remote.writingRead ?? {}),
  };
}

function payloadsEqual(a: CloudPayload, b: CloudPayload): boolean {
  return JSON.stringify({ ...a, updatedAt: undefined }) === JSON.stringify({ ...b, updatedAt: undefined });
}

interface CloudSyncResult {
  status: SyncStatus;
  lastSyncedAt: number | null;
  error: string | null;
}

export function useCloudSync(): CloudSyncResult {
  const { user } = useAuth();
  const [status, setStatus] = useState<SyncStatus>("idle");
  const [lastSyncedAt, setLastSyncedAt] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const initializedRef = useRef(false);
  const writeTimerRef = useRef<number | null>(null);
  const lastWrittenSignatureRef = useRef<string>("");

  useEffect(() => {
    if (!user) {
      initializedRef.current = false;
      setStatus("idle");
      setError(null);
      return;
    }

    const db = getFirebaseDb();
    const userDoc = doc(db, "users", user.uid);
    let cancelled = false;
    setStatus("loading");

    async function bootstrap() {
      try {
        const snap = await getDoc(userDoc);
        if (cancelled) return;
        const remote = snap.exists() ? (snap.data() as Partial<CloudPayload>) : {};
        const local = readLocalPayload();
        const merged = mergePayloads(local, remote);
        if (!payloadsEqual(local, merged)) {
          writeLocalPayload(merged);
        }
        lastWrittenSignatureRef.current = JSON.stringify(merged);
        await setDoc(userDoc, { ...merged, updatedAt: serverTimestamp() });
        if (cancelled) return;
        initializedRef.current = true;
        setStatus("ready");
        setLastSyncedAt(Date.now());
      } catch (err) {
        if (cancelled) return;
        setStatus("error");
        setError(err instanceof Error ? err.message : "Sync failed");
      }
    }
    void bootstrap();

    const unsubscribe = onSnapshot(
      userDoc,
      (snap) => {
        if (!initializedRef.current) return;
        if (snap.metadata.hasPendingWrites) return;
        if (!snap.exists()) return;
        const remote = snap.data() as Partial<CloudPayload>;
        const local = readLocalPayload();
        const merged = mergePayloads(local, remote);
        if (!payloadsEqual(local, merged)) {
          writeLocalPayload(merged);
          lastWrittenSignatureRef.current = JSON.stringify(merged);
          setLastSyncedAt(Date.now());
        }
      },
      (err) => {
        setStatus("error");
        setError(err.message);
      },
    );

    function flushToCloud() {
      if (!initializedRef.current) return;
      const payload = readLocalPayload();
      const signature = JSON.stringify(payload);
      if (signature === lastWrittenSignatureRef.current) return;
      lastWrittenSignatureRef.current = signature;
      setStatus("syncing");
      setDoc(userDoc, { ...payload, updatedAt: serverTimestamp() })
        .then(() => {
          setStatus("ready");
          setLastSyncedAt(Date.now());
        })
        .catch((err: unknown) => {
          setStatus("error");
          setError(err instanceof Error ? err.message : "Sync failed");
        });
    }

    function onLocalWrite() {
      if (writeTimerRef.current) window.clearTimeout(writeTimerRef.current);
      writeTimerRef.current = window.setTimeout(flushToCloud, 800);
    }
    window.addEventListener(LOCAL_WRITE_EVENT, onLocalWrite);
    window.addEventListener("storage", onLocalWrite);

    return () => {
      cancelled = true;
      unsubscribe();
      window.removeEventListener(LOCAL_WRITE_EVENT, onLocalWrite);
      window.removeEventListener("storage", onLocalWrite);
      if (writeTimerRef.current) window.clearTimeout(writeTimerRef.current);
    };
  }, [user]);

  return { status, lastSyncedAt, error };
}
