"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { CheckCircleIcon, CrossCircleIcon } from "@/components/StatusIcons";
import { QUANT } from "@/data/quant";
import {
  FORMAT_LABEL,
  QUANT_RESET_KEY,
  TOPIC_LABEL,
  TOPIC_ORDER,
  choiceLetter,
  choicesOf,
  correctAnswerText,
  isAnswerCorrect,
} from "@/lib/quant";
import { useLocalState, writeJson } from "@/lib/storage";
import type { QuantAttempt, QuantQuestion, QuantTopic } from "@/lib/types";

const TOPIC_QUESTIONS = new Map<QuantTopic, QuantQuestion[]>(
  TOPIC_ORDER.map((topic) => [topic, QUANT.filter((q) => q.topic === topic)]),
);

/**
 * Deterministic 32-bit hash of a question id under a session seed. Ordering
 * the bank by this hash shuffles it without calling Math.random() during
 * render, which would desync the server-rendered HTML from hydration.
 */
function shuffleRank(seed: number, id: string): number {
  let h = seed ^ 0x9e3779b9;
  for (let i = 0; i < id.length; i += 1) {
    h = Math.imul(h ^ id.charCodeAt(i), 0x85ebca6b);
    h ^= h >>> 13;
  }
  return h >>> 0;
}

function randomSeed(): number {
  return Math.floor(Math.random() * 0x7fffffff) + 1;
}

interface Feedback {
  isCorrect: boolean;
  selected: string[];
}

export default function QuantPage() {
  const [attempts, setAttempts] = useLocalState<Record<string, QuantAttempt>>("quant/attempts", {});
  const [selected, setSelected] = useState<string[]>([]);
  const [numericInput, setNumericInput] = useState("");
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [showTopics, setShowTopics] = useState(false);
  // Shuffle seed for the random question order. Starts at 0 so server render
  // and hydration agree, then re-rolls once per visit after mount.
  const [seed, setSeed] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setSeed(randomSeed());
  }, []);

  // The whole bank in seed-shuffled order. "Next question" and the prev/next
  // arrows all walk this same order; the deck reshuffles on every reload.
  const order = useMemo(
    () => [...QUANT].sort((a, b) => shuffleRank(seed, a.id) - shuffleRank(seed, b.id)),
    [seed],
  );
  const current = index < order.length ? order[index] : null;

  const tally = useMemo(() => {
    let correct = 0;
    let wrong = 0;
    for (const q of QUANT) {
      const a = attempts[q.id];
      if (!a) continue;
      if (a.outcome === "correct") correct += 1;
      else wrong += 1;
    }
    return { correct, wrong, finished: correct + wrong };
  }, [attempts]);

  const topicTallies = useMemo(
    () =>
      TOPIC_ORDER.map((topic) => {
        const questions = TOPIC_QUESTIONS.get(topic) ?? [];
        let correct = 0;
        let wrong = 0;
        for (const q of questions) {
          const a = attempts[q.id];
          if (!a) continue;
          if (a.outcome === "correct") correct += 1;
          else wrong += 1;
        }
        return { topic, correct, wrong, total: questions.length };
      }),
    [attempts],
  );

  const answer = current?.format === "numeric" ? [numericInput] : selected;
  const canSubmit =
    current !== null &&
    (current.format === "numeric" ? numericInput.trim() !== "" : selected.length > 0);

  function toggleChoice(letter: string) {
    if (!current || feedback) return;
    if (current.format === "multi") {
      setSelected((prev) =>
        prev.includes(letter) ? prev.filter((l) => l !== letter) : [...prev, letter].sort(),
      );
    } else {
      setSelected([letter]);
    }
  }

  function handleSubmit() {
    if (!current || !canSubmit || feedback) return;
    const isCorrect = isAnswerCorrect(current, answer);
    const outcome = isCorrect ? "correct" : "wrong";
    setAttempts((prev) => {
      const existing = prev[current.id];
      return {
        ...prev,
        [current.id]: {
          outcome,
          firstOutcome: existing?.firstOutcome ?? outcome,
          attempts: (existing?.attempts ?? 0) + 1,
          lastAnsweredAt: Date.now(),
        },
      };
    });
    setFeedback({ isCorrect, selected: answer });
  }

  function clearEntry() {
    setSelected([]);
    setNumericInput("");
    setFeedback(null);
  }

  function handleNext() {
    setIndex((i) => i + 1);
    clearEntry();
  }

  /**
   * Free navigation through the shuffled order (wrapping at the ends). Useful
   * for skipping a question or revisiting one; answering still records
   * normally.
   */
  function step(direction: 1 | -1) {
    setIndex((i) => (i + direction + order.length) % order.length);
    clearEntry();
  }

  /** Re-roll the seed for a fresh shuffle and start from the top of the deck. */
  function reshuffle() {
    setSeed(randomSeed());
    setIndex(0);
    clearEntry();
  }

  function resetProgress() {
    if (typeof window !== "undefined" && !window.confirm("Reset all quantitative progress?")) return;
    // Stamp the reset so the cloud merge drops the old attempts instead of
    // syncing them straight back from Firestore.
    writeJson(QUANT_RESET_KEY, Date.now());
    setAttempts({});
    reshuffle();
  }

  return (
    <div className="page-shell pt-10 pb-20">
      <header className="hidden lg:grid lg:grid-cols-[2fr_1fr] gap-8 items-end">
        <div>
          <p className="eyebrow">Quantitative · Practice</p>
          <h1 className="serif mt-3 text-[length:var(--text-headline)] leading-tight">
            <em className="not-italic">Answer</em>, then learn.
          </h1>
          <p className="mt-4 max-w-2xl text-[var(--color-ink-muted)] leading-relaxed text-sm">
            {QUANT.length} GRE-style problems — quantitative comparison, multiple choice, and numeric
            entry — organized by topic. The whole bank is reshuffled into a{" "}
            <em className="not-italic">fresh random order</em> on every visit, and every answer is
            recorded as correct or wrong.
          </p>
        </div>
        <div className="surface-soft px-5 py-4">
          <div className="grid grid-cols-3 gap-4">
            <Stat label="Finished" value={`${tally.finished}/${QUANT.length}`} />
            <Stat label="Correct" value={`${tally.correct}`} tone="success" />
            <Stat label="Wrong" value={`${tally.wrong}`} tone="danger" />
          </div>
          <Link href="/quant/list" className="btn btn-secondary text-xs w-full mt-4">
            Browse question list →
          </Link>
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
            <OverallBar correct={tally.correct} wrong={tally.wrong} total={QUANT.length} />
          </button>
          <button onClick={resetProgress} className="btn btn-ghost text-xs shrink-0">Reset</button>
        </div>

        <div
          id="quant-topics"
          className={`${showTopics ? "grid" : "hidden"} sm:grid-cols-2 lg:grid lg:grid-cols-5 gap-x-6 gap-y-4 lg:mt-6`}
        >
          {topicTallies.map((t) => (
            <TopicProgress
              key={t.topic}
              label={TOPIC_LABEL[t.topic]}
              correct={t.correct}
              wrong={t.wrong}
              total={t.total}
            />
          ))}
        </div>

        <div className="flex-1 min-h-0 flex flex-col lg:block lg:flex-none lg:mt-8">
        {current ? (
          <article className="surface p-6 sm:p-8 flex-1 min-h-0 overflow-y-auto lg:flex-none lg:min-h-[auto] lg:overflow-visible">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="eyebrow">
                {TOPIC_LABEL[current.topic]} · {FORMAT_LABEL[current.format]}
              </p>
              <p className="mono text-xs text-[var(--color-ink-faint)]">
                difficulty {"●".repeat(current.difficulty)}{"○".repeat(3 - current.difficulty)}
              </p>
            </div>

            {current.question && (
              <p className="serif mt-5 text-xl sm:text-2xl leading-relaxed max-w-2xl">{current.question}</p>
            )}

            {current.figure && (
              <img
                src={current.figure.src}
                alt={current.figure.alt}
                width={current.figure.width}
                height={current.figure.height}
                className="mt-5 h-auto max-w-full"
              />
            )}

            {current.format === "quantitative-comparison" && (
              <div className="mt-5 grid sm:grid-cols-2 gap-3 max-w-2xl">
                <QuantityPanel label="Quantity A" value={current.quantityA ?? ""} />
                <QuantityPanel label="Quantity B" value={current.quantityB ?? ""} />
              </div>
            )}

            {current.format === "multi" && !feedback && (
              <p className="mt-4 text-xs text-[var(--color-ink-muted)]">Select all that apply.</p>
            )}

            {current.format === "numeric" ? (
              <form
                className="mt-6 flex items-center gap-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                <input
                  type="text"
                  inputMode="decimal"
                  value={numericInput}
                  onChange={(e) => setNumericInput(e.target.value)}
                  disabled={feedback !== null}
                  placeholder="Your answer"
                  aria-label="Numeric answer"
                  className="mono w-44 px-4 py-3 text-base bg-[var(--color-bg-elevated)] border border-[var(--color-rule)] rounded-md focus:outline-2 focus:outline-[var(--color-accent)] disabled:opacity-60"
                />
              </form>
            ) : (
              <ul className="mt-6 grid gap-2 max-w-2xl">
                {choicesOf(current).map((choice, i) => {
                  const letter = choiceLetter(i);
                  const isSelected = selected.includes(letter);
                  const isCorrectChoice = current.correct.includes(letter);
                  let stateClass = "border-[var(--color-rule)] hover:border-[var(--color-rule-strong)]";
                  if (feedback) {
                    if (isCorrectChoice) stateClass = "border-[var(--color-success)] bg-[var(--color-accent-soft)]";
                    else if (isSelected) stateClass = "border-[var(--color-danger)] bg-[var(--color-warm-soft)]";
                    else stateClass = "border-[var(--color-rule)] opacity-60";
                  } else if (isSelected) {
                    stateClass = "border-[var(--color-accent)] bg-[var(--color-accent-soft)]";
                  }
                  return (
                    <li key={letter}>
                      <button
                        type="button"
                        onClick={() => toggleChoice(letter)}
                        disabled={feedback !== null}
                        aria-pressed={isSelected}
                        className={`w-full text-left px-4 py-3 text-sm flex items-baseline gap-3 rounded-md border transition-colors ${stateClass}`}
                      >
                        <span className="mono text-xs text-[var(--color-ink-faint)]">{letter}</span>
                        <span>{choice}</span>
                        {feedback && isCorrectChoice && (
                          <span aria-hidden className="ml-auto self-center inline-flex">
                            <CheckCircleIcon />
                          </span>
                        )}
                        {feedback && !isCorrectChoice && isSelected && (
                          <span aria-hidden className="ml-auto self-center inline-flex">
                            <CrossCircleIcon />
                          </span>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}

            {feedback ? (
              <div className="mt-6">
                <p
                  className={`serif text-2xl inline-flex items-center gap-2.5 ${
                    feedback.isCorrect ? "text-[var(--color-success)]" : "text-[var(--color-danger)]"
                  }`}
                  role="status"
                >
                  {feedback.isCorrect ? "Correct" : "Not quite"}
                  {feedback.isCorrect ? <CheckCircleIcon size={24} /> : <CrossCircleIcon size={24} />}
                </p>
                {!feedback.isCorrect && (
                  <p className="mt-2 text-sm text-[var(--color-ink-muted)]">
                    Answer: <span className="font-medium text-[var(--color-ink)]">{correctAnswerText(current)}</span>
                  </p>
                )}
                <hr className="rule mt-5" />
                <div className="mt-5 grid md:grid-cols-2 gap-5">
                  <p className="leading-relaxed text-sm text-[var(--color-ink-muted)]">{current.explanation}</p>
                  <p className="serif leading-relaxed md:border-l md:border-[var(--color-rule)] md:pl-5">
                    {current.explanationZh}
                  </p>
                </div>
                <button onClick={handleNext} className="btn btn-primary mt-6">
                  Next question →
                </button>
              </div>
            ) : (
              <div className="mt-6 flex items-center gap-2">
                <button
                  onClick={() => step(-1)}
                  className="btn btn-secondary h-9 w-9 !px-0 inline-flex items-center justify-center shrink-0"
                  aria-label="Previous question"
                  title="Previous question"
                >
                  <ChevronLeftIcon />
                </button>
                <button onClick={handleSubmit} disabled={!canSubmit} className="btn btn-primary">
                  Check answer
                </button>
                <button
                  onClick={() => step(1)}
                  className="btn btn-secondary h-9 w-9 !px-0 inline-flex items-center justify-center shrink-0"
                  aria-label="Next question"
                  title="Next question"
                >
                  <ChevronRightIcon />
                </button>
              </div>
            )}
          </article>
        ) : (
          <div className="surface p-12 text-center">
            <p className="serif text-2xl">
              {tally.finished === QUANT.length && tally.wrong === 0
                ? `All ${QUANT.length} questions answered correctly. 🎉`
                : "End of the deck."}
            </p>
            <p className="mt-3 text-sm text-[var(--color-ink-muted)]">
              {tally.correct} correct · {tally.wrong} wrong.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button onClick={reshuffle} className="btn btn-primary">
                Shuffle and go again
              </button>
              <Link href="/quant/list" className="btn btn-secondary">Browse all questions</Link>
            </div>
          </div>
        )}
          <div className="lg:hidden mt-3">
            <Link href="/quant/list" className="btn btn-secondary text-xs w-full">Browse question list →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value, tone }: { label: string; value: string; tone?: "success" | "danger" }) {
  const color =
    tone === "success"
      ? "text-[var(--color-success)]"
      : tone === "danger"
        ? "text-[var(--color-danger)]"
        : "";
  return (
    <div>
      <p className="eyebrow">{label}</p>
      <p className={`serif text-2xl mt-1 ${color}`}>{value}</p>
    </div>
  );
}

/**
 * Progress bar of finished questions, split into correct (green) and wrong
 * (red) segments. The breakdown appears in a tooltip on hover (same bubble
 * style as the essay annotations on the writing page). `pointer-events-auto`
 * keeps hover alive even when an ancestor disables pointer events (the
 * overall bar sits inside a mobile-only toggle button).
 */
function SplitBar({ correct, wrong, total }: { correct: number; wrong: number; total: number }) {
  const pct = (n: number) => (total === 0 ? 0 : (n / total) * 100);
  return (
    <div className="relative group/bar py-1 -my-1 pointer-events-auto">
      <div className="h-1.5 rounded-full bg-[var(--color-rule)] overflow-hidden flex">
        <div
          className="h-full bg-[var(--color-success)] transition-[width] duration-500"
          style={{ width: `${pct(correct)}%` }}
        />
        <div
          className="h-full bg-[var(--color-danger)] transition-[width] duration-500"
          style={{ width: `${pct(wrong)}%` }}
        />
      </div>
      <div
        role="tooltip"
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover/bar:block z-10"
      >
        <div className="relative bg-[var(--color-bg-elevated)] text-[var(--color-ink)] text-sm leading-snug rounded-lg border border-[var(--color-rule)] shadow-[var(--shadow-lift)] px-3 py-2 whitespace-nowrap">
          <span className="inline-flex items-center gap-3 mono text-xs">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircleIcon size={14} /> {correct}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CrossCircleIcon size={14} /> {wrong}
            </span>
          </span>
          <span
            aria-hidden
            className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rotate-45 bg-[var(--color-bg-elevated)] border-r border-b border-[var(--color-rule)]"
          />
        </div>
      </div>
    </div>
  );
}

function OverallBar({ correct, wrong, total }: { correct: number; wrong: number; total: number }) {
  const finished = correct + wrong;
  const pct = total === 0 ? 0 : Math.round((finished / total) * 100);
  return (
    <div className="flex-1">
      <div className="flex items-baseline justify-between mb-1">
        <span className="eyebrow">Finished</span>
        <span className="mono text-xs text-[var(--color-ink-faint)]">
          {finished} / {total} · {pct}%
        </span>
      </div>
      <SplitBar correct={correct} wrong={wrong} total={total} />
    </div>
  );
}

function TopicProgress({
  label,
  correct,
  wrong,
  total,
}: {
  label: string;
  correct: number;
  wrong: number;
  total: number;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-2 mb-1">
        <span className="text-xs font-medium text-[var(--color-ink)]">{label}</span>
        <span className="mono text-[11px] text-[var(--color-ink-faint)]">
          {correct + wrong}/{total}
        </span>
      </div>
      <SplitBar correct={correct} wrong={wrong} total={total} />
    </div>
  );
}

function ChevronLeftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="m14.5 6-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="m9.5 6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function QuantityPanel({ label, value }: { label: string; value: string }) {
  return (
    <div className="surface-soft px-4 py-4">
      <p className="eyebrow">{label}</p>
      <p className="serif mt-2 text-lg leading-relaxed">{value}</p>
    </div>
  );
}
