"use client";

import { Fragment, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { WRITING_PROMPTS } from "@/data/writing";
import { useLocalState } from "@/lib/storage";
import type { EssaySentence, EssayType, SampleEssay, WritingPrompt } from "@/lib/types";

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden className={className}>
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.72-9.97a.75.75 0 00-1.06-1.06L9 10.69 7.34 9.03a.75.75 0 10-1.06 1.06l2.19 2.19c.3.3.77.3 1.06 0l4.19-4.19z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function WritingPage() {
  const [type, setType] = useState<EssayType>("issue");
  const [category, setCategory] = useState<string>("all");
  const [selectedId, setSelectedId] = useState<string>(() => WRITING_PROMPTS[0].id);
  const [read, setRead] = useLocalState<Record<string, boolean>>("writing/read", {});

  function toggleRead(id: string) {
    setRead((prev) => {
      const next = { ...prev };
      if (next[id]) delete next[id];
      else next[id] = true;
      return next;
    });
  }

  const filtered = useMemo(() => {
    return WRITING_PROMPTS.filter((p) => p.type === type && (category === "all" || p.category === category));
  }, [type, category]);

  const categories = useMemo(() => {
    const set = new Set<string>();
    WRITING_PROMPTS.filter((p) => p.type === type).forEach((p) => set.add(p.category));
    return ["all", ...Array.from(set).sort()];
  }, [type]);

  const selected = useMemo(
    () => WRITING_PROMPTS.find((p) => p.id === selectedId) ?? filtered[0] ?? null,
    [selectedId, filtered],
  );

  function selectType(next: EssayType) {
    setType(next);
    setCategory("all");
    const first = WRITING_PROMPTS.find((p) => p.type === next);
    if (first) setSelectedId(first.id);
  }

  return (
    <div className="page-shell pt-10 pb-20">
      <header className="grid lg:grid-cols-[2fr_1fr] gap-8 items-end">
        <div>
          <p className="eyebrow">Analytical Writing</p>
          <h1 className="serif mt-3 text-[length:var(--text-headline)] leading-tight">
            Prompts, by <em className="not-italic">category</em>.
          </h1>
          <p className="mt-4 max-w-2xl text-[var(--color-ink-muted)] leading-relaxed text-sm">
            Pick a prompt and study the sample response. Each sample is broken into
            its structural sections; hover a sentence to see the job it does, and the
            useful words and rhetorical signposts are highlighted as you read.
          </p>
          <Link
            href="/writing/words"
            className="inline-block mt-3 text-sm text-[var(--color-accent)] hover:underline underline-offset-4"
          >
            Useful words from these samples →
          </Link>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => selectType("issue")}
            className={`btn flex-1 ${type === "issue" ? "btn-primary" : "btn-secondary"}`}
          >
            Issue Task
          </button>
          <button
            onClick={() => selectType("argument")}
            className={`btn flex-1 ${type === "argument" ? "btn-primary" : "btn-secondary"}`}
          >
            Argument Task
          </button>
        </div>
      </header>

      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`btn text-xs ${c === category ? "btn-primary" : "btn-secondary"}`}
          >
            {c === "all" ? "All categories" : c}
          </button>
        ))}
      </div>

      <div className="mt-8 grid lg:grid-cols-[1fr_2fr] gap-8 items-start">
        <aside className="surface divide-y divide-[var(--color-rule)] overflow-hidden max-h-[42rem] overflow-y-auto">
          {filtered.length === 0 && (
            <div className="px-5 py-6 text-sm text-[var(--color-ink-muted)]">No prompts in this category.</div>
          )}
          {filtered.map((prompt) => {
            const active = selected?.id === prompt.id;
            const isRead = !!read[prompt.id];
            return (
              <button
                key={prompt.id}
                onClick={() => setSelectedId(prompt.id)}
                className={`block w-full text-left px-5 py-4 transition-colors ${
                  active ? "bg-[var(--color-accent-soft)]" : "hover:bg-[oklch(96%_0.005_80)]"
                }`}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <p className="eyebrow">{prompt.category}</p>
                  <div className="flex items-center gap-2 shrink-0">
                    {isRead && (
                      <span title="Read" className="inline-flex text-[var(--color-success)]">
                        <CheckCircleIcon className="w-4 h-4" />
                        <span className="sr-only">Read</span>
                      </span>
                    )}
                    {prompt.sample && (
                      <span className="mono text-[10px] text-[var(--color-accent)]">SAMPLE</span>
                    )}
                  </div>
                </div>
                <p
                  className={`serif mt-2 leading-snug line-clamp-3 text-base ${
                    isRead ? "text-[var(--color-ink-muted)]" : "text-[var(--color-ink)]"
                  }`}
                >
                  {prompt.prompt}
                </p>
              </button>
            );
          })}
        </aside>

        <section className="space-y-8">
          {selected ? (
            <PromptDetail
              prompt={selected}
              isRead={!!read[selected.id]}
              onToggleRead={() => toggleRead(selected.id)}
            />
          ) : (
            <div className="surface p-8 text-sm text-[var(--color-ink-muted)]">Select a prompt to begin.</div>
          )}
        </section>
      </div>
    </div>
  );
}

interface PromptDetailProps {
  prompt: WritingPrompt;
  isRead: boolean;
  onToggleRead: () => void;
}

function PromptDetail({ prompt, isRead, onToggleRead }: PromptDetailProps) {
  return (
    <>
      <article className="surface p-7 sm:p-9">
        <div className="flex items-baseline justify-between gap-4 mb-4">
          <p className="eyebrow">{prompt.type === "issue" ? "Issue Task" : "Argument Task"} · {prompt.category}</p>
          <div className="flex items-center gap-3 shrink-0">
            <p className="mono text-xs text-[var(--color-ink-faint)]">30 min suggested</p>
            {prompt.sample && (
              <button
                type="button"
                onClick={onToggleRead}
                aria-pressed={isRead}
                className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md border transition-colors ${
                  isRead
                    ? "border-[var(--color-success)] text-[var(--color-success)] bg-[oklch(96%_0.04_155)]"
                    : "border-[var(--color-rule)] text-[var(--color-ink-muted)] hover:border-[var(--color-rule-strong)] hover:text-[var(--color-ink)]"
                }`}
              >
                {isRead ? (
                  <>
                    <CheckCircleIcon className="w-3.5 h-3.5" /> Read
                  </>
                ) : (
                  "Mark as read"
                )}
              </button>
            )}
          </div>
        </div>
        <blockquote className="serif text-xl leading-snug border-l-2 border-[var(--color-accent)] pl-5">
          {prompt.prompt}
        </blockquote>
        <p className="mt-6 text-sm text-[var(--color-ink-muted)] leading-relaxed">{prompt.directions}</p>
      </article>

      {prompt.sample ? <SampleEssayView essay={prompt.sample} /> : (
        <article className="surface-soft p-7 text-sm text-[var(--color-ink-muted)] leading-relaxed">
          No sample response for this prompt yet — outline your own using the structure
          patterns from the annotated samples in this category.
        </article>
      )}
    </>
  );
}

function wordCount(text: string): number {
  const trimmed = text.trim();
  return trimmed.length === 0 ? 0 : trimmed.split(/\s+/).length;
}

function sectionWordCount(section: SampleEssay["sections"][number]): number {
  return section.sentences.reduce((n, s) => n + wordCount(s.text), 0);
}

function SampleEssayView({ essay }: { essay: SampleEssay }) {
  const total = essay.sections.reduce((n, s) => n + sectionWordCount(s), 0);
  const [showNote, setShowNote] = useState(false);

  return (
    <TooltipLayer>
      <article className="surface p-7 sm:p-9">
        <div className="mb-6 pb-5 border-b border-[var(--color-rule)]">
          <div className="flex items-baseline justify-between gap-x-5 gap-y-1 flex-wrap">
            <p className="eyebrow">Sample response</p>
            <p className="mono text-xs text-[var(--color-ink-faint)]">
              <button
                type="button"
                onClick={() => setShowNote((v) => !v)}
                aria-expanded={showNote}
                className="text-[var(--color-ink)] hover:text-[var(--color-accent)]"
              >
                {essay.score.toFixed(1)}
              </button>
              {" · "}{total} words
            </p>
          </div>
          {showNote && (
            <p className="mt-2 text-sm text-[var(--color-ink-muted)] leading-relaxed">
              {essay.scoreNote}
            </p>
          )}
        </div>

        <div className="space-y-7">
          {essay.sections.map((section, i) => (
            <section key={i}>
              <div className="flex items-baseline gap-2 mb-2 border-l-2 border-[var(--color-accent)] pl-3">
                <p className="eyebrow">{section.role}</p>
                <span className="mono text-[11px] text-[var(--color-ink-faint)]">· {sectionWordCount(section)} words</span>
              </div>
              <p className="serif text-lg leading-[1.95] text-[var(--color-ink)]">
                {section.sentences.map((sentence, j) => (
                  <Fragment key={j}>
                    <span
                      data-tip={sentence.fn}
                      className="cursor-default decoration-dotted decoration-[var(--color-ink-faint)] underline-offset-[5px] hover:underline"
                    >
                      {renderSentence(sentence)}
                    </span>{" "}
                  </Fragment>
                ))}
              </p>
            </section>
          ))}
        </div>
      </article>
    </TooltipLayer>
  );
}

/**
 * A single shared tooltip for any descendant carrying `data-tip`. Using event
 * delegation with `closest` shows exactly one bubble — the innermost annotated
 * element under the cursor — so a vocab word's gloss does not stack with its
 * sentence's function label.
 */
function TooltipLayer({ children }: { children: React.ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [tip, setTip] = useState<{ text: string; left: number; top: number } | null>(null);

  function handleOver(e: React.MouseEvent) {
    const el = (e.target as HTMLElement).closest<HTMLElement>("[data-tip]");
    if (!el || !rootRef.current?.contains(el)) return;
    const text = el.dataset.tip;
    if (!text) return;
    const r = el.getBoundingClientRect();
    setTip({ text, left: r.left + r.width / 2, top: r.top });
  }

  function handleOut(e: React.MouseEvent) {
    if ((e.target as HTMLElement).closest("[data-tip]")) setTip(null);
  }

  return (
    <div ref={rootRef} onMouseOver={handleOver} onMouseOut={handleOut}>
      {children}
      {tip && (
        <div
          role="tooltip"
          className="fixed z-50 pointer-events-none -translate-x-1/2 -translate-y-full"
          style={{ left: tip.left, top: tip.top - 10 }}
        >
          <div className="relative bg-[var(--color-bg-elevated)] text-[var(--color-ink)] text-sm leading-snug rounded-lg border border-[var(--color-rule)] shadow-[var(--shadow-lift)] px-3 py-2 max-w-[16rem] text-center">
            {tip.text}
            <span
              aria-hidden
              className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rotate-45 bg-[var(--color-bg-elevated)] border-r border-b border-[var(--color-rule)]"
            />
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Render a sentence with its useful words (teal, gloss tooltip) and rhetorical
 * signposts (orange, no tooltip) highlighted. Terms are matched
 * case-insensitively, first occurrence only, with no overlaps; vocab wins ties
 * over a move, and terms that do not appear are skipped silently.
 */
function renderSentence(sentence: EssaySentence): React.ReactNode {
  const lower = sentence.text.toLowerCase();
  type Range = { start: number; end: number; kind: "vocab" | "move"; gloss?: string };
  const ranges: Range[] = [];

  const claim = (term: string, kind: "vocab" | "move", gloss?: string) => {
    const at = lower.indexOf(term.toLowerCase());
    if (at === -1) return;
    const end = at + term.length;
    if (ranges.some((r) => at < r.end && end > r.start)) return;
    ranges.push({ start: at, end, kind, gloss });
  };

  for (const v of sentence.vocab ?? []) claim(v.term, "vocab", v.gloss);
  for (const m of sentence.moves ?? []) claim(m, "move");

  if (ranges.length === 0) return sentence.text;
  ranges.sort((a, b) => a.start - b.start);

  const nodes: React.ReactNode[] = [];
  let cursor = 0;
  ranges.forEach((r, i) => {
    if (cursor < r.start) nodes.push(sentence.text.slice(cursor, r.start));
    const piece = sentence.text.slice(r.start, r.end);
    nodes.push(
      r.kind === "vocab" ? (
        <mark key={`r${i}`} data-tone="phrase" data-tip={r.gloss}>
          {piece}
        </mark>
      ) : (
        <mark key={`r${i}`} data-tone="move">
          {piece}
        </mark>
      ),
    );
    cursor = r.end;
  });
  if (cursor < sentence.text.length) nodes.push(sentence.text.slice(cursor));
  return nodes;
}
