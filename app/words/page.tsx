"use client";

import { useDeferredValue, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import SpeakButton from "@/components/SpeakButton";
import { VOCAB } from "@/data/vocab";
import { useLocalState } from "@/lib/storage";
import type { LearnProgress, MemoryAid, VocabEntry } from "@/lib/types";

type StatusFilter = "all" | "mastered" | "learning" | "new";

const PAGE_SIZE = 20;

function statusOf(progress: LearnProgress | undefined): StatusFilter {
  if (!progress || progress.seen === 0) return "new";
  if (progress.graduated) return "mastered";
  return "learning";
}

export default function WordsPage() {
  const [progress] = useLocalState<Record<string, LearnProgress>>("learn/vocab", {});
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<StatusFilter>("all");
  const [pos, setPos] = useState<string>("all");
  const [hideZh, setHideZh] = useState(false);
  const [page, setPage] = useState(1);
  const deferredQuery = useDeferredValue(query);

  const partsOfSpeech = useMemo(() => {
    const set = new Set<string>();
    VOCAB.forEach((v) => set.add(v.partOfSpeech));
    return ["all", ...Array.from(set).sort()];
  }, []);

  const masteredCount = useMemo(
    () => VOCAB.reduce((n, v) => (progress[v.id]?.graduated ? n + 1 : n), 0),
    [progress],
  );

  const filtered = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase();
    return VOCAB.filter((v) => {
      if (pos !== "all" && v.partOfSpeech !== pos) return false;
      if (status !== "all" && statusOf(progress[v.id]) !== status) return false;
      if (!q) return true;
      return (
        v.word.toLowerCase().includes(q) ||
        v.meaningEn.toLowerCase().includes(q) ||
        v.meaningZh.includes(deferredQuery.trim()) ||
        (v.synonyms ?? []).some((s) => s.toLowerCase().includes(q))
      );
    });
  }, [deferredQuery, status, pos, progress]);

  // Reset to the first page whenever the result set changes.
  useEffect(() => {
    setPage(1);
  }, [deferredQuery, status, pos]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageStart = (currentPage - 1) * PAGE_SIZE;
  const pageItems = filtered.slice(pageStart, pageStart + PAGE_SIZE);

  const statusFilters: { value: StatusFilter; label: string }[] = [
    { value: "all", label: "All" },
    { value: "mastered", label: "Mastered" },
    { value: "learning", label: "Learning" },
    { value: "new", label: "New" },
  ];

  return (
    <div className="page-shell pt-10 pb-20">
      <header className="grid lg:grid-cols-[2fr_1fr] gap-8 items-end">
        <div>
          <p className="eyebrow">Verbal · Word List</p>
          <h1 className="serif mt-3 text-[length:var(--text-headline)] leading-tight">
            The whole <em className="not-italic">lexicon</em>.
          </h1>
          <p className="mt-4 max-w-2xl text-[var(--color-ink-muted)] leading-relaxed text-sm">
            Every word in the deck with its Traditional Chinese and English meaning. Search by
            word, meaning, or synonym; filter by part of speech or your mastery status. Tap{" "}
            <span className="mono">US</span> to hear the pronunciation.
          </p>
        </div>
        <div className="surface-soft px-5 py-4">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="eyebrow">Showing</p>
              <p className="serif text-2xl mt-1">{filtered.length}</p>
            </div>
            <div>
              <p className="eyebrow">Mastered</p>
              <p className="serif text-2xl mt-1">{masteredCount}</p>
            </div>
            <div>
              <p className="eyebrow">Total</p>
              <p className="serif text-2xl mt-1">{VOCAB.length}</p>
            </div>
          </div>
          <Link href="/verbal" className="btn btn-secondary text-xs w-full mt-4">
            ← Back to flashcards
          </Link>
        </div>
      </header>

      <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative flex-1 max-w-md">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search word, meaning, or synonym…"
            className="w-full surface px-4 py-2.5 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
            aria-label="Search words"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {statusFilters.map((f) => (
            <button
              key={f.value}
              onClick={() => setStatus(f.value)}
              className={`px-3 py-1.5 text-sm leading-5 rounded-md transition-colors ${
                status === f.value
                  ? "font-bold text-[var(--color-accent)] bg-[var(--color-accent-soft)]"
                  : "text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
              }`}
            >
              {f.label}
            </button>
          ))}
          <select
            value={pos}
            onChange={(e) => setPos(e.target.value)}
            className="surface px-3 py-1.5 text-sm rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
            aria-label="Filter by part of speech"
          >
            {partsOfSpeech.map((p) => (
              <option key={p} value={p}>
                {p === "all" ? "All parts" : p}
              </option>
            ))}
          </select>
          <button
            onClick={() => setHideZh((v) => !v)}
            className={`inline-flex items-center justify-center h-9 w-9 rounded-md border transition-colors ${
              hideZh
                ? "bg-[var(--color-accent)] text-white border-[var(--color-accent)]"
                : "surface text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
            }`}
            aria-pressed={hideZh}
            aria-label={hideZh ? "Show Traditional Chinese meaning" : "Hide Traditional Chinese meaning"}
            title={hideZh ? "Show 中文 meaning" : "Hide 中文 meaning"}
          >
            {hideZh ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        </div>
      </div>

      <div className="mt-6">
        {filtered.length === 0 ? (
          <div className="surface p-12 text-center">
            <p className="serif text-2xl">No words match.</p>
            <p className="mt-3 text-sm text-[var(--color-ink-muted)]">Try a different search or clear the filters.</p>
          </div>
        ) : (
          <>
            <ol className="surface divide-y divide-[var(--color-rule)] overflow-hidden">
              {pageItems.map((entry, idx) => (
                <WordRow
                  key={entry.id}
                  entry={entry}
                  index={pageStart + idx}
                  progress={progress[entry.id]}
                  hideZh={hideZh}
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
            />
          </>
        )}
      </div>
    </div>
  );
}

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
  rangeStart: number;
  rangeEnd: number;
  total: number;
}

function Pagination({ currentPage, totalPages, onChange, rangeStart, rangeEnd, total }: PaginationProps) {
  if (totalPages <= 1) {
    return (
      <p className="mt-4 text-xs text-[var(--color-ink-faint)] mono text-center">
        {total} word{total === 1 ? "" : "s"}
      </p>
    );
  }
  return (
    <div className="mt-5 flex items-center justify-between gap-4">
      <span className="text-xs text-[var(--color-ink-faint)] mono">
        {rangeStart}–{rangeEnd} of {total}
      </span>
      <div className="flex items-center gap-1.5">
        <button
          onClick={() => onChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="btn btn-secondary text-xs"
        >
          ← Prev
        </button>
        <span className="mono text-xs text-[var(--color-ink-muted)] px-2 tabular-nums">
          {currentPage} / {totalPages}
        </span>
        <button
          onClick={() => onChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="btn btn-secondary text-xs"
        >
          Next →
        </button>
      </div>
    </div>
  );
}

interface WordRowProps {
  entry: VocabEntry;
  index: number;
  progress: LearnProgress | undefined;
  hideZh: boolean;
}

function WordRow({ entry, index, progress, hideZh }: WordRowProps) {
  const [expanded, setExpanded] = useState(false);
  const status = statusOf(progress);

  return (
    <li>
      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full text-left px-5 py-4 grid grid-cols-[auto_1fr_auto] sm:grid-cols-[3rem_minmax(8rem,1fr)_minmax(0,1.4fr)_auto] gap-x-4 gap-y-1 items-baseline hover:bg-[oklch(96%_0.005_80)] transition-colors"
        aria-expanded={expanded}
      >
        <span className="mono text-xs text-[var(--color-ink-faint)] hidden sm:block">
          {String(index + 1).padStart(3, "0")}
        </span>
        <span className="flex items-baseline gap-2 min-w-0">
          <span className="serif text-lg leading-tight truncate">{entry.word}</span>
          <span className="italic text-xs text-[var(--color-ink-faint)] shrink-0">{entry.partOfSpeech}</span>
        </span>
        <span
          className={`serif leading-snug col-span-2 sm:col-span-1 transition-colors ${
            hideZh
              ? "text-transparent bg-[var(--color-rule)] rounded select-none"
              : "text-[var(--color-ink)]"
          }`}
        >
          {entry.meaningZh}
        </span>
        <StatusDot status={status} />
      </button>

      {expanded && (
        <div className="px-5 pb-5 pt-1 sm:pl-[4.75rem] grid gap-3 anim-fade-up">
          <div className="flex items-center gap-3">
            <span className="serif text-2xl">{entry.word}</span>
            <SpeakButton text={entry.word} size="sm" />
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <p className="serif text-lg leading-snug">{entry.meaningZh}</p>
            <p className="text-sm leading-snug text-[var(--color-ink-muted)] self-center">{entry.meaningEn}</p>
          </div>
          {entry.memoryAid && <MemoryAidBlock aid={entry.memoryAid} />}
          <div>
            <p className="eyebrow">Example</p>
            <p className="serif mt-1 italic leading-relaxed">{entry.example}</p>
            <p className="mt-1 text-sm text-[var(--color-ink-muted)] leading-relaxed">{entry.exampleZh}</p>
          </div>
          {entry.synonyms && entry.synonyms.length > 0 && (
            <div>
              <p className="eyebrow">Synonyms</p>
              <p className="mt-1 text-sm">{entry.synonyms.join(" · ")}</p>
            </div>
          )}
        </div>
      )}
    </li>
  );
}

function StatusDot({ status }: { status: StatusFilter }) {
  const config: Record<StatusFilter, { color: string; label: string }> = {
    mastered: { color: "var(--color-success)", label: "mastered" },
    learning: { color: "var(--color-warm)", label: "learning" },
    new: { color: "var(--color-rule-strong)", label: "new" },
    all: { color: "transparent", label: "" },
  };
  const c = config[status];
  return (
    <span className="flex items-center gap-1.5 justify-self-end" title={c.label}>
      <span aria-hidden className="w-2 h-2 rounded-full" style={{ background: c.color }} />
      <span className="hidden sm:inline text-[10px] mono text-[var(--color-ink-faint)] w-14">{c.label}</span>
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

function EyeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="2.6" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M3 3l18 18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M10.6 6.2A9.7 9.7 0 0 1 12 6c6.5 0 10 6 10 6a16.4 16.4 0 0 1-3.3 3.9M6.5 7.6A16.3 16.3 0 0 0 2 12s3.5 6 10 6a9.6 9.6 0 0 0 4-.85"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
