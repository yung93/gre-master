"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Pagination from "@/components/Pagination";
import { CheckCircleIcon, CrossCircleIcon, DashCircleIcon } from "@/components/StatusIcons";
import { QUANT } from "@/data/quant";
import {
  FORMAT_LABEL,
  FORMAT_SHORT,
  TOPIC_LABEL,
  TOPIC_ORDER,
  choiceLetter,
  choicesOf,
  correctAnswerText,
} from "@/lib/quant";
import { useLocalState } from "@/lib/storage";
import type { QuantAttempt, QuantQuestion, QuantTopic } from "@/lib/types";

type StatusFilter = "all" | "correct" | "wrong" | "unanswered";
type TopicFilter = QuantTopic | "all";
type DifficultySort = "none" | "asc" | "desc";

const PAGE_SIZE = 20;

const STATUS_FILTERS: { value: StatusFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "correct", label: "Correct" },
  { value: "wrong", label: "Wrong" },
  { value: "unanswered", label: "Unanswered" },
];

const SORT_CYCLE: Record<DifficultySort, DifficultySort> = {
  none: "asc",
  asc: "desc",
  desc: "none",
};

const SORT_TITLE: Record<DifficultySort, string> = {
  none: "Sort by difficulty (easiest first)",
  asc: "Easiest first — tap for hardest first",
  desc: "Hardest first — tap for original order",
};

function statusOf(attempt: QuantAttempt | undefined): StatusFilter {
  if (!attempt) return "unanswered";
  return attempt.outcome;
}

export default function QuantListPage() {
  const [attempts] = useLocalState<Record<string, QuantAttempt>>("quant/attempts", {});
  const [topic, setTopic] = useState<TopicFilter>("all");
  const [filter, setFilter] = useState<StatusFilter>("all");
  const [sort, setSort] = useState<DifficultySort>("none");
  const [page, setPage] = useState(1);

  const inTopic = useMemo(
    () => QUANT.filter((q) => topic === "all" || q.topic === topic),
    [topic],
  );

  const counts = useMemo(() => {
    const c = { all: inTopic.length, correct: 0, wrong: 0, unanswered: 0 };
    for (const q of inTopic) c[statusOf(attempts[q.id])] += 1;
    return c;
  }, [attempts, inTopic]);

  const filtered = useMemo(() => {
    const matched = inTopic.filter((q) => filter === "all" || statusOf(attempts[q.id]) === filter);
    if (sort === "none") return matched;
    const direction = sort === "asc" ? 1 : -1;
    return [...matched].sort((a, b) => (a.difficulty - b.difficulty) * direction);
  }, [attempts, filter, inTopic, sort]);

  // Back to the first page whenever the filters change the result set.
  useEffect(() => {
    setPage(1);
  }, [topic, filter, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageStart = (currentPage - 1) * PAGE_SIZE;
  const pageItems = filtered.slice(pageStart, pageStart + PAGE_SIZE);

  return (
    <div className="page-shell pt-10 pb-20">
      <header className="grid lg:grid-cols-[2fr_1fr] gap-8 items-end">
        <div>
          <p className="eyebrow">Quantitative · Question List</p>
          <h1 className="serif mt-3 text-[length:var(--text-headline)] leading-tight">
            The whole <em className="not-italic">question bank</em>.
          </h1>
          <p className="mt-4 max-w-2xl text-[var(--color-ink-muted)] leading-relaxed text-sm">
            Every question with its topic, format, and your result. Click a row to expand the full
            problem — the answer stays masked until you choose to review it, so you can re-test
            yourself first.
          </p>
        </div>
        <div className="surface-soft px-5 py-4">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="eyebrow">Showing</p>
              <p className="serif text-2xl mt-1">{filtered.length}</p>
            </div>
            <div>
              <p className="eyebrow">Correct</p>
              <p className="serif text-2xl mt-1 text-[var(--color-success)]">{counts.correct}</p>
            </div>
            <div>
              <p className="eyebrow">Wrong</p>
              <p className="serif text-2xl mt-1 text-[var(--color-danger)]">{counts.wrong}</p>
            </div>
          </div>
          <Link href="/quant" className="btn btn-secondary text-xs w-full mt-4">
            ← Back to practice
          </Link>
        </div>
      </header>

      <div
        className="mt-8 flex gap-2 overflow-x-auto lg:flex-wrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="group"
        aria-label="Filter by topic"
      >
        {(["all", ...TOPIC_ORDER] as TopicFilter[]).map((t) => (
          <button
            key={t}
            onClick={() => setTopic(t)}
            className={`btn text-xs shrink-0 whitespace-nowrap ${t === topic ? "btn-primary" : "btn-secondary"}`}
          >
            {t === "all" ? "All topics" : TOPIC_LABEL[t]}
          </button>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-end gap-1.5 sm:gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-1 sm:gap-2" role="group" aria-label="Filter by status">
          {STATUS_FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm leading-5 rounded-md whitespace-nowrap transition-colors ${
                filter === f.value
                  ? "font-bold text-[var(--color-accent)] bg-[var(--color-accent-soft)]"
                  : "text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
              }`}
              aria-pressed={filter === f.value}
            >
              {f.label}
            </button>
          ))}
        </div>
        <button
          onClick={() => setSort((s) => SORT_CYCLE[s])}
          className={`inline-flex items-center justify-center h-9 w-9 shrink-0 rounded-md border transition-colors ${
            sort !== "none"
              ? "bg-[var(--color-accent)] text-white border-[var(--color-accent)]"
              : "surface text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
          }`}
          aria-label={SORT_TITLE[sort]}
          title={SORT_TITLE[sort]}
        >
          {sort === "desc" ? <DifficultyDescIcon /> : <DifficultyAscIcon />}
        </button>
      </div>

      <div className="mt-6">
        {filtered.length === 0 ? (
          <div className="surface p-12 text-center">
            <p className="serif text-2xl">No questions match.</p>
            <p className="mt-3 text-sm text-[var(--color-ink-muted)]">Try a different filter.</p>
          </div>
        ) : (
          <>
            <ol className="surface divide-y divide-[var(--color-rule)] overflow-hidden">
              {pageItems.map((q, idx) => (
                <QuestionRow
                  key={q.id}
                  question={q}
                  index={pageStart + idx}
                  attempt={attempts[q.id]}
                />
              ))}
            </ol>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onChange={setPage}
              rangeStart={pageStart + 1}
              rangeEnd={pageStart + pageItems.length}
              total={filtered.length}
              itemNoun="question"
            />
          </>
        )}
      </div>
    </div>
  );
}

/** Ascending bars + down-pointing arrow flips for the two sort directions. */
function DifficultyAscIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 20v-4M10 20v-8M15 20V8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M20 5v12M20 17l-2.2-2.3M20 17l2.2-2.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DifficultyDescIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 20V8M10 20v-8M15 20v-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M20 5v12M20 17l-2.2-2.3M20 17l2.2-2.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StatusIcon({ attempt }: { attempt: QuantAttempt | undefined }) {
  if (!attempt) {
    return (
      <span title="unanswered" className="inline-flex">
        <DashCircleIcon />
      </span>
    );
  }
  const label = `${attempt.outcome} · ${attempt.attempts} attempt${attempt.attempts === 1 ? "" : "s"}`;
  return (
    <span title={label} className="inline-flex">
      {attempt.outcome === "correct" ? <CheckCircleIcon /> : <CrossCircleIcon />}
    </span>
  );
}

interface QuestionRowProps {
  question: QuantQuestion;
  index: number;
  attempt: QuantAttempt | undefined;
}

function QuestionRow({ question, index, attempt }: QuestionRowProps) {
  const [expanded, setExpanded] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const preview = question.question || `${question.quantityA}  vs.  ${question.quantityB}`;

  function toggleExpanded() {
    setExpanded((v) => {
      // Re-mask the answer whenever the row closes, so reopening re-tests.
      if (v) setRevealed(false);
      return !v;
    });
  }

  return (
    <li>
      <button
        onClick={toggleExpanded}
        className="w-full text-left px-5 py-4 flex items-baseline gap-x-3 gap-y-1 sm:grid sm:grid-cols-[3rem_minmax(0,1fr)_auto] sm:gap-x-4 hover:bg-[oklch(96%_0.005_80)] transition-colors"
        aria-expanded={expanded}
      >
        <span className="mono text-xs text-[var(--color-ink-faint)] hidden sm:block">
          {String(index + 1).padStart(3, "0")}
        </span>
        <span className="min-w-0 flex-1">
          <span className={`block text-sm leading-snug ${expanded ? "" : "truncate"}`}>{preview}</span>
          <span className="mono text-[11px] text-[var(--color-ink-faint)]">
            {TOPIC_LABEL[question.topic]} · {FORMAT_SHORT[question.format]} ·{" "}
            {"●".repeat(question.difficulty)}{"○".repeat(3 - question.difficulty)}
          </span>
        </span>
        <span className="shrink-0 self-center">
          <StatusIcon attempt={attempt} />
        </span>
      </button>

      {expanded && (
        <div className="px-5 pb-5 pt-1 sm:pl-[4.75rem] grid gap-4 anim-fade-up">
          <p className="eyebrow">
            {TOPIC_LABEL[question.topic]} · {FORMAT_LABEL[question.format]}
          </p>
          {question.question && (
            <p className="serif text-lg leading-relaxed max-w-2xl">{question.question}</p>
          )}

          {question.figure && (
            <img
              src={question.figure.src}
              alt={question.figure.alt}
              width={question.figure.width}
              height={question.figure.height}
              loading="lazy"
              className="h-auto max-w-full"
            />
          )}

          {question.format === "quantitative-comparison" && (
            <div className="grid sm:grid-cols-2 gap-3 max-w-xl">
              <div className="surface-soft px-4 py-3">
                <p className="eyebrow">Quantity A</p>
                <p className="serif mt-1">{question.quantityA}</p>
              </div>
              <div className="surface-soft px-4 py-3">
                <p className="eyebrow">Quantity B</p>
                <p className="serif mt-1">{question.quantityB}</p>
              </div>
            </div>
          )}

          {choicesOf(question).length > 0 && (
            <ul className="space-y-1 text-sm text-[var(--color-ink-muted)] max-w-2xl">
              {choicesOf(question).map((choice, i) => (
                <li key={i}>
                  <span className="mono text-xs text-[var(--color-ink-faint)]">{choiceLetter(i)}</span>{" "}
                  {choice}
                </li>
              ))}
            </ul>
          )}

          <div className="relative max-w-2xl">
            <div
              className={revealed ? "" : "blur-[6px] opacity-70 select-none pointer-events-none"}
              aria-hidden={!revealed}
            >
              <p className="text-sm">
                <span className="eyebrow">Answer</span>{" "}
                <span className="font-medium text-[var(--color-success)]">
                  {correctAnswerText(question)}
                </span>
              </p>
              <div className="mt-3 grid md:grid-cols-2 gap-4 text-sm">
                <p className="leading-relaxed text-[var(--color-ink-muted)]">{question.explanation}</p>
                <p className="serif leading-relaxed md:border-l md:border-[var(--color-rule)] md:pl-4">
                  {question.explanationZh}
                </p>
              </div>
            </div>
            {!revealed && (
              <button
                onClick={() => setRevealed(true)}
                className="absolute inset-0 flex items-center justify-center rounded-md border border-dashed border-[var(--color-rule-strong)] bg-transparent hover:bg-[var(--color-accent-soft)]/40 transition-colors"
              >
                <span className="mono text-xs text-[var(--color-ink-muted)]">click to review answer</span>
              </button>
            )}
          </div>
        </div>
      )}
    </li>
  );
}
