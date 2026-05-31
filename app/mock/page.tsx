"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { MOCK_TESTS } from "@/data/mock";
import { readJson, removeKey } from "@/lib/storage";
import type { MockSessionState } from "@/lib/types";

export default function MockHome() {
  const router = useRouter();

  function startTest(testId: string) {
    const session: MockSessionState = {
      testId,
      sectionIndex: 0,
      sectionStartedAt: Date.now(),
      responses: {},
      completedSections: [],
      startedAt: Date.now(),
      finishedAt: null,
    };
    if (typeof window !== "undefined") {
      window.localStorage.setItem("gre-master/v1/mock/active", JSON.stringify(session));
    }
    router.push(`/mock/session?test=${testId}`);
  }

  function resumeExisting(): MockSessionState | null {
    return readJson<MockSessionState | null>("mock/active", null);
  }

  function discardActive() {
    removeKey("mock/active");
    router.refresh();
  }

  const active = typeof window === "undefined" ? null : resumeExisting();

  return (
    <div className="page-shell pt-12 pb-20">
      <header className="max-w-3xl">
        <p className="eyebrow">Mock Test</p>
        <h1 className="serif mt-4 text-[length:var(--text-headline)] leading-tight">
          A full-length, sectional rehearsal.
        </h1>
        <p className="mt-5 text-[var(--color-ink-muted)] leading-relaxed">
          Five sections, each with its own clock, run in the order the real test uses.
          You can leave a section early, but you cannot return to it.
          Refreshing is safe — your responses are persisted locally.
        </p>
      </header>

      {active && (
        <div className="surface-soft mt-8 p-5 flex flex-wrap items-center gap-4 justify-between">
          <div>
            <p className="eyebrow">In-progress session</p>
            <p className="serif text-xl mt-1">
              {MOCK_TESTS.find((t) => t.id === active.testId)?.title ?? "Unknown test"}
            </p>
            <p className="text-xs text-[var(--color-ink-faint)] mt-1 mono">
              Started {new Date(active.startedAt).toLocaleString()} · section {active.sectionIndex + 1}
            </p>
          </div>
          <div className="flex gap-2">
            <Link href={`/mock/session?test=${active.testId}`} className="btn btn-primary">Resume →</Link>
            <button onClick={discardActive} className="btn btn-ghost text-xs">Discard</button>
          </div>
        </div>
      )}

      <div className="grid gap-6 mt-10">
        {MOCK_TESTS.map((test) => {
          const totalMinutes = Math.round(test.sections.reduce((s, sec) => s + sec.durationSeconds, 0) / 60);
          return (
            <article key={test.id} className="surface p-7 sm:p-9">
              <div className="flex flex-wrap items-baseline justify-between gap-3 mb-6">
                <h2 className="serif text-3xl tracking-tight">{test.title}</h2>
                <p className="mono text-sm text-[var(--color-ink-muted)]">total {totalMinutes} min</p>
              </div>
              <ol className="grid sm:grid-cols-5 gap-3">
                {test.sections.map((section, idx) => (
                  <li key={section.id} className="surface-soft p-4">
                    <p className="mono text-[10px] text-[var(--color-ink-faint)]">
                      Section {idx + 1} · {section.kind.toUpperCase()}
                    </p>
                    <p className="serif text-base mt-2 leading-snug">{section.label}</p>
                    <p className="mt-3 mono text-xs text-[var(--color-accent)]">
                      {Math.round(section.durationSeconds / 60)} min · {section.questions.length} item{section.questions.length === 1 ? "" : "s"}
                    </p>
                  </li>
                ))}
              </ol>
              <div className="mt-7 flex gap-3">
                <button onClick={() => startTest(test.id)} className="btn btn-accent">Begin test →</button>
                <span className="self-center text-xs text-[var(--color-ink-faint)]">
                  Tip: close other tabs and put your phone in another room.
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
