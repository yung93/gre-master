import Link from "next/link";

interface FeatureCard {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  meta: string;
}

const LEARNING_PATHS: FeatureCard[] = [
  {
    href: "/learn/verbal",
    eyebrow: "Verbal · Vocabulary",
    title: "Spaced-repetition flashcards",
    description:
      "Curated GRE words with Traditional Chinese glosses and exam-style sentences. SM-2 schedules every review so you only see what you are about to forget.",
    meta: "80+ entries · keyboard-driven",
  },
  {
    href: "/learn/quant",
    eyebrow: "Quantitative · Drills",
    title: "Problem-set flashcards",
    description:
      "Original GRE-style problems across arithmetic, algebra, geometry, and data analysis. Work the problem, flip for a clean explanation, grade your recall.",
    meta: "20 problems · multi-topic",
  },
  {
    href: "/learn/writing",
    eyebrow: "Analytical Writing",
    title: "Issue & argument library",
    description:
      "Prompts in the official format, organized by category, plus sample responses with reusable phrases highlighted in the margins.",
    meta: "Issue + Argument · annotated samples",
  },
];

export default function Home() {
  return (
    <div className="page-shell">
      <section className="pt-12 sm:pt-16 pb-16 sm:pb-20">
        <div className="flex items-baseline justify-between mb-10 gap-6">
          <h2 className="serif text-[length:var(--text-headline)] leading-tight">Two surfaces, one habit loop.</h2>
          <p className="hidden sm:block max-w-sm text-[var(--color-ink-muted)] text-sm">
            Learn drips knowledge in. Mock tests pull it back out under pressure.
            Switch between them as often as the calendar allows.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {LEARNING_PATHS.map((path, idx) => (
            <Link
              key={path.href}
              href={path.href}
              className="surface p-6 flex flex-col gap-4 transition hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
            >
              <div className="flex items-baseline justify-between">
                <p className="eyebrow">{path.eyebrow}</p>
                <span className="mono text-xs text-[var(--color-ink-faint)]">0{idx + 1}</span>
              </div>
              <h3 className="serif text-[length:var(--text-title)] leading-snug">{path.title}</h3>
              <p className="text-sm text-[var(--color-ink-muted)] leading-relaxed">{path.description}</p>
              <p className="mt-auto pt-3 border-t border-[var(--color-rule)] text-xs text-[var(--color-ink-faint)] mono">
                {path.meta}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <hr className="rule" />

      <section className="py-16 sm:py-20 grid md:grid-cols-[1fr_2fr] gap-12 items-start">
        <div>
          <p className="eyebrow">Mock Test</p>
          <h2 className="serif text-[length:var(--text-headline)] leading-tight mt-3">A full-length, timed rehearsal.</h2>
        </div>
        <div className="space-y-6">
          <p className="text-[var(--color-ink-muted)] leading-relaxed max-w-2xl">
            One Issue task, two Verbal sections, two Quantitative sections. Each
            section runs on its own clock; advancing locks the section the way
            the real exam does. Responses are kept in local storage, so an
            accidental refresh will not lose your work.
          </p>
          <dl className="grid sm:grid-cols-3 gap-4 max-w-2xl">
            <div className="surface-soft p-4">
              <dt className="eyebrow">Issue</dt>
              <dd className="mt-2 serif text-2xl">30:00</dd>
            </div>
            <div className="surface-soft p-4">
              <dt className="eyebrow">Verbal × 2</dt>
              <dd className="mt-2 serif text-2xl">18 + 26</dd>
            </div>
            <div className="surface-soft p-4">
              <dt className="eyebrow">Quant × 2</dt>
              <dd className="mt-2 serif text-2xl">21 + 26</dd>
            </div>
          </dl>
          <div>
            <Link href="/mock" className="btn btn-accent">Enter the testing room →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
