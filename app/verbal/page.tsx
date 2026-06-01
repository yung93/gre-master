"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Flashcard from "@/components/Flashcard";
import SrsControls from "@/components/SrsControls";
import SpeakButton from "@/components/SpeakButton";
import { VOCAB } from "@/data/vocab";
import { initialSrsState, scheduleNext } from "@/lib/srs";
import {
  BATCH_SIZE,
  GOOD_STEPS_TO_GRADUATE,
  applyGrade,
  initialLearnProgress,
  pickFromBatch,
  refillBatch,
  seedBatch,
} from "@/lib/learn-queue";
import { useLocalState } from "@/lib/storage";
import type { LearnProgress, SrsGrade, SrsState } from "@/lib/types";

const ORDERED_IDS = VOCAB.map((v) => v.id);

interface SessionStats {
  reviewed: number;
  graduatedThisSession: number;
}

export default function VerbalPage() {
  const [progress, setProgress] = useLocalState<Record<string, LearnProgress>>("learn/vocab", {});
  const [srs, setSrs] = useLocalState<Record<string, SrsState>>("srs/vocab", {});
  const [batch, setBatch] = useLocalState<string[]>("learn/vocab-batch", []);
  const [stats, setStats] = useState<SessionStats>({ reviewed: 0, graduatedThisSession: 0 });
  const [currentId, setCurrentId] = useState<string | null>(null);
  const hydratedRef = useRef(false);

  // On first hydration, build/repair the persisted batch (random backfill) once.
  useEffect(() => {
    if (hydratedRef.current) return;
    hydratedRef.current = true;
    setBatch((prev) => {
      const repaired = prev.length > 0
        ? refillBatch(prev, ORDERED_IDS, progress, BATCH_SIZE)
        : seedBatch(ORDERED_IDS, progress, BATCH_SIZE);
      setCurrentId(pickFromBatch(repaired, progress));
      return repaired;
    });
  }, [progress, setBatch]);

  // Keep a valid current card whenever the batch changes.
  useEffect(() => {
    if (!hydratedRef.current) return;
    if (currentId && batch.includes(currentId)) return;
    if (batch.length > 0) setCurrentId(pickFromBatch(batch, progress));
    else setCurrentId(null);
  }, [batch, currentId, progress]);

  const current = useMemo(() => VOCAB.find((v) => v.id === currentId) ?? null, [currentId]);
  const currentProgress = currentId ? progress[currentId] ?? initialLearnProgress() : null;

  const masteredCount = useMemo(
    () => ORDERED_IDS.reduce((n, id) => (progress[id]?.graduated ? n + 1 : n), 0),
    [progress],
  );
  const activeInBatch = batch.filter(
    (id) => (progress[id]?.seen ?? 0) > 0 && !progress[id]?.graduated,
  ).length;

  function handleGrade(grade: SrsGrade) {
    if (!current) return;
    const now = Date.now();
    const id = current.id;
    const prevProgress = progress[id] ?? initialLearnProgress();
    const nextProgress = applyGrade(prevProgress, grade, now);

    const nextProgressMap = { ...progress, [id]: nextProgress };
    setProgress(nextProgressMap);

    // When a card graduates, hand it to SM-2 for long-term review.
    const justGraduated = nextProgress.graduated && !prevProgress.graduated;
    if (justGraduated) {
      const prevSrs = srs[id] ?? initialSrsState(now);
      setSrs((s) => ({ ...s, [id]: scheduleNext(prevSrs, grade === "easy" ? "easy" : "good", now) }));
    }

    setStats((s) => ({
      reviewed: s.reviewed + 1,
      graduatedThisSession: s.graduatedThisSession + (justGraduated ? 1 : 0),
    }));

    // Refill drops the graduated word and pulls in a RANDOM replacement.
    const nextBatch = justGraduated
      ? refillBatch(batch, ORDERED_IDS, nextProgressMap, BATCH_SIZE)
      : batch;
    setBatch(nextBatch);
    setCurrentId(pickFromBatch(nextBatch, nextProgressMap, id));
  }

  function resetProgress() {
    if (typeof window !== "undefined" && !window.confirm("Reset all vocabulary progress?")) return;
    setProgress({});
    setSrs({});
    const fresh = seedBatch(ORDERED_IDS, {}, BATCH_SIZE);
    setBatch(fresh);
    setStats({ reviewed: 0, graduatedThisSession: 0 });
    setCurrentId(pickFromBatch(fresh, {}));
  }

  const allMastered = masteredCount === VOCAB.length;

  return (
    <div className="page-shell pt-10 pb-20">
      <header className="grid lg:grid-cols-[2fr_1fr] gap-8 items-end">
        <div>
          <p className="eyebrow">Verbal · Vocabulary</p>
          <h1 className="serif mt-3 text-[length:var(--text-headline)] leading-tight">
            <em className="not-italic">Flip</em>, recall, grade.
          </h1>
          <p className="mt-4 max-w-2xl text-[var(--color-ink-muted)] leading-relaxed text-sm">
            You drill a rolling set of {BATCH_SIZE} words. Answer{" "}
            <span className="font-medium text-[var(--color-ink)]">Good</span> {GOOD_STEPS_TO_GRADUATE} times
            (or <span className="font-medium text-[var(--color-ink)]">Easy</span> once) to master a word; the
            moment it graduates, a new word takes its place. Mastered words come back later for spaced review.
          </p>
        </div>
        <div className="surface-soft px-5 py-4">
          <div className="grid grid-cols-3 gap-4">
            <Stat label="In batch" value={`${activeInBatch}/${BATCH_SIZE}`} />
            <Stat label="Mastered" value={`${masteredCount}`} />
            <Stat label="Total" value={`${VOCAB.length}`} />
          </div>
          <Link
            href="/words"
            className="btn btn-secondary text-xs w-full mt-4"
          >
            Browse word list →
          </Link>
        </div>
      </header>

      <div className="mt-6 flex items-center gap-3">
        <ProgressBar value={masteredCount} total={VOCAB.length} />
        <button onClick={resetProgress} className="btn btn-ghost text-xs shrink-0">Reset</button>
      </div>

      <div className="mt-8">
        {current && currentProgress ? (
          <>
            <Flashcard
              cardKey={current.id}
              front={
                <div className="space-y-6">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <h2 className="serif text-5xl sm:text-6xl tracking-tight">{current.word}</h2>
                    <span className="italic text-[var(--color-ink-muted)]">{current.partOfSpeech}</span>
                    <SpeakButton text={current.word} shortcut="s" size="md" />
                  </div>
                  <p className="text-lg leading-relaxed text-[var(--color-ink)] max-w-2xl">
                    {renderClozeSentence(current.example, current.word)}
                  </p>
                  <p className="eyebrow">
                    Tap card or press <kbd className="mono">space</kbd> to reveal · press <kbd className="mono">s</kbd> to hear it
                  </p>
                </div>
              }
              back={
                <div className="space-y-5">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <h2 className="serif text-3xl tracking-tight">{current.word}</h2>
                    <span className="italic text-[var(--color-ink-muted)]">{current.partOfSpeech}</span>
                    <SpeakButton text={current.word} shortcut="s" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <p className="serif text-xl leading-snug">{current.meaningZh}</p>
                    <p className="leading-snug text-[var(--color-ink-muted)] self-center">{current.meaningEn}</p>
                  </div>
                  <hr className="rule" />
                  <div>
                    <p className="eyebrow">Example</p>
                    <p className="serif mt-2 italic leading-relaxed text-lg">{current.example}</p>
                    <p className="mt-2 text-sm text-[var(--color-ink-muted)] leading-relaxed">{current.exampleZh}</p>
                  </div>
                  {current.synonyms && current.synonyms.length > 0 && (
                    <div>
                      <p className="eyebrow">Synonyms</p>
                      <p className="mt-1.5 text-sm">{current.synonyms.join(" · ")}</p>
                    </div>
                  )}
                </div>
              }
              footerFront={<MasteryPips streak={currentProgress.streak} />}
              footerBack={<MasteryPips streak={currentProgress.streak} />}
            />
            <SrsControls onGrade={handleGrade} />
          </>
        ) : allMastered ? (
          <div className="surface p-12 text-center">
            <p className="serif text-2xl">Every word mastered. 🎉</p>
            <p className="mt-3 text-sm text-[var(--color-ink-muted)]">
              All {VOCAB.length} words have graduated. Add more words, or reset to run through them again.
            </p>
          </div>
        ) : (
          <div className="surface p-12 text-center">
            <p className="serif text-2xl">Loading your batch…</p>
          </div>
        )}
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="eyebrow">{label}</p>
      <p className="serif text-2xl mt-1">{value}</p>
    </div>
  );
}

function ProgressBar({ value, total }: { value: number; total: number }) {
  const pct = total === 0 ? 0 : Math.round((value / total) * 100);
  return (
    <div className="flex-1">
      <div className="flex items-baseline justify-between mb-1">
        <span className="eyebrow">Mastery</span>
        <span className="mono text-xs text-[var(--color-ink-faint)]">{value} / {total} · {pct}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-[var(--color-rule)] overflow-hidden">
        <div
          className="h-full bg-[var(--color-accent)] transition-[width] duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function MasteryPips({ streak }: { streak: number }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="text-[var(--color-ink-faint)]">mastery</span>
      {Array.from({ length: GOOD_STEPS_TO_GRADUATE }).map((_, i) => (
        <span
          key={i}
          aria-hidden
          className={`w-2 h-2 rounded-full ${
            i < streak ? "bg-[var(--color-success)]" : "bg-[var(--color-rule-strong)]"
          }`}
        />
      ))}
    </span>
  );
}

function renderClozeSentence(sentence: string, word: string): React.ReactNode {
  const pattern = new RegExp(`\\b(${escape(word)}\\w*)\\b`, "i");
  const match = sentence.match(pattern);
  if (!match) return sentence;
  const [whole] = match;
  const idx = match.index ?? 0;
  return (
    <>
      {sentence.slice(0, idx)}
      <span className="px-2 py-0.5 mx-0.5 rounded bg-[var(--color-ink)]/8 text-transparent select-none">
        {whole.replace(/./g, "•")}
      </span>
      {sentence.slice(idx + whole.length)}
    </>
  );
}

function escape(input: string): string {
  return input.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
