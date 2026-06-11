"use client";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
  rangeStart: number;
  rangeEnd: number;
  total: number;
  /** Noun for the single-page count line, e.g. "word" or "question". */
  itemNoun: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  onChange,
  rangeStart,
  rangeEnd,
  total,
  itemNoun,
}: PaginationProps) {
  if (totalPages <= 1) {
    return (
      <p className="mt-4 text-xs text-[var(--color-ink-faint)] mono text-center">
        {total} {itemNoun}
        {total === 1 ? "" : "s"}
      </p>
    );
  }
  return (
    <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
      <span className="text-xs text-[var(--color-ink-faint)] mono text-center sm:text-left">
        {rangeStart}–{rangeEnd} of {total}
      </span>
      <div className="flex items-center justify-between sm:justify-end gap-1.5">
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
