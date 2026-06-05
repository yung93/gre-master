"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Flashcard from "@/components/Flashcard";
import SrsControls from "@/components/SrsControls";
import { QUANT } from "@/data/quant";
import { initialSrsState, scheduleNext } from "@/lib/srs";
import {
  GOOD_STEPS_TO_GRADUATE,
  applyGrade,
  initialLearnProgress,
  isMastered,
  pickFromBatch,
  refillBatchByTopic,
  seedBatchByTopic,
  topicMastery,
} from "@/lib/learn-queue";
import { useLocalState } from "@/lib/storage";
import type { LearnProgress, QuantTopic, SrsGrade, SrsState } from "@/lib/types";

// Quant's deck is small, so the batch is tighter than verbal's 10. Unlike verbal,
// a mastered problem is retired for good — there is no spaced revisit.
const QUANT_BATCH_SIZE = 6;

const TOPIC_LABEL: Record<QuantTopic, string> = {
  arithmetic: "Arithmetic",
  algebra: "Algebra",
  geometry: "Geometry",
  "data-analysis": "Data Analysis",
  "word-problem": "Word Problems",
};
const TOPIC_ORDER: QuantTopic[] = [
  "arithmetic",
  "algebra",
  "geometry",
  "data-analysis",
  "word-problem",
];

const ORDERED_IDS = QUANT.map((q) => q.id);
const TOPIC_OF = new Map<string, QuantTopic>(QUANT.map((q) => [q.id, q.topic]));
const topicOf = (id: string): string => TOPIC_OF.get(id) ?? "arithmetic";

interface SessionStats {
  reviewed: number;
  masteredThisSession: number;
}

export default function QuantPage() {
  const [progress, setProgress] = useLocalState<Record<string, LearnProgress>>("learn/quant", {});
  const [srs, setSrs] = useLocalState<Record<string, SrsState>>("srs/quant", {});
  const [batch, setBatch] = useLocalState<string[]>("learn/quant-batch", []);
  const [stats, setStats] = useState<SessionStats>({ reviewed: 0, masteredThisSession: 0 });
  const [currentId, setCurrentId] = useState<string | null>(null);
  const [showTopics, setShowTopics] = useState(false);
  const hydratedRef = useRef(false);

  // On first hydration, build or repair the persisted batch once (topic-balanced).
  useEffect(() => {
    if (hydratedRef.current) return;
    hydratedRef.current = true;

    setBatch((prev) => {
      const repaired = prev.length > 0
        ? refillBatchByTopic(prev, ORDERED_IDS, progress, topicOf, QUANT_BATCH_SIZE)
        : seedBatchByTopic(ORDERED_IDS, progress, topicOf, QUANT_BATCH_SIZE);
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

  const current = useMemo(() => QUANT.find((q) => q.id === currentId) ?? null, [currentId]);
  const currentProgress = currentId ? progress[currentId] ?? initialLearnProgress() : null;

  const topicStats = useMemo(() => topicMastery(ORDERED_IDS, progress, topicOf), [progress]);
  const statsByTopic = useMemo(
    () => new Map(topicStats.map((t) => [t.topic, t])),
    [topicStats],
  );
  const masteredCount = useMemo(
    () => ORDERED_IDS.reduce((n, id) => (isMastered(progress[id]) ? n + 1 : n), 0),
    [progress],
  );
  const activeInBatch = batch.filter(
    (id) => (progress[id]?.seen ?? 0) > 0 && !progress[id]?.graduated,
  ).length;

  // The topic the next new card will be drawn from (lowest mastery ratio).
  const weakestTopic = useMemo<QuantTopic | null>(() => {
    let weakest: QuantTopic | null = null;
    let min = Infinity;
    for (const topic of TOPIC_ORDER) {
      const ratio = statsByTopic.get(topic)?.ratio ?? 0;
      if (ratio < min) {
        min = ratio;
        weakest = topic;
      }
    }
    return masteredCount === QUANT.length ? null : weakest;
  }, [statsByTopic, masteredCount]);

  function handleGrade(grade: SrsGrade) {
    if (!current) return;
    const now = Date.now();
    const id = current.id;
    const prevProgress = progress[id] ?? initialLearnProgress();
    const nextProgress = applyGrade(prevProgress, grade, now);

    const nextProgressMap = { ...progress, [id]: nextProgress };
    setProgress(nextProgressMap);

    // A mastered problem graduates out of the batch for good (no revisit). Its
    // freed slot is backfilled with a new problem from the weakest topic.
    const justMastered = nextProgress.graduated && !prevProgress.graduated;
    if (justMastered) {
      const prevSrs = srs[id] ?? initialSrsState(now);
      setSrs((s) => ({ ...s, [id]: scheduleNext(prevSrs, grade === "easy" ? "easy" : "good", now) }));
    }

    const nextBatch = justMastered
      ? refillBatchByTopic(batch, ORDERED_IDS, nextProgressMap, topicOf, QUANT_BATCH_SIZE)
      : batch;

    setStats((s) => ({
      reviewed: s.reviewed + 1,
      masteredThisSession: s.masteredThisSession + (justMastered ? 1 : 0),
    }));

    setBatch(nextBatch);
    setCurrentId(pickFromBatch(nextBatch, nextProgressMap, id));
  }

  function resetProgress() {
    if (typeof window !== "undefined" && !window.confirm("Reset all quantitative progress?")) return;
    setProgress({});
    setSrs({});
    const fresh = seedBatchByTopic(ORDERED_IDS, {}, topicOf, QUANT_BATCH_SIZE);
    setBatch(fresh);
    setStats({ reviewed: 0, masteredThisSession: 0 });
    setCurrentId(pickFromBatch(fresh, {}));
  }

  const allMastered = masteredCount === QUANT.length;

  return (
    <div className="page-shell pt-10 pb-20">
      <header className="hidden lg:grid lg:grid-cols-[2fr_1fr] gap-8 items-end">
        <div>
          <p className="eyebrow">Quantitative · Drills</p>
          <h1 className="serif mt-3 text-[length:var(--text-headline)] leading-tight">
            <em className="not-italic">Work</em> it, then flip.
          </h1>
          <p className="mt-4 max-w-2xl text-[var(--color-ink-muted)] leading-relaxed text-sm">
            You drill a rolling set of {QUANT_BATCH_SIZE} problems. Answer{" "}
            <span className="font-medium text-[var(--color-ink)]">Good</span> {GOOD_STEPS_TO_GRADUATE} times
            (or <span className="font-medium text-[var(--color-ink)]">Easy</span> once) to master a problem; once
            mastered it retires for good, and a new one takes its place — drawn from whichever topic you've mastered{" "}
            <em className="not-italic">least</em>, so weak areas surface first.
          </p>
        </div>
        <div className="surface-soft px-5 py-4 grid grid-cols-3 gap-4">
          <Stat label="In batch" value={`${activeInBatch}/${QUANT_BATCH_SIZE}`} />
          <Stat label="Mastered" value={`${masteredCount}`} />
          <Stat label="Total" value={`${QUANT.length}`} />
        </div>
      </header>

      <div className="fixed inset-x-0 bottom-0 top-[var(--nav-h,148px)] z-20 bg-[var(--color-bg)] flex flex-col gap-4 px-[var(--space-page-x)] py-3 box-border lg:static lg:inset-auto lg:z-auto lg:bg-transparent lg:mt-6 lg:px-0 lg:py-0 lg:gap-0 lg:block">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setShowTopics((v) => !v)}
            aria-expanded={showTopics}
            aria-controls="quant-topics"
            className="flex-1 min-w-0 text-left lg:pointer-events-none"
          >
            <ProgressBar label="Overall mastery" value={masteredCount} total={QUANT.length} />
          </button>
          <button onClick={resetProgress} className="btn btn-ghost text-xs shrink-0">Reset</button>
        </div>

        <div
          id="quant-topics"
          className={`${showTopics ? "grid" : "hidden"} sm:grid-cols-2 lg:grid lg:grid-cols-5 gap-x-6 gap-y-4 lg:mt-6`}
        >
        {TOPIC_ORDER.map((topic) => {
          const t = statsByTopic.get(topic);
          return (
            <TopicProgress
              key={topic}
              label={TOPIC_LABEL[topic]}
              mastered={t?.mastered ?? 0}
              total={t?.total ?? 0}
              isWeakest={topic === weakestTopic}
            />
          );
        })}
      </div>

        <div className="flex-1 min-h-0 flex flex-col pb-[60px] lg:block lg:flex-none lg:mt-8 lg:pb-0">
        {current && currentProgress ? (
          <>
            <Flashcard
              cardKey={current.id}
              front={
                <div className="space-y-6">
                  <div className="flex items-baseline justify-between">
                    <p className="eyebrow">{TOPIC_LABEL[current.topic]}</p>
                    <p className="mono text-xs text-[var(--color-ink-faint)]">
                      difficulty {"●".repeat(current.difficulty)}{"○".repeat(3 - current.difficulty)}
                    </p>
                  </div>
                  <p className="serif text-2xl leading-relaxed max-w-2xl">{current.question}</p>
                  {current.choices && (
                    <ul className="grid sm:grid-cols-2 gap-2 max-w-2xl">
                      {current.choices.map((choice, i) => (
                        <li key={i} className="surface-soft px-4 py-3 text-sm flex items-baseline gap-3">
                          <span className="mono text-xs text-[var(--color-ink-faint)]">{String.fromCharCode(65 + i)}</span>
                          <span>{choice}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              }
              back={
                <div className="space-y-5">
                  <p className="eyebrow">{TOPIC_LABEL[current.topic]} · Answer</p>
                  <p className="serif text-3xl text-[var(--color-accent)]">{current.answer}</p>
                  <hr className="rule" />
                  <div className="grid md:grid-cols-2 gap-5">
                    <p className="leading-relaxed text-[var(--color-ink-muted)]">{current.explanation}</p>
                    <p className="serif leading-relaxed md:border-l md:border-[var(--color-rule)] md:pl-5">{current.explanationZh}</p>
                  </div>
                </div>
              }
              footerFront={<MasteryPips streak={currentProgress.streak} />}
              footerBack={<MasteryPips streak={currentProgress.streak} />}
            />
            <SrsControls onGrade={handleGrade} />
          </>
        ) : allMastered ? (
          <div className="surface p-12 text-center">
            <p className="serif text-2xl">Every problem mastered. 🎉</p>
            <p className="mt-3 text-sm text-[var(--color-ink-muted)]">
              All {QUANT.length} problems have graduated. Add more, or reset to run through them again.
            </p>
          </div>
        ) : (
          <div className="surface p-12 text-center">
            <p className="serif text-2xl">Loading your batch…</p>
          </div>
        )}
        </div>
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

function ProgressBar({ label, value, total }: { label: string; value: number; total: number }) {
  const pct = total === 0 ? 0 : Math.round((value / total) * 100);
  return (
    <div className="flex-1">
      <div className="flex items-baseline justify-between mb-1">
        <span className="eyebrow">{label}</span>
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

function TopicProgress({
  label,
  mastered,
  total,
  isWeakest,
}: {
  label: string;
  mastered: number;
  total: number;
  isWeakest: boolean;
}) {
  const pct = total === 0 ? 0 : Math.round((mastered / total) * 100);
  return (
    <div>
      <div className="flex items-baseline justify-between gap-2 mb-1">
        <span className="text-xs font-medium text-[var(--color-ink)]">{label}</span>
        <span className="mono text-[11px] text-[var(--color-ink-faint)]">{mastered}/{total}</span>
      </div>
      <div className="h-1.5 rounded-full bg-[var(--color-rule)] overflow-hidden">
        <div
          className="h-full transition-[width] duration-500"
          style={{
            width: `${pct}%`,
            background: isWeakest ? "var(--color-warm)" : "var(--color-accent)",
          }}
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
