import Link from "next/link";
import { WRITING_PROMPTS } from "@/data/writing";
import type { EssayVocab } from "@/lib/types";

interface VocabRow extends EssayVocab {
  example: string;
}

interface CategoryGroup {
  category: string;
  words: VocabRow[];
}

function slug(category: string): string {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

/** Collect the useful words from every sample essay, grouped by prompt category. */
function harvestByCategory(): CategoryGroup[] {
  const map = new Map<string, VocabRow[]>();
  for (const prompt of WRITING_PROMPTS) {
    if (!prompt.sample) continue;
    for (const section of prompt.sample.sections) {
      for (const sentence of section.sentences) {
        for (const vocab of sentence.vocab ?? []) {
          const list = map.get(prompt.category) ?? [];
          const seen = list.some((w) => w.term.toLowerCase() === vocab.term.toLowerCase());
          if (!seen) list.push({ ...vocab, example: sentence.text });
          map.set(prompt.category, list);
        }
      }
    }
  }
  return [...map.entries()]
    .map(([category, words]) => ({ category, words }))
    .sort((a, b) => a.category.localeCompare(b.category));
}

/** De-duplicated rhetorical signposts (the orange highlights) across all samples. */
function harvestMoves(): string[] {
  const set = new Set<string>();
  for (const prompt of WRITING_PROMPTS) {
    if (!prompt.sample) continue;
    for (const section of prompt.sample.sections)
      for (const sentence of section.sentences)
        for (const move of sentence.moves ?? []) set.add(move);
  }
  return [...set].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
}

function withTerm(text: string, term: string): React.ReactNode {
  const at = text.toLowerCase().indexOf(term.toLowerCase());
  if (at === -1) return text;
  return (
    <>
      {text.slice(0, at)}
      <mark data-tone="phrase">{text.slice(at, at + term.length)}</mark>
      {text.slice(at + term.length)}
    </>
  );
}

export default function WritingWordsPage() {
  const groups = harvestByCategory();
  const moves = harvestMoves();
  const total = groups.reduce((n, g) => n + g.words.length, 0);

  return (
    <div className="page-shell pt-10 pb-20">
      <header className="max-w-2xl">
        <Link href="/writing" className="eyebrow hover:text-[var(--color-ink)]">
          ← Back to prompts
        </Link>
        <h1 className="serif mt-3 text-[length:var(--text-headline)] leading-tight">
          Words worth <em className="not-italic">stealing</em>.
        </h1>
        <p className="mt-4 text-[var(--color-ink-muted)] leading-relaxed text-sm">
          Every useful word highlighted in the sample essays, gathered here and grouped by
          topic. Each comes with its Traditional Chinese meaning and the sentence it was
          pulled from, so you can see how it actually behaves before reusing it.
        </p>
      </header>

      <nav aria-label="Topics" className="mt-8 flex flex-wrap gap-2">
        {groups.map((g) => (
          <a
            key={g.category}
            href={`#${slug(g.category)}`}
            className="btn btn-secondary text-xs"
          >
            {g.category} <span className="text-[var(--color-ink-faint)]">{g.words.length}</span>
          </a>
        ))}
      </nav>

      <div className="mt-12 space-y-14">
        {groups.map((group) => (
          <section key={group.category} id={slug(group.category)} className="scroll-mt-24">
            <div className="flex items-baseline justify-between gap-4 border-b border-[var(--color-rule)] pb-3 mb-6">
              <h2 className="serif text-2xl">{group.category}</h2>
              <span className="mono text-xs text-[var(--color-ink-faint)]">{group.words.length} words</span>
            </div>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-7">
              {group.words.map((word) => (
                <li key={word.term}>
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <h3 className="serif text-xl text-[var(--color-ink)]">{word.term}</h3>
                    <p className="serif text-base text-[var(--color-accent)]">{word.gloss}</p>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                    {withTerm(word.example, word.term)}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className="mt-16 surface-soft p-7 sm:p-9">
        <p className="eyebrow">Rhetorical signposts</p>
        <h2 className="serif text-2xl mt-1">Transitions that carry the structure</h2>
        <p className="mt-3 text-sm text-[var(--color-ink-muted)] leading-relaxed max-w-2xl">
          The orange phrases from the samples — the small moves that signal where an essay is
          going. They work in almost any topic, so they are worth keeping ready.
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {moves.map((move) => (
            <li
              key={move}
              className="text-sm px-3 py-1.5 rounded-md"
              style={{ background: "var(--color-warm-soft)", color: "oklch(40% 0.1 50)" }}
            >
              {move}
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-10 mono text-xs text-[var(--color-ink-faint)]">
        {total} words across {groups.length} topics · {moves.length} signposts · harvested from the sample essays
      </p>
    </div>
  );
}
