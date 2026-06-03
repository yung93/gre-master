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
  | "data-analysis"
  | "word-problem";

export interface QuantEntry {
  id: string;
  topic: QuantTopic;
  question: string;
  choices?: string[];
  answer: string;
  explanation: string;
  explanationZh: string;
  difficulty: 1 | 2 | 3;
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
