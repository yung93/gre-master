export type SrsGrade = "again" | "hard" | "good" | "easy";

export interface SrsState {
  ease: number;
  intervalDays: number;
  repetitions: number;
  dueAt: number;
  lastReviewedAt: number | null;
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

export interface WritingHighlight {
  text: string;
  tone: "phrase" | "structure" | "default";
  note?: string;
}

export interface SampleEssay {
  title: string;
  body: WritingHighlight[];
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
