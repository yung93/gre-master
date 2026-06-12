export type SrsGrade = "again" | "hard" | "good" | "easy";

export interface SrsState {
  ease: number;
  intervalDays: number;
  repetitions: number;
  dueAt: number;
  lastReviewedAt: number | null;
}

/**
 * Per-card state for the Anki-style learning queue.
 * `streak` counts consecutive correct answers toward graduation.
 * `graduated` flips true while the card is mastered and out of the active batch;
 * it is temporarily set back to false when the card is pulled in for a revisit.
 * `everMastered` stays true once a card has been mastered at least once, so the
 * "Mastered" count does not flicker downward during revisits.
 * `revisitCount` is how many times the card has been pulled back for review;
 * the queue prefers the least-revisited mastered words.
 */
export interface LearnProgress {
  streak: number;
  seen: number;
  graduated: boolean;
  everMastered: boolean;
  revisitCount: number;
  lastSeenAt: number | null;
}

/**
 * A memory aid for a word. `roots` breaks the word into morphemes with glosses;
 * `mnemonic` is a short hook (often linking the sound/parts to the meaning, with
 * a Traditional Chinese cue) to make the word stick.
 */
export interface MemoryAid {
  roots?: { part: string; meaning: string }[];
  mnemonic?: string;
}

export interface VocabEntry {
  id: string;
  word: string;
  partOfSpeech: string;
  ipa?: string;
  meaningZh: string;
  meaningEn: string;
  example: string;
  exampleZh: string;
  synonyms?: string[];
  tags?: string[];
  memoryAid?: MemoryAid;
}

export type QuantTopic =
  | "arithmetic"
  | "algebra"
  | "geometry"
  | "number-properties"
  | "ratio-proportion"
  | "word-problems"
  | "statistics"
  | "probability-combinatorics"
  | "coordinate-geometry"
  | "data-interpretation";

/**
 * GRE quantitative question formats, mirroring the official test (and the
 * Manhattan Review practice pool the question bank is modeled on).
 * `quantitative-comparison` uses the fixed four-option answer set;
 * `single` is multiple choice with one answer; `multi` allows one or more;
 * `numeric` is free numeric entry.
 */
export type QuantFormat = "quantitative-comparison" | "single" | "multi" | "numeric";

/** A figure (SVG/image under public/figures/quant) displayed with a question. */
export interface QuantFigure {
  src: string;
  /** Full description including any values shown — it stands in for the figure. */
  alt: string;
  width: number;
  height: number;
}

export interface QuantQuestion {
  id: string;
  topic: QuantTopic;
  format: QuantFormat;
  difficulty: 1 | 2 | 3;
  question: string;
  /** Optional diagram or chart shown between the question text and the answers. */
  figure?: QuantFigure;
  /** The two quantities of a quantitative-comparison question. */
  quantityA?: string;
  quantityB?: string;
  /** Answer options for single/multi formats (QC uses the standard fixed four). */
  choices?: string[];
  /**
   * Correct answer(s): choice letters ("A"…) for choice formats, or the
   * accepted numeric value(s) for numeric entry (e.g. ["0.25", "1/4"]).
   */
  correct: string[];
  explanation: string;
  explanationZh: string;
}

/**
 * Result record for one quant question. `outcome` reflects the most recent
 * answer; `firstOutcome` is frozen at the first attempt so honest first-try
 * accuracy survives retries. A question is "finished" once a record exists.
 */
export interface QuantAttempt {
  outcome: "correct" | "wrong";
  firstOutcome: "correct" | "wrong";
  attempts: number;
  lastAnsweredAt: number;
  /** Stopwatch reading of the last answered attempt; absent if the timer was never run. */
  timeMs?: number;
}

export type EssayType = "issue" | "argument";

/**
 * A useful vocabulary word from a sample essay (teal highlight). `term` must
 * appear (case-insensitively) as a contiguous substring of its sentence so it
 * can be highlighted inline; `gloss` is its Traditional Chinese meaning, shown
 * in a tooltip and on the dedicated essay-vocabulary page.
 */
export interface EssayVocab {
  term: string;
  gloss: string;
}

/**
 * One sentence of a sample essay, tagged with the rhetorical job it does
 * (`fn`, e.g. "Thesis statement", "Topic sentence", "Restate thesis"). Sentence
 * functions drive the hover annotation and recite mode.
 *
 * `vocab` are useful words (teal, with a Chinese gloss tooltip). `moves` are
 * rhetorical signpost phrases (orange, no tooltip) such as "And yet" or
 * "Worse still"; each must occur (case-insensitively) in `text`.
 */
export interface EssaySentence {
  text: string;
  fn: string;
  vocab?: EssayVocab[];
  moves?: string[];
}

/** A structural section of a sample essay (e.g. "Introduction", "Conclusion"). */
export interface EssaySection {
  role: string;
  sentences: EssaySentence[];
}

export interface SampleEssay {
  /** Expected GRE Analytical Writing score (0–6) under the ETS scoring guide. */
  score: number;
  /** One-line rationale phrased in the language of the rubric band. */
  scoreNote: string;
  sections: EssaySection[];
}

export interface WritingPrompt {
  id: string;
  type: EssayType;
  category: string;
  prompt: string;
  directions: string;
  sample?: SampleEssay;
}

/**
 * Lightweight prompt metadata generated into data/writing-index.json (no sample
 * body). The reader bundles this and lazy-fetches the essay from
 * /essays/<id>.json only when a sampled prompt is opened, keeping the writing
 * route's bundle flat as the essay library grows.
 */
export interface WritingPromptMeta {
  id: string;
  type: EssayType;
  category: string;
  prompt: string;
  directions: string;
  hasSample: boolean;
}

/** A useful word harvested for the essay-vocabulary page, with its source sentence. */
export interface EssayVocabRow {
  term: string;
  gloss: string;
  example: string;
}

export type MockSectionType = "writing" | "verbal" | "quant";

export interface MockQuestion {
  id: string;
  type: "single" | "multi" | "numeric" | "text-completion" | "essay";
  passage?: string;
  prompt: string;
  choices?: string[];
  correct?: string[];
  explanation?: string;
}

export interface MockSection {
  id: string;
  label: string;
  kind: MockSectionType;
  durationSeconds: number;
  questions: MockQuestion[];
}

export interface MockTest {
  id: string;
  title: string;
  sections: MockSection[];
}

export interface MockResponse {
  questionId: string;
  value: string[];
  text?: string;
}

export interface MockSessionState {
  testId: string;
  sectionIndex: number;
  sectionStartedAt: number;
  responses: Record<string, MockResponse>;
  completedSections: string[];
  startedAt: number;
  finishedAt: number | null;
}
