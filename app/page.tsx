import Link from "next/link";
import { VOCAB } from "@/data/vocab";
import { QUANT } from "@/data/quant";
import writingIndex from "@/data/writing-index.json";

interface Pillar {
  href: string;
  eyebrow: string;
  title: string;
  blurb: string;
  count: string;
}

export default function Home() {
  const pillars: Pillar[] = [
    {
      href: "/verbal",
      eyebrow: "Verbal Reasoning",
      title: "Vocabulary, the Anki way",
      blurb:
        "Flip the card, grade your recall. Cards you keep missing surface more often; cards you know slip into a longer interval. The schedule does the planning so you do not have to.",
      count: `${VOCAB.length} words`,
    },
    {
      href: "/quant",
      eyebrow: "Quantitative Reasoning",
      title: "Problem-set drills",
      blurb:
        "Original GRE-style problems by topic. Try the problem on the front, check the worked solution on the back, then grade yourself the same way you do for vocabulary.",
      count: `${QUANT.length} problems`,
    },
    {
      href: "/writing",
      eyebrow: "Analytical Writing",
      title: "Issue topic library",
      blurb:
        "The official GRE Issue pool, organized by category, with annotated sample responses where every useful phrase and structural move is highlighted.",
      count: `${writingIndex.total} prompts · ${writingIndex.sampleCount} samples`,
    },
  ];

  return (
    <div className="page-shell pt-12 pb-20">
      <header className="max-w-3xl">
        <p className="eyebrow">Learn</p>
        <h1 className="serif mt-4 text-[length:var(--text-headline)] leading-tight">
          Three pillars, one workbench.
        </h1>
        <p className="mt-5 text-[var(--color-ink-muted)] leading-relaxed">
          Pick a pillar and start a session. Progress is kept per account and synced to the cloud,
          so every device remembers what you have already mastered and what is about to slip.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-3 mt-12">
        {pillars.map((p, idx) => (
          <Link
            key={p.href}
            href={p.href}
            className="surface p-7 flex flex-col gap-4 transition hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
          >
            <div className="flex items-baseline justify-between">
              <p className="eyebrow">{p.eyebrow}</p>
              <span className="mono text-xs text-[var(--color-ink-faint)]">{String(idx + 1).padStart(2, "0")}</span>
            </div>
            <h2 className="serif text-[length:var(--text-title)] leading-snug">{p.title}</h2>
            <p className="text-sm text-[var(--color-ink-muted)] leading-relaxed">{p.blurb}</p>
            <p className="mt-auto pt-4 border-t border-[var(--color-rule)] mono text-xs text-[var(--color-ink-faint)]">
              {p.count}
            </p>
          </Link>
        ))}
      </div>

      <section className="mt-10 surface-soft p-7 sm:p-8 flex flex-wrap items-center justify-between gap-5">
        <div>
          <p className="eyebrow">Mock Test</p>
          <h2 className="serif text-[length:var(--text-title)] leading-snug mt-2">
            Rehearse the whole thing, on the clock.
          </h2>
          <p className="text-sm text-[var(--color-ink-muted)] mt-2 max-w-xl leading-relaxed">
            One Issue task, two Verbal sections, two Quant sections — each on its own timer,
            with auto-scoring on the multiple-choice sections.
          </p>
        </div>
        <Link href="/mock" className="btn btn-accent">Enter the testing room →</Link>
      </section>
    </div>
  );
}
