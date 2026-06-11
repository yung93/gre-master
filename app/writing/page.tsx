"use client";

import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { CloseIcon, EyeIcon, EyeOffIcon, ICON_BTN, ICON_BTN_ACTIVE } from "@/components/Icons";
import writingIndex from "@/data/writing-index.json";
import { useLocalState } from "@/lib/storage";
import type { EssaySentence, SampleEssay, WritingPromptMeta } from "@/lib/types";

// Lightweight prompt metadata; essay bodies are lazy-fetched from /essays/<id>.json.
const PROMPTS = writingIndex.prompts as WritingPromptMeta[];

// Matches the section id slugs on /writing/words so a category filter can deep-link.
function categorySlug(category: string): string {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

interface TaskType {
  label: string;
  hint: string;
}

// Derive the prompt's task type (and the move it asks for) from its directions.
function taskType(directions: string): TaskType {
  if (directions.includes("which view more closely aligns"))
    return { label: "Two Views", hint: "Decide which of the two views you favor, and address both." };
  if (directions.includes("the reason on which"))
    return { label: "Claim & Reason", hint: "Evaluate both the claim and the reason it rests on." };
  if (directions.includes("your views on the policy"))
    return { label: "Policy", hint: "Weigh the likely consequences of implementing the policy." };
  if (directions.includes("adopting the recommendation"))
    return { label: "Recommendation", hint: "Describe circumstances where adopting it would or wouldn't be advantageous." };
  if (directions.includes("the statement might or might not hold true"))
    return { label: "Statement", hint: "Consider the ways the statement might or might not hold true." };
  if (directions.includes("challenge your position"))
    return { label: "Claim", hint: "Address the strongest reasons or examples that could challenge your position." };
  return { label: "Issue", hint: "" };
}

function TaskTypePill({ task }: { task: TaskType }) {
  return (
    <span
      title={task.hint}
      className="text-[10px] tracking-wide uppercase font-medium px-2 py-0.5 rounded-full bg-[var(--color-accent-soft)] text-[oklch(35%_0.09_195)]"
    >
      {task.label}
    </span>
  );
}

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
  const [category, setCategory] = useState<string>("all");
  const [selectedId, setSelectedId] = useState<string>(() => PROMPTS[0].id);
  const [listOpen, setListOpen] = useState(false);
  const [read, setRead] = useLocalState<Record<string, boolean>>("writing/read", {});

  // Lazy-loaded essay body for the selected prompt, cached in-session.
  const essayCache = useRef<Map<string, SampleEssay>>(new Map());
  const [essay, setEssay] = useState<SampleEssay | null>(null);
  const [essayLoading, setEssayLoading] = useState(false);

  function toggleRead(id: string) {
    setRead((prev) => {
      const next = { ...prev };
      if (next[id]) delete next[id];
      else next[id] = true;
      return next;
    });
  }

  const filtered = useMemo(() => {
    return PROMPTS.filter((p) => category === "all" || p.category === category);
  }, [category]);

  const categories = useMemo(() => {
    const set = new Set<string>();
    PROMPTS.forEach((p) => set.add(p.category));
    return ["all", ...Array.from(set).sort()];
  }, []);

  const selected = useMemo(
    () => PROMPTS.find((p) => p.id === selectedId) ?? filtered[0] ?? null,
    [selectedId, filtered],
  );

  const readCount = useMemo(
    () => filtered.reduce((n, p) => (read[p.id] ? n + 1 : n), 0),
    [filtered, read],
  );

  // Prev/next navigation through the filtered prompts (mobile pager controls).
  const currentIndex = useMemo(
    () => (selected ? filtered.findIndex((p) => p.id === selected.id) : -1),
    [selected, filtered],
  );
  const canPrev = currentIndex > 0;
  const canNext = currentIndex >= 0 && currentIndex < filtered.length - 1;
  function goPrev() {
    if (canPrev) setSelectedId(filtered[currentIndex - 1].id);
  }
  function goNext() {
    if (canNext) setSelectedId(filtered[currentIndex + 1].id);
  }

  useEffect(() => {
    if (!selected || !selected.hasSample) {
      setEssay(null);
      setEssayLoading(false);
      return;
    }
    const id = selected.id;
    const cached = essayCache.current.get(id);
    if (cached) {
      setEssay(cached);
      setEssayLoading(false);
      return;
    }
    let cancelled = false;
    setEssay(null);
    setEssayLoading(true);
    fetch(`/essays/${id}.json`)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json() as Promise<SampleEssay>;
      })
      .then((data) => {
        essayCache.current.set(id, data);
        if (!cancelled) {
          setEssay(data);
          setEssayLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setEssay(null);
          setEssayLoading(false);
        }
      });
    return () => {
      cancelled = true;
    };
  }, [selected]);

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
        </div>
        <div className="surface-soft px-5 py-4">
          <p className="eyebrow">Issue pool{category !== "all" ? ` · ${category}` : ""}</p>
          <p className="serif text-3xl mt-1">
            {filtered.length}
            <span className="text-[var(--color-ink-faint)] text-base"> / {writingIndex.total} prompts · </span>
            <span className="text-[var(--color-success)] text-base font-medium">{readCount}</span>
            <span className="text-[var(--color-ink-faint)] text-base"> read</span>
          </p>
          <Link
            href={category === "all" ? "/writing/words" : `/writing/words#${categorySlug(category)}`}
            className="btn btn-secondary text-xs w-full mt-4"
          >
            Useful words →
          </Link>
        </div>
      </header>

      <div className="mt-8 flex gap-2 overflow-x-auto lg:flex-wrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`btn text-xs shrink-0 whitespace-nowrap ${c === category ? "btn-primary" : "btn-secondary"}`}
          >
            {c === "all" ? "All categories" : c}
          </button>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-between gap-2 lg:hidden">
        <button
          type="button"
          onClick={goPrev}
          disabled={!canPrev}
          aria-label="Previous prompt"
          className="btn btn-secondary px-3 shrink-0"
        >
          <ChevronLeftIcon />
        </button>
        <button
          type="button"
          onClick={() => setListOpen(true)}
          className="btn btn-secondary text-xs"
        >
          Browse prompts · {filtered.length}
        </button>
        <button
          type="button"
          onClick={goNext}
          disabled={!canNext}
          aria-label="Next prompt"
          className="btn btn-secondary px-3 shrink-0"
        >
          <ChevronRightIcon />
        </button>
      </div>

      <div className="mt-8 grid lg:grid-cols-[1fr_2fr] gap-8 items-start">
        <aside className="hidden lg:block surface divide-y divide-[var(--color-rule)] overflow-hidden max-h-[42rem] overflow-y-auto">
          <PromptList prompts={filtered} selectedId={selected?.id} read={read} onSelect={setSelectedId} />
        </aside>

        <section className="space-y-8">
          {selected ? (
            <PromptDetail
              prompt={selected}
              essay={essay}
              essayLoading={essayLoading}
              isRead={!!read[selected.id]}
              onToggleRead={() => toggleRead(selected.id)}
            />
          ) : (
            <div className="surface p-8 text-sm text-[var(--color-ink-muted)]">Select a prompt to begin.</div>
          )}
        </section>
      </div>

      {listOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Prompts">
          <button
            type="button"
            aria-label="Close prompts"
            onClick={() => setListOpen(false)}
            className="absolute inset-0 bg-[oklch(20%_0.02_60)]/40"
          />
          <div className="absolute inset-x-3 top-[var(--nav-h,148px)] bottom-3 surface flex flex-col overflow-hidden shadow-[var(--shadow-lift)]">
            <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--color-rule)] shrink-0">
              <p className="eyebrow">Prompts · {filtered.length}</p>
              <button
                onClick={() => setListOpen(false)}
                className={ICON_BTN}
                aria-label="Close"
                title="Close"
              >
                <CloseIcon />
              </button>
            </div>
            <div className="flex-1 min-h-0 overflow-y-auto divide-y divide-[var(--color-rule)]">
              <PromptList
                prompts={filtered}
                selectedId={selected?.id}
                read={read}
                onSelect={(id) => {
                  setSelectedId(id);
                  setListOpen(false);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function PromptList({
  prompts,
  selectedId,
  read,
  onSelect,
}: {
  prompts: WritingPromptMeta[];
  selectedId: string | undefined;
  read: Record<string, boolean>;
  onSelect: (id: string) => void;
}) {
  if (prompts.length === 0) {
    return <div className="px-5 py-6 text-sm text-[var(--color-ink-muted)]">No prompts in this category.</div>;
  }
  return (
    <>
      {prompts.map((prompt) => {
        const active = selectedId === prompt.id;
        const isRead = !!read[prompt.id];
        return (
          <button
            key={prompt.id}
            onClick={() => onSelect(prompt.id)}
            className={`block w-full text-left px-5 py-4 transition-colors ${
              active ? "bg-[var(--color-accent-soft)]" : "hover:bg-[oklch(96%_0.005_80)]"
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 flex-wrap min-w-0">
                <p className="eyebrow">{prompt.category}</p>
                <TaskTypePill task={taskType(prompt.directions)} />
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {isRead && (
                  <span title="Read" className="inline-flex text-[var(--color-success)]">
                    <CheckCircleIcon className="w-4 h-4" />
                    <span className="sr-only">Read</span>
                  </span>
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
    </>
  );
}

function ChevronLeftIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

interface PromptDetailProps {
  prompt: WritingPromptMeta;
  essay: SampleEssay | null;
  essayLoading: boolean;
  isRead: boolean;
  onToggleRead: () => void;
}

function PromptDetail({ prompt, essay, essayLoading, isRead, onToggleRead }: PromptDetailProps) {
  const tt = taskType(prompt.directions);
  return (
    <>
      <article className="surface p-7 sm:p-9">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 mb-4">
          <div className="flex items-center gap-2.5 flex-wrap">
            <p className="eyebrow">{prompt.category}</p>
            <TaskTypePill task={tt} />
          </div>
          <div className="flex items-center gap-3 shrink-0 ml-auto">
            <p className="mono text-xs text-[var(--color-ink-faint)]">30 min suggested</p>
            {prompt.hasSample && (
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

      {!prompt.hasSample ? (
        <article className="surface-soft p-7 text-sm text-[var(--color-ink-muted)] leading-relaxed">
          No sample response for this prompt yet — outline your own using the structure
          patterns from the annotated samples in this category.
        </article>
      ) : essay ? (
        <SampleEssayView essay={essay} promptText={prompt.prompt} />
      ) : (
        <article className="surface p-7 text-sm text-[var(--color-ink-muted)]">
          {essayLoading ? "Loading sample response…" : "Could not load the sample response. Please try again."}
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

function SampleEssayView({ essay, promptText }: { essay: SampleEssay; promptText: string }) {
  const total = essay.sections.reduce((n, s) => n + sectionWordCount(s), 0);
  const [showNote, setShowNote] = useState(false);
  const [reciting, setReciting] = useState(false);

  return (
    <>
    <TooltipLayer>
      <article className="surface p-7 sm:p-9">
        <div className="mb-6 pb-5 border-b border-[var(--color-rule)]">
          <div className="flex items-baseline justify-between gap-x-5 gap-y-1 flex-wrap">
            <div className="flex items-center gap-3">
              <p className="eyebrow">Sample response</p>
              <button
                type="button"
                onClick={() => setReciting(true)}
                className="text-xs px-2.5 py-1 rounded-md border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent-soft)] transition-colors"
              >
                Recite ▸
              </button>
            </div>
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
                      className="cursor-default decoration-dotted decoration-[var(--color-ink-faint)] underline-offset-[5px] hover:underline [&[data-tip-active]]:underline"
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
    {reciting && (
      <ReciteDialog essay={essay} promptText={promptText} onClose={() => setReciting(false)} />
    )}
    </>
  );
}

/**
 * Recite-from-structure practice. Ephemeral by design — no persistence: each
 * sentence shows only its function as a cue, the model text stays masked until
 * tapped, and the user drafts their own version above it. All state resets when
 * the dialog closes.
 */
function ReciteDialog({
  essay,
  promptText,
  onClose,
}: {
  essay: SampleEssay;
  promptText: string;
  onClose: () => void;
}) {
  const [revealed, setRevealed] = useState<Set<string>>(new Set());
  const [drafts, setDrafts] = useState<Record<string, string>>({});

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const keys = essay.sections.flatMap((s, si) => s.sentences.map((_, j) => `${si}-${j}`));
  const allRevealed = keys.length > 0 && revealed.size === keys.length;

  function toggle(key: string) {
    setRevealed((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Recite the essay from its structure"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[rgba(20,18,12,0.45)]"
      onMouseDown={onClose}
    >
      <div
        className="surface w-full max-w-2xl max-h-[90vh] flex flex-col shadow-[var(--shadow-lift)]"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="shrink-0 border-b border-[var(--color-rule)] px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            <p className="eyebrow">Recite from structure</p>
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setRevealed(allRevealed ? new Set() : new Set(keys))}
                className={allRevealed ? ICON_BTN_ACTIVE : ICON_BTN}
                aria-pressed={allRevealed}
                aria-label={allRevealed ? "Hide all sentences" : "Reveal all sentences"}
                title={allRevealed ? "Hide all" : "Reveal all"}
              >
                {allRevealed ? <EyeOffIcon /> : <EyeIcon />}
              </button>
              <button
                type="button"
                onClick={onClose}
                className={ICON_BTN}
                aria-label="Close"
                title="Close"
              >
                <CloseIcon />
              </button>
            </div>
          </div>
          <p className="text-sm text-[var(--color-ink-muted)] mt-1.5">
            Write each sentence from its cue, then tap to reveal and compare.
          </p>
        </div>

        <div className="overflow-y-auto px-6 py-5 space-y-7">
          <div className="surface-soft p-4">
            <p className="eyebrow">Prompt</p>
            <p className="serif mt-1 leading-snug">{promptText}</p>
          </div>

          {essay.sections.map((section, si) => (
            <section key={si}>
              <p className="eyebrow border-l-2 border-[var(--color-accent)] pl-3 mb-3">{section.role}</p>
              <ol className="space-y-5">
                {section.sentences.map((sentence, j) => {
                  const key = `${si}-${j}`;
                  const isRevealed = revealed.has(key);
                  return (
                    <li key={key}>
                      <p className="text-xs font-medium text-[var(--color-ink)] mb-1.5">{sentence.fn}</p>
                      <textarea
                        value={drafts[key] ?? ""}
                        onChange={(e) => setDrafts((d) => ({ ...d, [key]: e.target.value }))}
                        rows={2}
                        placeholder="Write this sentence from the cue…"
                        className="w-full surface px-3 py-2 text-sm leading-relaxed focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
                      />
                      <button
                        type="button"
                        onClick={() => toggle(key)}
                        aria-expanded={isRevealed}
                        title={isRevealed ? undefined : "Tap to reveal"}
                        className={`mt-1.5 w-full text-left serif text-sm leading-relaxed rounded-md transition-colors ${
                          isRevealed
                            ? "text-[var(--color-ink-muted)]"
                            : "bg-[var(--color-ink)]/8 text-transparent select-none hover:bg-[var(--color-ink)]/12"
                        }`}
                      >
                        {sentence.text}
                      </button>
                    </li>
                  );
                })}
              </ol>
            </section>
          ))}
        </div>
      </div>
    </div>
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
  const activeRef = useRef<HTMLElement | null>(null);
  const [tip, setTip] = useState<{ text: string; left: number; top: number } | null>(null);

  function clearPinned() {
    if (activeRef.current) {
      activeRef.current.removeAttribute("data-tip-active");
      activeRef.current = null;
    }
  }

  // Anchor the bubble's x to the cursor (a wrapped sentence's bounding box would
  // otherwise center it in the paragraph); keep y at the element's top edge.
  function handleMove(e: React.MouseEvent) {
    clearPinned(); // a real pointer is hovering — drop any tap-pinned highlight
    const el = (e.target as HTMLElement).closest<HTMLElement>("[data-tip]");
    if (!el || !rootRef.current?.contains(el) || !el.dataset.tip) {
      setTip(null);
      return;
    }
    setTip({ text: el.dataset.tip, left: e.clientX, top: el.getBoundingClientRect().top });
  }

  // Touch devices have no hover: tap a sentence to pin its underline + tooltip,
  // tap it again or tap elsewhere to dismiss.
  function handleClick(e: React.MouseEvent) {
    const el = (e.target as HTMLElement).closest<HTMLElement>("[data-tip]");
    if (!el || !rootRef.current?.contains(el) || !el.dataset.tip || activeRef.current === el) {
      clearPinned();
      setTip(null);
      return;
    }
    clearPinned();
    el.setAttribute("data-tip-active", "");
    activeRef.current = el;
    setTip({ text: el.dataset.tip, left: e.clientX, top: el.getBoundingClientRect().top });
  }

  return (
    <div ref={rootRef} onMouseMove={handleMove} onMouseLeave={() => setTip(null)} onClick={handleClick}>
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
