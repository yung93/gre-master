import type { SrsGrade, SrsState } from "./types";

const DAY_MS = 24 * 60 * 60 * 1000;
const MIN_EASE = 1.3;
const DEFAULT_EASE = 2.5;

export function initialSrsState(now: number = Date.now()): SrsState {
  return {
    ease: DEFAULT_EASE,
    intervalDays: 0,
    repetitions: 0,
    dueAt: now,
    lastReviewedAt: null,
  };
}

export function scheduleNext(
  prev: Readonly<SrsState>,
  grade: SrsGrade,
  now: number = Date.now(),
): SrsState {
  if (grade === "again") {
    return {
      ease: Math.max(MIN_EASE, prev.ease - 0.2),
      intervalDays: 0,
      repetitions: 0,
      dueAt: now + 10 * 60 * 1000,
      lastReviewedAt: now,
    };
  }

  const reps = prev.repetitions + 1;
  let interval: number;
  if (reps === 1) {
    interval = grade === "easy" ? 3 : 1;
  } else if (reps === 2) {
    interval = grade === "easy" ? 6 : 3;
  } else {
    const base = prev.intervalDays * prev.ease;
    interval = grade === "hard" ? Math.max(prev.intervalDays + 1, base * 0.6)
            : grade === "easy" ? base * 1.3
            : base;
  }

  const easeDelta = grade === "hard" ? -0.15 : grade === "easy" ? 0.1 : 0;
  const nextEase = Math.max(MIN_EASE, prev.ease + easeDelta);
  const intervalDays = Math.round(interval);

  return {
    ease: nextEase,
    intervalDays,
    repetitions: reps,
    dueAt: now + intervalDays * DAY_MS,
    lastReviewedAt: now,
  };
}

export function isDue(state: Readonly<SrsState>, now: number = Date.now()): boolean {
  return state.dueAt <= now;
}

export function dueCount(states: Readonly<Record<string, SrsState>>, now: number = Date.now()): number {
  let count = 0;
  for (const id in states) {
    if (states[id].dueAt <= now) count += 1;
  }
  return count;
}
