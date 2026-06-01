import type { LearnProgress, SrsGrade } from "./types";

/**
 * Anki-style learning queue.
 *
 * A fixed-size batch of active cards is kept "in rotation" and persisted, so it
 * stays stable across renders. Each card must be mastered to graduate out of the
 * batch; the instant it graduates, the slot is backfilled.
 *
 * Backfill source:
 *   - Normally a RANDOM unseen word fills the freed slot.
 *   - But on every REVISIT_EVERY-th mastery, the slot is filled instead by
 *     bringing back a previously-mastered word (the least-revisited one, ties
 *     broken randomly) for spaced review. Its streak resets, so it must be
 *     re-mastered. If no mastered words exist (or no new words remain), it falls
 *     back to the other source.
 *
 * Mastery rule (mirrors Anki's learning steps):
 *   - "good"  → +1 to the streak; graduates at GOOD_STEPS_TO_GRADUATE
 *   - "easy"  → graduates immediately
 *   - "hard"  → holds the streak where it is (no progress, no reset)
 *   - "again" → resets the streak to 0
 *
 * IMPORTANT: backfill is random, so the batch-building functions must only be
 * called from event handlers (and once on hydration) — never during render —
 * and their result must be persisted.
 */

export const BATCH_SIZE = 10;
export const GOOD_STEPS_TO_GRADUATE = 2;
export const REVISIT_EVERY = 10;

export function initialLearnProgress(): LearnProgress {
  return {
    streak: 0,
    seen: 0,
    graduated: false,
    everMastered: false,
    revisitCount: 0,
    lastSeenAt: null,
  };
}

export function isGraduated(progress: LearnProgress | undefined): boolean {
  return progress?.graduated ?? false;
}

/** Apply a grade to a card's learning progress. Pure: returns a new object. */
export function applyGrade(
  prev: Readonly<LearnProgress>,
  grade: SrsGrade,
  now: number = Date.now(),
): LearnProgress {
  const seen = prev.seen + 1;
  const base = {
    everMastered: prev.everMastered,
    revisitCount: prev.revisitCount,
  };

  if (grade === "again") {
    return { ...base, streak: 0, seen, graduated: false, lastSeenAt: now };
  }
  if (grade === "hard") {
    return { ...prev, seen, lastSeenAt: now };
  }
  if (grade === "easy") {
    return { ...base, streak: GOOD_STEPS_TO_GRADUATE, seen, graduated: true, everMastered: true, lastSeenAt: now };
  }
  // "good"
  const streak = prev.streak + 1;
  const graduated = streak >= GOOD_STEPS_TO_GRADUATE;
  return {
    ...base,
    streak,
    seen,
    graduated,
    everMastered: prev.everMastered || graduated,
    lastSeenAt: now,
  };
}

/**
 * Re-enter a mastered word for review: clear its graduated/streak state (so it
 * must be re-mastered) and bump its revisit counter. `everMastered` stays true.
 */
export function markRevisit(
  prev: Readonly<LearnProgress>,
  now: number = Date.now(),
): LearnProgress {
  return {
    ...prev,
    streak: 0,
    graduated: false,
    revisitCount: prev.revisitCount + 1,
    lastSeenAt: now,
  };
}

/** Words never seen yet and not graduated, eligible to enter the batch. */
function freshCandidates(
  orderedIds: readonly string[],
  progress: Readonly<Record<string, LearnProgress>>,
  exclude: ReadonlySet<string>,
): string[] {
  return orderedIds.filter((id) => {
    if (exclude.has(id)) return false;
    const p = progress[id];
    return !p || (p.seen === 0 && !p.graduated);
  });
}

/** Currently-mastered words (graduated, not already in the batch), for revisits. */
function masteredCandidates(
  orderedIds: readonly string[],
  progress: Readonly<Record<string, LearnProgress>>,
  exclude: ReadonlySet<string>,
): string[] {
  return orderedIds.filter((id) => {
    if (exclude.has(id)) return false;
    return progress[id]?.graduated === true;
  });
}

function pickRandom<T>(arr: readonly T[]): T | undefined {
  if (arr.length === 0) return undefined;
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Choose one mastered word to revisit: the least-revisited, ties broken
 * randomly. Returns undefined if there are none.
 */
export function pickRevisit(
  orderedIds: readonly string[],
  progress: Readonly<Record<string, LearnProgress>>,
  exclude: ReadonlySet<string> = new Set(),
): string | undefined {
  const pool = masteredCandidates(orderedIds, progress, exclude);
  if (pool.length === 0) return undefined;
  let min = Infinity;
  for (const id of pool) {
    const c = progress[id]?.revisitCount ?? 0;
    if (c < min) min = c;
  }
  const leastRevisited = pool.filter((id) => (progress[id]?.revisitCount ?? 0) === min);
  return pickRandom(leastRevisited);
}

/**
 * Build a brand-new batch: any in-progress (seen, ungraduated) words first,
 * then random unseen words to fill up to `size`. Used on first load and reset.
 */
export function seedBatch(
  orderedIds: readonly string[],
  progress: Readonly<Record<string, LearnProgress>>,
  size: number = BATCH_SIZE,
): string[] {
  const batch: string[] = [];
  for (const id of orderedIds) {
    const p = progress[id];
    if (p && p.seen > 0 && !p.graduated) batch.push(id);
    if (batch.length >= size) break;
  }
  return fillRandom(batch, orderedIds, progress, size);
}

/**
 * Reconcile a persisted batch with current progress: drop any graduated words,
 * drop ids no longer in the deck, then backfill freed slots with RANDOM unseen
 * words up to `size`. Survivors keep their relative order.
 */
export function refillBatch(
  batch: readonly string[],
  orderedIds: readonly string[],
  progress: Readonly<Record<string, LearnProgress>>,
  size: number = BATCH_SIZE,
): string[] {
  const deckSet = new Set(orderedIds);
  const survivors = batch.filter(
    (id) => deckSet.has(id) && !progress[id]?.graduated,
  );
  return fillRandom(survivors, orderedIds, progress, size);
}

function fillRandom(
  base: readonly string[],
  orderedIds: readonly string[],
  progress: Readonly<Record<string, LearnProgress>>,
  size: number,
): string[] {
  const out = [...base];
  const used = new Set(out);
  let pool = freshCandidates(orderedIds, progress, used);
  while (out.length < size && pool.length > 0) {
    const choice = pickRandom(pool)!;
    out.push(choice);
    used.add(choice);
    pool = pool.filter((id) => id !== choice);
  }
  return out;
}

/**
 * Pick the next card to present from a batch. Prefers the card seen least
 * recently (never-seen first), excluding the one just answered when the batch
 * has more than one card so the same card never repeats back-to-back.
 */
export function pickFromBatch(
  batch: readonly string[],
  progress: Readonly<Record<string, LearnProgress>>,
  justAnswered?: string,
): string | null {
  if (batch.length === 0) return null;
  const pool = batch.length > 1 && justAnswered
    ? batch.filter((id) => id !== justAnswered)
    : [...batch];

  pool.sort((a, b) => {
    const pa = progress[a]?.lastSeenAt ?? -1;
    const pb = progress[b]?.lastSeenAt ?? -1;
    return pa - pb;
  });
  return pool[0] ?? batch[0];
}
