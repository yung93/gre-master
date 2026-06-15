"use client";

import { useEffect, useRef, useState } from "react";
import { doc, getDoc, serverTimestamp, setDoc, type Timestamp } from "firebase/firestore";
import { getFirebaseDb } from "./firebase";
import { useAuth } from "./auth";
import { QUANT_RESET_KEY } from "./quant";
import { readJson, writeJson } from "./storage";
import type { LearnProgress, MockSessionState, QuantAttempt, SrsState } from "./types";

const KEY_VOCAB = "srs/vocab";
const KEY_QUANT_ATTEMPTS = "quant/attempts";
const KEY_MOCK = "mock/active";
const KEY_LEARN_VOCAB = "learn/vocab";
const KEY_LEARN_VOCAB_MASTERY = "learn/vocab-mastery-count";
const KEY_WRITING_READ = "writing/read";
const LOCAL_WRITE_EVENT = "gre-master:local-write";

export type SyncStatus = "idle" | "loading" | "ready" | "syncing" | "error";

interface CloudPayload {
  vocab: Record<string, SrsState>;
  quantAttempts: Record<string, QuantAttempt>;
  quantResetAt: number;
  learnVocab: Record<string, LearnProgress>;
  learnVocabMastery: number;
  mockActive: MockSessionState | null;
  writingRead: Record<string, boolean>;
  updatedAt?: Timestamp;
}

const EMPTY_PAYLOAD: CloudPayload = {
  vocab: {},
  quantAttempts: {},
  quantResetAt: 0,
  learnVocab: {},
  learnVocabMastery: 0,
  mockActive: null,
  writingRead: {},
};

/** How long after a pull before tab focus is allowed to trigger another one. */
const MIN_PULL_INTERVAL_MS = 30_000;

function readLocalPayload(): CloudPayload {
  return {
    vocab: readJson<Record<string, SrsState>>(KEY_VOCAB, {}),
    quantAttempts: readJson<Record<string, QuantAttempt>>(KEY_QUANT_ATTEMPTS, {}),
    quantResetAt: readJson<number>(QUANT_RESET_KEY, 0),
    learnVocab: readJson<Record<string, LearnProgress>>(KEY_LEARN_VOCAB, {}),
    learnVocabMastery: readJson<number>(KEY_LEARN_VOCAB_MASTERY, 0),
    mockActive: readJson<MockSessionState | null>(KEY_MOCK, null),
    writingRead: readJson<Record<string, boolean>>(KEY_WRITING_READ, {}),
  };
}

function writeLocalPayload(payload: CloudPayload): void {
  writeJson(KEY_VOCAB, payload.vocab);
  writeJson(KEY_QUANT_ATTEMPTS, payload.quantAttempts);
  writeJson(QUANT_RESET_KEY, payload.quantResetAt);
  writeJson(KEY_LEARN_VOCAB, payload.learnVocab);
  writeJson(KEY_LEARN_VOCAB_MASTERY, payload.learnVocabMastery);
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

/** Newest answer wins, per question (mirrors mergeLearn/mergeSrs). */
function mergeAttempts(
  local: Record<string, QuantAttempt>,
  remote: Record<string, QuantAttempt>,
): Record<string, QuantAttempt> {
  const out: Record<string, QuantAttempt> = { ...local };
  for (const id in remote) {
    const localState = out[id];
    const remoteState = remote[id];
    if (!localState || remoteState.lastAnsweredAt > localState.lastAnsweredAt) {
      out[id] = remoteState;
    }
  }
  return out;
}

/**
 * Drop attempts answered before the latest "Reset progress". Without this the
 * additive merge resurrects cleared attempts from the cloud (or another
 * device) right after a reset.
 */
function pruneResetAttempts(
  attempts: Record<string, QuantAttempt>,
  resetAt: number,
): Record<string, QuantAttempt> {
  if (resetAt <= 0) return attempts;
  const out: Record<string, QuantAttempt> = {};
  for (const id in attempts) {
    if (attempts[id].lastAnsweredAt > resetAt) out[id] = attempts[id];
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
  const quantResetAt = Math.max(local.quantResetAt, remote.quantResetAt ?? 0);
  return {
    vocab: mergeSrs(local.vocab, remote.vocab ?? {}),
    quantAttempts: pruneResetAttempts(
      mergeAttempts(local.quantAttempts, remote.quantAttempts ?? {}),
      quantResetAt,
    ),
    quantResetAt,
    learnVocab: mergeLearn(local.learnVocab, remote.learnVocab ?? {}),
    learnVocabMastery: Math.max(local.learnVocabMastery, remote.learnVocabMastery ?? 0),
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
    let pulling = false;
    let lastPullAt = 0;

    // Read the cloud doc once, merge it with local, and push the result back
    // only when it actually diverges from what the cloud already holds.
    //
    // This deliberately does NOT keep an onSnapshot listener open. A live
    // listener re-downloads the entire user document on every server-confirmed
    // change — including the echo of our own writes — which was the source of
    // almost all Firestore egress (the only billed dimension). A single
    // document has no field-level delta, so each echo ships the whole blob.
    async function pullMergePush() {
      const snap = await getDoc(userDoc);
      if (cancelled) return;
      const remote = snap.exists() ? (snap.data() as Partial<CloudPayload>) : {};
      const local = readLocalPayload();
      const merged = mergePayloads(local, remote);
      if (!payloadsEqual(local, merged)) {
        // Set the signature before writing so the local-write event this
        // triggers doesn't schedule a redundant flush of the same payload.
        lastWrittenSignatureRef.current = JSON.stringify(merged);
        writeLocalPayload(merged);
      }
      // Push only if the merge produced something the cloud is missing. setDoc
      // overwrites the whole doc, so we must never write back stale data — but
      // we just merged remote in, so `merged` is a superset of `remote`.
      const normalizedRemote = mergePayloads(EMPTY_PAYLOAD, remote);
      if (!payloadsEqual(merged, normalizedRemote)) {
        lastWrittenSignatureRef.current = JSON.stringify(merged);
        await setDoc(userDoc, { ...merged, updatedAt: serverTimestamp() });
      }
      setLastSyncedAt(Date.now());
    }

    async function bootstrap() {
      setStatus("loading");
      try {
        await pullMergePush();
        if (cancelled) return;
        initializedRef.current = true;
        lastPullAt = Date.now();
        setStatus("ready");
      } catch (err) {
        if (cancelled) return;
        setStatus("error");
        setError(err instanceof Error ? err.message : "Sync failed");
      }
    }
    void bootstrap();

    // Re-pull when the tab regains focus, so a change made on another device
    // is picked up. Throttled, and skipped while hidden or already pulling, so
    // it costs a handful of reads per session instead of one per write.
    async function resync() {
      if (!initializedRef.current || cancelled || pulling) return;
      if (typeof document !== "undefined" && document.visibilityState !== "visible") return;
      if (Date.now() - lastPullAt < MIN_PULL_INTERVAL_MS) return;
      pulling = true;
      setStatus("syncing");
      try {
        await pullMergePush();
        if (cancelled) return;
        lastPullAt = Date.now();
        setStatus("ready");
      } catch (err) {
        if (cancelled) return;
        setStatus("error");
        setError(err instanceof Error ? err.message : "Sync failed");
      } finally {
        pulling = false;
      }
    }

    function flushToCloud() {
      if (!initializedRef.current) return;
      const payload = readLocalPayload();
      const signature = JSON.stringify(payload);
      if (signature === lastWrittenSignatureRef.current) return;
      lastWrittenSignatureRef.current = signature;
      setStatus("syncing");
      setDoc(userDoc, { ...payload, updatedAt: serverTimestamp() })
        .then(() => {
          if (cancelled) return;
          setStatus("ready");
          setLastSyncedAt(Date.now());
        })
        .catch((err: unknown) => {
          if (cancelled) return;
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
    window.addEventListener("focus", resync);
    document.addEventListener("visibilitychange", resync);

    return () => {
      cancelled = true;
      window.removeEventListener(LOCAL_WRITE_EVENT, onLocalWrite);
      window.removeEventListener("storage", onLocalWrite);
      window.removeEventListener("focus", resync);
      document.removeEventListener("visibilitychange", resync);
      if (writeTimerRef.current) window.clearTimeout(writeTimerRef.current);
    };
  }, [user]);

  return { status, lastSyncedAt, error };
}
