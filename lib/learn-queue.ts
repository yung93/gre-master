import type { LearnProgress, SrsGrade } from "./types";

/**
 * Anki-style learning queue.
 *
 * A fixed-size batch of active cards is kept "in rotation" and persisted, so it
 * stays stable across renders. Each card must be mastered to graduate out of the
 * batch; the instant it graduates, a RANDOM unseen card backfills the slot so the
 * active size stays constant.
 *
 * Mastery rule (mirrors Anki's learning steps):
 *   - "good"  → +1 to the streak; graduates at GOOD_STEPS_TO_GRADUATE
 *   - "easy"  → graduates immediately
 *   - "hard"  → holds the streak where it is (no progress, no reset)
 *   - "again" → resets the streak to 0
 *
 * Graduated cards are not discarded: the page hands them to the SM-2 scheduler
 * for long-term review, and they can resurface on later days.
 *
 * IMPORTANT: the backfill is random, so the batch-building functions must only be
 * called from event handlers (and once on hydration) — never during render — and
 * their result must be persisted. Calling them in render would reshuffle the batch
 * on every paint.
 */

export const BATCH_SIZE = 10;
export const GOOD_STEPS_TO_GRADUATE = 2;

export function initialLearnProgress(): LearnProgress {
  return { streak: 0, seen: 0, graduated: false, lastSeenAt: null };
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

  if (grade === "again") {
    return { streak: 0, seen, graduated: false, lastSeenAt: now };
  }
  if (grade === "hard") {
    return { ...prev, seen, lastSeenAt: now };
  }
  if (grade === "easy") {
    return { streak: GOOD_STEPS_TO_GRADUATE, seen, graduated: true, lastSeenAt: now };
  }
  // "good"
  const streak = prev.streak + 1;
  const graduated = streak >= GOOD_STEPS_TO_GRADUATE;
  return { streak, seen, graduated, lastSeenAt: now };
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

function pickRandom<T>(arr: readonly T[]): T | undefined {
  if (arr.length === 0) return undefined;
  return arr[Math.floor(Math.random() * arr.length)];
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
 * drop ids no longer in the deck, then backfill the freed slots with RANDOM
 * unseen words up to `size`. Survivors keep their relative order.
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
