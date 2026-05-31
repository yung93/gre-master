"use client";

import { useEffect, useMemo, useState } from "react";
import Flashcard from "@/components/Flashcard";
import SrsControls from "@/components/SrsControls";
import { QUANT } from "@/data/quant";
import { initialSrsState, isDue, scheduleNext } from "@/lib/srs";
import { useLocalState } from "@/lib/storage";
import type { QuantTopic, SrsGrade, SrsState } from "@/lib/types";

const TOPIC_LABEL: Record<QuantTopic, string> = {
  arithmetic: "Arithmetic",
  algebra: "Algebra",
  geometry: "Geometry",
  "data-analysis": "Data Analysis",
  "word-problem": "Word Problems",
};

type TopicFilter = "all" | QuantTopic;

function pickNext(
  states: Record<string, SrsState>,
  topic: TopicFilter,
  excludeId: string | undefined,
  now: number,
): string | null {
  const pool = QUANT.filter(
    (q) => q.id !== excludeId && (topic === "all" || q.topic === topic),
  );
  if (pool.length === 0) return null;
  const due = pool.filter((q) => isDue(states[q.id] ?? initialSrsState(now), now));
  const choices = due.length > 0 ? due : pool;
  return choices[Math.floor(Math.random() * choices.length)].id;
}

export default function QuantPage() {
  const [states, setStates] = useLocalState<Record<string, SrsState>>("srs/quant", {});
  const [topic, setTopic] = useState<TopicFilter>("all");
  const [currentId, setCurrentId] = useState<string | null>(null);
  const [reviewed, setReviewed] = useState(0);

  useEffect(() => {
    if (!currentId) {
      const next = pickNext(states, topic, undefined, Date.now());
      if (next) setCurrentId(next);
    }
  }, [currentId, states, topic]);

  useEffect(() => {
    const next = pickNext(states, topic, undefined, Date.now());
    setCurrentId(next);
  }, [topic]); // eslint-disable-line react-hooks/exhaustive-deps

  const current = useMemo(() => QUANT.find((q) => q.id === currentId) ?? null, [currentId]);

  function handleGrade(grade: SrsGrade) {
    if (!current) return;
    const now = Date.now();
    const prev = states[current.id] ?? initialSrsState(now);
    const nextState = scheduleNext(prev, grade, now);
    setStates((s) => ({ ...s, [current.id]: nextState }));
    setReviewed((r) => r + 1);
    setCurrentId(pickNext(states, topic, current.id, now));
  }

  const topics: TopicFilter[] = ["all", "arithmetic", "algebra", "geometry", "data-analysis", "word-problem"];

  return (
    <div className="page-shell pt-10 pb-20">
      <header className="grid lg:grid-cols-[2fr_1fr] gap-8 items-end">
        <div>
          <p className="eyebrow">Quantitative · Drills</p>
          <h1 className="serif mt-3 text-[length:var(--text-headline)] leading-tight">
            <em className="not-italic">Work</em> it, then flip.
          </h1>
          <p className="mt-4 max-w-2xl text-[var(--color-ink-muted)] leading-relaxed text-sm">
            Solve the problem on scratch paper before flipping. The back shows the
            answer and a worked explanation; grade yourself the same way you grade
            vocabulary so the system can space repetitions.
          </p>
        </div>
        <div className="surface-soft px-5 py-4 grid grid-cols-3 gap-4">
          <div>
            <p className="eyebrow">Reviewed</p>
            <p className="serif text-2xl mt-1">{reviewed}</p>
          </div>
          <div>
            <p className="eyebrow">In topic</p>
            <p className="serif text-2xl mt-1">
              {topic === "all" ? QUANT.length : QUANT.filter((q) => q.topic === topic).length}
            </p>
          </div>
          <div>
            <p className="eyebrow">Total</p>
            <p className="serif text-2xl mt-1">{QUANT.length}</p>
          </div>
        </div>
      </header>

      <div className="mt-8 flex flex-wrap gap-2">
        {topics.map((t) => (
          <button
            key={t}
            onClick={() => setTopic(t)}
            className={`btn text-xs ${t === topic ? "btn-primary" : "btn-secondary"}`}
          >
            {t === "all" ? "All topics" : TOPIC_LABEL[t]}
          </button>
        ))}
      </div>

      <div className="mt-8">
        {current ? (
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
                    <div>
                      <p className="eyebrow">Working · English</p>
                      <p className="mt-2 leading-relaxed text-[var(--color-ink-muted)]">{current.explanation}</p>
                    </div>
                    <div className="md:border-l md:border-[var(--color-rule)] md:pl-5">
                      <p className="eyebrow">解答 · 繁體中文</p>
                      <p className="serif mt-2 leading-relaxed">{current.explanationZh}</p>
                    </div>
                  </div>
                </div>
              }
              footerFront={<span>Solve on paper, then flip</span>}
              footerBack={<span>Grade your recall</span>}
            />
            <SrsControls onGrade={handleGrade} />
          </>
        ) : (
          <div className="surface p-12 text-center">
            <p className="serif text-2xl">Nothing in this topic.</p>
            <p className="mt-3 text-sm text-[var(--color-ink-muted)]">Try another topic above.</p>
          </div>
        )}
      </div>
    </div>
  );
}
