"use client";

import { useMemo, useState } from "react";
import { WRITING_PROMPTS } from "@/data/writing";
import type { EssayType, WritingPrompt } from "@/lib/types";

export default function WritingPage() {
  const [type, setType] = useState<EssayType>("issue");
  const [category, setCategory] = useState<string>("all");
  const [selectedId, setSelectedId] = useState<string>(() => WRITING_PROMPTS[0].id);

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
            Pick a prompt and outline it on the right. When the prompt has a sample
            response, useful phrases and structural moves are highlighted so you can
            steal them, not just admire them.
          </p>
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
                  {prompt.sample && (
                    <span className="mono text-[10px] text-[var(--color-accent)]">SAMPLE</span>
                  )}
                </div>
                <p className="serif mt-2 leading-snug text-[var(--color-ink)] line-clamp-3 text-base">
                  {prompt.prompt}
                </p>
              </button>
            );
          })}
        </aside>

        <section className="space-y-8">
          {selected ? <PromptDetail prompt={selected} /> : (
            <div className="surface p-8 text-sm text-[var(--color-ink-muted)]">Select a prompt to begin.</div>
          )}
        </section>
      </div>
    </div>
  );
}

function PromptDetail({ prompt }: { prompt: WritingPrompt }) {
  return (
    <>
      <article className="surface p-7 sm:p-9">
        <div className="flex items-baseline justify-between gap-4 mb-4">
          <p className="eyebrow">{prompt.type === "issue" ? "Issue Task" : "Argument Task"} · {prompt.category}</p>
          <p className="mono text-xs text-[var(--color-ink-faint)]">30 min suggested</p>
        </div>
        <blockquote className="serif text-2xl sm:text-3xl leading-snug border-l-2 border-[var(--color-accent)] pl-5">
          {prompt.prompt}
        </blockquote>
        <p className="mt-6 text-sm text-[var(--color-ink-muted)] leading-relaxed">{prompt.directions}</p>
      </article>

      {prompt.sample && (
        <article className="surface-soft p-7 sm:p-9">
          <div className="flex items-baseline justify-between mb-4 gap-4">
            <h3 className="serif text-2xl">{prompt.sample.title}</h3>
            <div className="text-xs flex gap-3 items-center">
              <span className="inline-flex items-center gap-1.5">
                <span aria-hidden className="w-2.5 h-2.5 rounded-sm" style={{ background: "var(--color-accent-soft)" }} />
                useful phrase
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span aria-hidden className="w-2.5 h-2.5 rounded-sm" style={{ background: "var(--color-warm-soft)" }} />
                structural move
              </span>
            </div>
          </div>
          <p className="serif text-lg leading-[1.85] whitespace-pre-wrap text-[var(--color-ink)]">
            {prompt.sample.body.map((segment, i) =>
              segment.tone === "default" ? (
                <span key={i}>{segment.text}</span>
              ) : (
                <mark key={i} data-tone={segment.tone} title={segment.note}>
                  {segment.text}
                </mark>
              ),
            )}
          </p>
          <p className="mt-5 text-xs text-[var(--color-ink-faint)]">
            Hover any highlight to see why it earns its keep.
          </p>
        </article>
      )}
    </>
  );
}
