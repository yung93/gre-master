"use client";

import { useEffect, useMemo, useState } from "react";
import Flashcard from "@/components/Flashcard";
import SrsControls from "@/components/SrsControls";
import SpeakButton from "@/components/SpeakButton";
import { VOCAB } from "@/data/vocab";
import { initialSrsState, isDue, scheduleNext } from "@/lib/srs";
import { useLocalState } from "@/lib/storage";
import type { SrsGrade, SrsState } from "@/lib/types";

type DeckMode = "due" | "all" | "fresh";

interface SessionStats {
  reviewed: number;
  again: number;
  good: number;
}

function pickNext(
  states: Record<string, SrsState>,
  mode: DeckMode,
  now: number,
  excludeId?: string,
): string | null {
  const candidates = VOCAB.filter((v) => v.id !== excludeId);
  if (mode === "fresh") {
    const unseen = candidates.filter((v) => !states[v.id] || states[v.id].repetitions === 0);
    if (unseen.length > 0) return unseen[Math.floor(Math.random() * unseen.length)].id;
  }
  if (mode === "due") {
    const due = candidates.filter((v) => {
      const state = states[v.id] ?? initialSrsState(now);
      return isDue(state, now);
    });
    if (due.length > 0) return due[Math.floor(Math.random() * due.length)].id;
  }
  if (candidates.length === 0) return null;
  return candidates[Math.floor(Math.random() * candidates.length)].id;
}

export default function VerbalPage() {
  const [states, setStates] = useLocalState<Record<string, SrsState>>("srs/vocab", {});
  const [stats, setStats] = useState<SessionStats>({ reviewed: 0, again: 0, good: 0 });
  const [mode, setMode] = useState<DeckMode>("due");
  const [currentId, setCurrentId] = useState<string | null>(null);

  useEffect(() => {
    if (!currentId) {
      const next = pickNext(states, mode, Date.now());
      if (next) setCurrentId(next);
    }
  }, [currentId, states, mode]);

  const current = useMemo(() => VOCAB.find((v) => v.id === currentId) ?? null, [currentId]);

  const dueNow = useMemo(() => {
    const now = Date.now();
    return VOCAB.reduce((acc, v) => (isDue(states[v.id] ?? initialSrsState(now), now) ? acc + 1 : acc), 0);
  }, [states]);

  function handleGrade(grade: SrsGrade) {
    if (!current) return;
    const now = Date.now();
    const prev = states[current.id] ?? initialSrsState(now);
    const next = scheduleNext(prev, grade, now);
    setStates((s) => ({ ...s, [current.id]: next }));
    setStats((s) => ({
      reviewed: s.reviewed + 1,
      again: s.again + (grade === "again" ? 1 : 0),
      good: s.good + (grade === "good" || grade === "easy" ? 1 : 0),
    }));
    const upcoming = pickNext(states, mode, now, current.id);
    setCurrentId(upcoming);
  }

  function resetProgress() {
    if (typeof window !== "undefined" && !window.confirm("Reset all vocabulary progress?")) return;
    setStates({});
    setStats({ reviewed: 0, again: 0, good: 0 });
    setCurrentId(null);
  }

  return (
    <div className="page-shell pt-10 pb-20">
      <header className="grid lg:grid-cols-[2fr_1fr] gap-8 items-end">
        <div>
          <p className="eyebrow">Verbal · Vocabulary</p>
          <h1 className="serif mt-3 text-[length:var(--text-headline)] leading-tight">
            <em className="not-italic">Flip</em>, recall, grade.
          </h1>
          <p className="mt-4 max-w-2xl text-[var(--color-ink-muted)] leading-relaxed text-sm">
            Front shows the word, part of speech, and an exam-style sentence with the word
            elided. Back reveals the definition (both Traditional Chinese and English),
            the full example, and any synonyms.
          </p>
        </div>
        <div className="surface-soft px-5 py-4 grid grid-cols-3 gap-4">
          <Stat label="Due" value={dueNow.toString()} />
          <Stat label="Reviewed" value={stats.reviewed.toString()} />
          <Stat label="Total" value={VOCAB.length.toString()} />
        </div>
      </header>

      <div className="mt-8 flex flex-wrap items-center gap-2">
        <ModeButton current={mode} value="due" onSelect={setMode}>Due first</ModeButton>
        <ModeButton current={mode} value="fresh" onSelect={setMode}>Fresh first</ModeButton>
        <ModeButton current={mode} value="all" onSelect={setMode}>Shuffle all</ModeButton>
        <span className="ml-auto text-xs text-[var(--color-ink-faint)] mono">{stats.reviewed} this session</span>
        <button onClick={resetProgress} className="btn btn-ghost text-xs">Reset progress</button>
      </div>

      <div className="mt-8">
        {current ? (
          <>
            <Flashcard
              cardKey={current.id}
              front={
                <div className="space-y-6">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <h2 className="serif text-5xl sm:text-6xl tracking-tight">{current.word}</h2>
                    <span className="italic text-[var(--color-ink-muted)]">{current.partOfSpeech}</span>
                    <SpeakButton text={current.word} shortcut="s" size="md" />
                  </div>
                  <p className="text-lg leading-relaxed text-[var(--color-ink)] max-w-2xl">
                    {renderClozeSentence(current.example, current.word)}
                  </p>
                  <p className="eyebrow">
                    Tap card or press <kbd className="mono">space</kbd> to reveal · press <kbd className="mono">s</kbd> to hear it
                  </p>
                </div>
              }
              back={
                <div className="space-y-5">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <h2 className="serif text-3xl tracking-tight">{current.word}</h2>
                    <span className="italic text-[var(--color-ink-muted)]">{current.partOfSpeech}</span>
                    <SpeakButton text={current.word} shortcut="s" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="eyebrow">繁體中文</p>
                      <p className="serif mt-1.5 text-xl leading-snug">{current.meaningZh}</p>
                    </div>
                    <div>
                      <p className="eyebrow">English</p>
                      <p className="mt-1.5 leading-snug text-[var(--color-ink-muted)]">{current.meaningEn}</p>
                    </div>
                  </div>
                  <hr className="rule" />
                  <div>
                    <p className="eyebrow">Example</p>
                    <p className="serif mt-2 italic leading-relaxed text-lg">{current.example}</p>
                    <p className="mt-2 text-sm text-[var(--color-ink-muted)] leading-relaxed">{current.exampleZh}</p>
                  </div>
                  {current.synonyms && current.synonyms.length > 0 && (
                    <div>
                      <p className="eyebrow">Synonyms</p>
                      <p className="mt-1.5 text-sm">{current.synonyms.join(" · ")}</p>
                    </div>
                  )}
                </div>
              }
              footerFront={<span>Card {VOCAB.findIndex((v) => v.id === current.id) + 1} of {VOCAB.length}</span>}
              footerBack={<span>Grade your recall to schedule the next review</span>}
            />
            <SrsControls onGrade={handleGrade} />
          </>
        ) : (
          <div className="surface p-12 text-center">
            <p className="serif text-2xl">No cards due. Take a break.</p>
            <p className="mt-3 text-sm text-[var(--color-ink-muted)]">
              Switch the mode above to drill anyway, or come back when something matures.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="eyebrow">{label}</p>
      <p className="serif text-2xl mt-1">{value}</p>
    </div>
  );
}

function ModeButton({
  current,
  value,
  onSelect,
  children,
}: {
  current: DeckMode;
  value: DeckMode;
  onSelect: (v: DeckMode) => void;
  children: React.ReactNode;
}) {
  const active = current === value;
  return (
    <button
      onClick={() => onSelect(value)}
      className={`btn text-xs ${active ? "btn-primary" : "btn-secondary"}`}
    >
      {children}
    </button>
  );
}

function renderClozeSentence(sentence: string, word: string): React.ReactNode {
  const pattern = new RegExp(`\\b(${escape(word)}\\w*)\\b`, "i");
  const match = sentence.match(pattern);
  if (!match) return sentence;
  const [whole] = match;
  const idx = match.index ?? 0;
  return (
    <>
      {sentence.slice(0, idx)}
      <span className="px-2 py-0.5 mx-0.5 rounded bg-[var(--color-ink)]/8 text-transparent select-none">
        {whole.replace(/./g, "•")}
      </span>
      {sentence.slice(idx + whole.length)}
    </>
  );
}

function escape(input: string): string {
  return input.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
