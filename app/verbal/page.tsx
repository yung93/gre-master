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
  REVISIT_EVERY,
  applyGrade,
  initialLearnProgress,
  isMastered,
  markRevisit,
  pickFromBatch,
  pickRevisit,
  refillBatch,
  seedBatch,
} from "@/lib/learn-queue";
import { useLocalState } from "@/lib/storage";
import type { LearnProgress, MemoryAid, SrsGrade, SrsState } from "@/lib/types";

const ORDERED_IDS = VOCAB.map((v) => v.id);

interface SessionStats {
  reviewed: number;
  graduatedThisSession: number;
}

export default function VerbalPage() {
  const [progress, setProgress] = useLocalState<Record<string, LearnProgress>>("learn/vocab", {});
  const [srs, setSrs] = useLocalState<Record<string, SrsState>>("srs/vocab", {});
  const [batch, setBatch] = useLocalState<string[]>("learn/vocab-batch", []);
  const [masteryCount, setMasteryCount] = useLocalState<number>("learn/vocab-mastery-count", 0);
  const [stats, setStats] = useState<SessionStats>({ reviewed: 0, graduatedThisSession: 0 });
  const [currentId, setCurrentId] = useState<string | null>(null);
  const hydratedRef = useRef(false);

  // On first hydration: migrate legacy progress (add everMastered/revisitCount),
  // then build/repair the persisted batch (random backfill) once.
  useEffect(() => {
    if (hydratedRef.current) return;
    hydratedRef.current = true;

    let migrated = progress;
    const needsMigration = Object.values(progress).some(
      (p) => p.everMastered === undefined || p.revisitCount === undefined,
    );
    if (needsMigration) {
      migrated = Object.fromEntries(
        Object.entries(progress).map(([id, p]) => [
          id,
          {
            ...p,
            everMastered: p.everMastered ?? p.graduated ?? false,
            revisitCount: p.revisitCount ?? 0,
          },
        ]),
      );
      setProgress(migrated);
    }

    setBatch((prev) => {
      const repaired = prev.length > 0
        ? refillBatch(prev, ORDERED_IDS, migrated, BATCH_SIZE)
        : seedBatch(ORDERED_IDS, migrated, BATCH_SIZE);
      setCurrentId(pickFromBatch(repaired, migrated));
      return repaired;
    });
  }, [progress, setBatch, setProgress]);

  // Keep a valid current card whenever the batch changes.
  useEffect(() => {
    if (!hydratedRef.current) return;
    if (currentId && batch.includes(currentId)) return;
    if (batch.length > 0) setCurrentId(pickFromBatch(batch, progress));
    else setCurrentId(null);
  }, [batch, currentId, progress]);

  const current = useMemo(() => VOCAB.find((v) => v.id === currentId) ?? null, [currentId]);
  const currentProgress = currentId ? progress[currentId] ?? initialLearnProgress() : null;

  // "Mastered" counts words ever mastered, so it does not dip during revisits.
  const masteredCount = useMemo(
    () => ORDERED_IDS.reduce((n, id) => (isMastered(progress[id]) ? n + 1 : n), 0),
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

    let nextProgressMap = { ...progress, [id]: nextProgress };

    // A graduation is either mastering a new word or re-mastering a revisited one.
    const justGraduated = nextProgress.graduated && !prevProgress.graduated;
    if (justGraduated) {
      const prevSrs = srs[id] ?? initialSrsState(now);
      setSrs((s) => ({ ...s, [id]: scheduleNext(prevSrs, grade === "easy" ? "easy" : "good", now) }));
    }

    let nextBatch = batch;
    if (justGraduated) {
      const nextCount = masteryCount + 1;
      setMasteryCount(nextCount);

      // Every REVISIT_EVERY masteries, bring back a mastered word instead of a
      // new one. Exclude the word just graduated and everything still in the batch.
      const wantRevisit = nextCount % REVISIT_EVERY === 0;
      const exclude = new Set<string>([...batch, id]);
      const revisitId = wantRevisit
        ? pickRevisit(ORDERED_IDS, nextProgressMap, exclude)
        : undefined;

      if (revisitId) {
        nextProgressMap = { ...nextProgressMap, [revisitId]: markRevisit(nextProgressMap[revisitId], now) };
        setProgress(nextProgressMap);
        // Drop the graduated word, keep the rest, then add the revisit word.
        const survivors = batch.filter((b) => b !== id && !nextProgressMap[b]?.graduated);
        nextBatch = [...survivors, revisitId];
        // Top up with new words if the revisit did not fill the batch.
        nextBatch = refillBatch(nextBatch, ORDERED_IDS, nextProgressMap, BATCH_SIZE);
      } else {
        setProgress(nextProgressMap);
        nextBatch = refillBatch(batch, ORDERED_IDS, nextProgressMap, BATCH_SIZE);
      }
    } else {
      setProgress(nextProgressMap);
    }

    setStats((s) => ({
      reviewed: s.reviewed + 1,
      graduatedThisSession: s.graduatedThisSession + (justGraduated ? 1 : 0),
    }));

    setBatch(nextBatch);
    setCurrentId(pickFromBatch(nextBatch, nextProgressMap, id));
  }

  function resetProgress() {
    if (typeof window !== "undefined" && !window.confirm("Reset all vocabulary progress?")) return;
    setProgress({});
    setSrs({});
    setMasteryCount(0);
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
            (or <span className="font-medium text-[var(--color-ink)]">Easy</span> once) to master a word; a new
            word then takes its place. Every {REVISIT_EVERY} masteries, a previously-mastered word resurfaces
            for review instead of a new one — so nothing is learned once and forgotten.
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
                  {current.memoryAid && <MemoryAidBlock aid={current.memoryAid} />}
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

function MemoryAidBlock({ aid }: { aid: MemoryAid }) {
  return (
    <div className="surface-soft px-4 py-3">
      <p className="eyebrow">記憶 · Memory hook</p>
      {aid.roots && aid.roots.length > 0 && (
        <div className="mt-2 flex flex-wrap items-center gap-x-1.5 gap-y-2">
          {aid.roots.map((r, i) => (
            <span key={i} className="inline-flex items-center gap-1.5">
              {i > 0 && <span className="text-[var(--color-ink-faint)]">+</span>}
              <span className="mono text-sm px-2 py-0.5 rounded bg-[var(--color-accent-soft)] text-[oklch(30%_0.09_195)]">
                {r.part}
              </span>
              <span className="text-sm text-[var(--color-ink-muted)]">{r.meaning}</span>
            </span>
          ))}
        </div>
      )}
      {aid.mnemonic && (
        <p className="mt-2.5 text-sm leading-relaxed text-[var(--color-ink)]">{aid.mnemonic}</p>
      )}
    </div>
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
