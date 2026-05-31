"use client";

import { Suspense, useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Timer from "@/components/Timer";
import { MOCK_TESTS } from "@/data/mock";
import { readJson, writeJson, removeKey } from "@/lib/storage";
import type { MockQuestion, MockResponse, MockSection, MockSessionState, MockTest } from "@/lib/types";

const ACTIVE_KEY = "mock/active";

export default function MockSessionPageWrapper() {
  return (
    <Suspense fallback={<div className="page-shell pt-20">Loading…</div>}>
      <MockSessionPage />
    </Suspense>
  );
}

function MockSessionPage() {
  const search = useSearchParams();
  const router = useRouter();
  const testId = search.get("test") ?? MOCK_TESTS[0].id;
  const test = useMemo(() => MOCK_TESTS.find((t) => t.id === testId), [testId]) as MockTest | undefined;

  const [session, setSession] = useState<MockSessionState | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const existing = readJson<MockSessionState | null>(ACTIVE_KEY, null);
    if (existing && existing.testId === testId) {
      setSession(existing);
    } else if (test) {
      const fresh: MockSessionState = {
        testId: test.id,
        sectionIndex: 0,
        sectionStartedAt: Date.now(),
        responses: {},
        completedSections: [],
        startedAt: Date.now(),
        finishedAt: null,
      };
      setSession(fresh);
      writeJson(ACTIVE_KEY, fresh);
    }
    setHydrated(true);
  }, [test, testId]);

  const updateSession = useCallback((updater: (prev: MockSessionState) => MockSessionState) => {
    setSession((prev) => {
      if (!prev) return prev;
      const next = updater(prev);
      writeJson(ACTIVE_KEY, next);
      return next;
    });
  }, []);

  const submitResponse = useCallback(
    (response: MockResponse) => {
      updateSession((prev) => ({
        ...prev,
        responses: { ...prev.responses, [response.questionId]: response },
      }));
    },
    [updateSession],
  );

  const advanceSection = useCallback(() => {
    updateSession((prev) => {
      if (!test) return prev;
      const completedId = test.sections[prev.sectionIndex]?.id;
      const completedSections = completedId ? [...prev.completedSections, completedId] : prev.completedSections;
      const nextIdx = prev.sectionIndex + 1;
      if (nextIdx >= test.sections.length) {
        return { ...prev, completedSections, finishedAt: Date.now() };
      }
      return {
        ...prev,
        sectionIndex: nextIdx,
        sectionStartedAt: Date.now(),
        completedSections,
      };
    });
  }, [test, updateSession]);

  function endTestEarly() {
    if (typeof window !== "undefined" && !window.confirm("End the test now and view results?")) return;
    updateSession((prev) => ({ ...prev, finishedAt: Date.now() }));
  }

  function discardAndExit() {
    if (typeof window !== "undefined" && !window.confirm("Discard the in-progress test?")) return;
    removeKey(ACTIVE_KEY);
    router.push("/mock");
  }

  if (!test) {
    return (
      <div className="page-shell pt-20">
        <p>Test not found. <Link href="/mock" className="underline">Back to mock list</Link>.</p>
      </div>
    );
  }
  if (!hydrated || !session) {
    return <div className="page-shell pt-20">Loading session…</div>;
  }

  if (session.finishedAt) {
    return <MockSummary test={test} session={session} onClose={discardAndExit} />;
  }

  const section = test.sections[session.sectionIndex];

  return (
    <div className="page-shell pt-8 pb-20">
      <div className="sticky top-0 z-30 -mx-[var(--space-page-x)] px-[var(--space-page-x)] py-3 bg-[var(--color-bg)]/85 backdrop-blur border-b border-[var(--color-rule)] flex items-center justify-between">
        <div className="flex items-baseline gap-4">
          <p className="eyebrow">Section {session.sectionIndex + 1} of {test.sections.length}</p>
          <p className="serif text-lg">{section.label}</p>
        </div>
        <div className="flex items-center gap-4">
          <Timer
            startedAt={session.sectionStartedAt}
            durationSeconds={section.durationSeconds}
            onExpire={advanceSection}
          />
          <button onClick={endTestEarly} className="btn btn-ghost text-xs">End test</button>
          <button onClick={discardAndExit} className="btn btn-ghost text-xs">Discard</button>
        </div>
      </div>

      <SectionRunner
        section={section}
        responses={session.responses}
        onRespond={submitResponse}
        onSubmit={advanceSection}
        isLast={session.sectionIndex === test.sections.length - 1}
      />
    </div>
  );
}

interface SectionRunnerProps {
  section: MockSection;
  responses: Record<string, MockResponse>;
  onRespond: (response: MockResponse) => void;
  onSubmit: () => void;
  isLast: boolean;
}

function SectionRunner({ section, responses, onRespond, onSubmit, isLast }: SectionRunnerProps) {
  return (
    <div className="mt-10 grid lg:grid-cols-[3fr_1fr] gap-10 items-start">
      <ol className="space-y-10">
        {section.questions.map((q, idx) => (
          <li key={q.id} className="surface p-7">
            <div className="flex items-baseline justify-between mb-4">
              <p className="eyebrow">Question {idx + 1}</p>
              <p className="mono text-xs text-[var(--color-ink-faint)]">{q.type}</p>
            </div>
            <QuestionEditor question={q} response={responses[q.id]} onChange={onRespond} />
          </li>
        ))}
      </ol>
      <aside className="lg:sticky lg:top-24 space-y-5">
        <div className="surface-soft p-5">
          <p className="eyebrow">Progress</p>
          <p className="serif text-3xl mt-1">
            {section.questions.filter((q) => isAnswered(responses[q.id])).length}
            <span className="text-[var(--color-ink-faint)] text-lg"> / {section.questions.length}</span>
          </p>
          <ol className="mt-4 grid grid-cols-6 gap-1.5">
            {section.questions.map((q, i) => {
              const done = isAnswered(responses[q.id]);
              return (
                <li
                  key={q.id}
                  className={`text-center mono text-[10px] py-1.5 rounded-sm ${
                    done
                      ? "bg-[var(--color-accent)] text-white"
                      : "bg-[var(--color-bg-elevated)] text-[var(--color-ink-faint)] border border-[var(--color-rule)]"
                  }`}
                >
                  {i + 1}
                </li>
              );
            })}
          </ol>
        </div>
        <button onClick={onSubmit} className="btn btn-primary w-full">
          {isLast ? "Submit & finish" : "Submit & next section"}
        </button>
        <p className="text-xs text-[var(--color-ink-faint)] leading-relaxed">
          You cannot return to this section once submitted. Unanswered questions count as blank.
        </p>
      </aside>
    </div>
  );
}

function isAnswered(response: MockResponse | undefined): boolean {
  if (!response) return false;
  if (response.text && response.text.trim().length > 0) return true;
  return response.value.length > 0;
}

interface QuestionEditorProps {
  question: MockQuestion;
  response: MockResponse | undefined;
  onChange: (response: MockResponse) => void;
}

function QuestionEditor({ question, response, onChange }: QuestionEditorProps) {
  if (question.type === "essay") {
    return (
      <div className="space-y-4">
        <p className="serif text-xl leading-relaxed whitespace-pre-wrap">{question.prompt}</p>
        <textarea
          value={response?.text ?? ""}
          onChange={(e) => onChange({ questionId: question.id, value: [], text: e.target.value })}
          placeholder="Begin your response here. Plan, draft, revise within the time given."
          className="w-full min-h-[24rem] surface p-5 leading-[1.7] text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
        />
        <p className="text-xs text-[var(--color-ink-faint)] mono">
          {wordCount(response?.text ?? "")} words
        </p>
      </div>
    );
  }

  if (question.type === "numeric") {
    return (
      <div className="space-y-4">
        <p className="serif text-xl leading-relaxed">{question.prompt}</p>
        <input
          type="text"
          value={response?.value[0] ?? ""}
          onChange={(e) => onChange({ questionId: question.id, value: e.target.value ? [e.target.value] : [] })}
          placeholder="Enter your answer"
          className="surface px-4 py-3 mono text-lg w-48 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
        />
      </div>
    );
  }

  const multi = question.type === "multi";
  const selected = new Set(response?.value ?? []);

  function toggle(value: string) {
    if (multi) {
      const next = new Set(selected);
      if (next.has(value)) next.delete(value);
      else next.add(value);
      onChange({ questionId: question.id, value: Array.from(next) });
    } else {
      onChange({ questionId: question.id, value: [value] });
    }
  }

  return (
    <div className="space-y-5">
      {question.passage && (
        <blockquote className="serif italic border-l-2 border-[var(--color-rule-strong)] pl-5 text-[var(--color-ink-muted)] leading-relaxed">
          {question.passage}
        </blockquote>
      )}
      <p className="serif text-xl leading-relaxed">{question.prompt}</p>
      {multi && <p className="eyebrow">Select all that apply</p>}
      <ul className="space-y-2">
        {question.choices?.map((choice) => {
          const active = selected.has(choice);
          return (
            <li key={choice}>
              <button
                type="button"
                onClick={() => toggle(choice)}
                className={`w-full text-left flex items-start gap-3 px-4 py-3 rounded-md border transition-colors ${
                  active
                    ? "bg-[var(--color-accent-soft)] border-[var(--color-accent)]"
                    : "border-[var(--color-rule)] hover:border-[var(--color-rule-strong)]"
                }`}
              >
                <span
                  aria-hidden
                  className={`mt-1 w-4 h-4 ${multi ? "rounded-sm" : "rounded-full"} border ${
                    active ? "bg-[var(--color-accent)] border-[var(--color-accent)]" : "border-[var(--color-rule-strong)]"
                  }`}
                />
                <span className="text-base leading-relaxed">{choice}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

interface MockSummaryProps {
  test: MockTest;
  session: MockSessionState;
  onClose: () => void;
}

function MockSummary({ test, session, onClose }: MockSummaryProps) {
  const scoringSections = test.sections.filter((s) => s.kind !== "writing");
  const stats = scoringSections.map((section) => {
    let correct = 0;
    let answered = 0;
    section.questions.forEach((q) => {
      const r = session.responses[q.id];
      if (!r || (r.value.length === 0 && !r.text)) return;
      answered += 1;
      if (q.correct && arraysEqual(r.value.slice().sort(), q.correct.slice().sort())) correct += 1;
    });
    return { section, correct, answered, total: section.questions.length };
  });

  const overallCorrect = stats.reduce((s, x) => s + x.correct, 0);
  const overallTotal = stats.reduce((s, x) => s + x.total, 0);

  return (
    <div className="page-shell pt-12 pb-20">
      <header className="max-w-3xl">
        <p className="eyebrow">Mock Test Complete</p>
        <h1 className="serif mt-3 text-[length:var(--text-headline)] leading-tight">{test.title}</h1>
        <p className="mt-4 text-[var(--color-ink-muted)] leading-relaxed">
          Auto-scored sections are shown below. The writing task is recorded for your own review —
          self-assess against the sample structures in the Learning surface.
        </p>
      </header>

      <div className="grid sm:grid-cols-3 gap-4 mt-10">
        <div className="surface-soft p-5">
          <p className="eyebrow">Verbal + Quant</p>
          <p className="serif text-4xl mt-2">{overallCorrect}<span className="text-[var(--color-ink-faint)] text-2xl"> / {overallTotal}</span></p>
        </div>
        <div className="surface-soft p-5">
          <p className="eyebrow">Accuracy</p>
          <p className="serif text-4xl mt-2">{overallTotal ? Math.round((overallCorrect / overallTotal) * 100) : 0}%</p>
        </div>
        <div className="surface-soft p-5">
          <p className="eyebrow">Total time</p>
          <p className="serif text-4xl mt-2">
            {Math.round(((session.finishedAt ?? Date.now()) - session.startedAt) / 60000)} min
          </p>
        </div>
      </div>

      <div className="mt-10 space-y-6">
        {test.sections.map((section, sIdx) => {
          const stat = stats.find((x) => x.section.id === section.id);
          return (
            <section key={section.id} className="surface p-7">
              <div className="flex items-baseline justify-between flex-wrap gap-3 mb-4">
                <h2 className="serif text-2xl">{section.label}</h2>
                {stat ? (
                  <p className="mono text-sm text-[var(--color-ink-muted)]">
                    {stat.correct} / {stat.total} correct · {stat.answered} answered
                  </p>
                ) : (
                  <p className="mono text-sm text-[var(--color-ink-muted)]">Self-scored</p>
                )}
              </div>
              {section.kind === "writing" ? (
                <EssayReview question={section.questions[0]} response={session.responses[section.questions[0]?.id]} />
              ) : (
                <ol className="space-y-5">
                  {section.questions.map((q, qIdx) => (
                    <li key={q.id} className="border-t border-[var(--color-rule)] pt-4 first:border-t-0 first:pt-0">
                      <div className="flex items-baseline justify-between gap-3 mb-2">
                        <p className="eyebrow">Section {sIdx + 1} · Question {qIdx + 1}</p>
                        <Verdict question={q} response={session.responses[q.id]} />
                      </div>
                      {q.passage && (
                        <blockquote className="serif italic text-sm text-[var(--color-ink-muted)] border-l-2 border-[var(--color-rule)] pl-4 mb-2">
                          {q.passage}
                        </blockquote>
                      )}
                      <p className="serif leading-snug">{q.prompt}</p>
                      <p className="mt-2 text-sm">
                        <span className="text-[var(--color-ink-faint)]">Your answer:</span>{" "}
                        <span className="mono">{formatAnswer(session.responses[q.id])}</span>
                      </p>
                      <p className="mt-1 text-sm">
                        <span className="text-[var(--color-ink-faint)]">Correct:</span>{" "}
                        <span className="mono">{q.correct?.join(" · ") ?? "—"}</span>
                      </p>
                      {q.explanation && (
                        <p className="mt-2 text-sm text-[var(--color-ink-muted)] leading-relaxed">{q.explanation}</p>
                      )}
                    </li>
                  ))}
                </ol>
              )}
            </section>
          );
        })}
      </div>

      <div className="mt-10 flex gap-3">
        <button onClick={onClose} className="btn btn-primary">Close and clear session</button>
        <Link href="/mock" className="btn btn-secondary">Back to mock list</Link>
      </div>
    </div>
  );
}

function EssayReview({ question, response }: { question: MockQuestion | undefined; response: MockResponse | undefined }) {
  if (!question) return null;
  return (
    <div className="space-y-3">
      <p className="serif whitespace-pre-wrap text-[var(--color-ink-muted)]">{question.prompt}</p>
      <div className="surface-soft p-5 max-h-96 overflow-y-auto">
        <p className="eyebrow">Your response · {wordCount(response?.text ?? "")} words</p>
        <p className="mt-2 leading-relaxed whitespace-pre-wrap">{response?.text || "— (left blank) —"}</p>
      </div>
    </div>
  );
}

function Verdict({ question, response }: { question: MockQuestion; response: MockResponse | undefined }) {
  if (!response || (response.value.length === 0 && !response.text)) {
    return <span className="mono text-xs text-[var(--color-ink-faint)]">blank</span>;
  }
  if (!question.correct) {
    return <span className="mono text-xs text-[var(--color-ink-faint)]">—</span>;
  }
  const right = arraysEqual(response.value.slice().sort(), question.correct.slice().sort());
  return (
    <span
      className="mono text-xs px-2 py-0.5 rounded"
      style={{
        background: right ? "oklch(94% 0.06 155)" : "oklch(95% 0.06 25)",
        color: right ? "oklch(35% 0.13 155)" : "oklch(40% 0.15 25)",
      }}
    >
      {right ? "correct" : "incorrect"}
    </span>
  );
}

function formatAnswer(response: MockResponse | undefined): string {
  if (!response) return "—";
  if (response.text) return `(essay, ${wordCount(response.text)} words)`;
  if (response.value.length === 0) return "—";
  return response.value.join(" · ");
}

function arraysEqual(a: string[], b: string[]): boolean {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
  return true;
}

function wordCount(text: string): number {
  return text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length;
}
