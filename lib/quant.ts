import type { QuantFormat, QuantQuestion, QuantTopic } from "./types";

export const TOPIC_ORDER: QuantTopic[] = [
  "arithmetic",
  "algebra",
  "geometry",
  "number-properties",
  "ratio-proportion",
  "word-problems",
  "statistics",
  "probability-combinatorics",
  "coordinate-geometry",
  "data-interpretation",
];

export const TOPIC_LABEL: Record<QuantTopic, string> = {
  arithmetic: "Arithmetic",
  algebra: "Algebra",
  geometry: "Geometry",
  "number-properties": "Number Properties",
  "ratio-proportion": "Ratio & Proportion",
  "word-problems": "Word Problems",
  statistics: "Statistics",
  "probability-combinatorics": "Probability & Counting",
  "coordinate-geometry": "Coordinate Geometry",
  "data-interpretation": "Data Interpretation",
};

export const FORMAT_LABEL: Record<QuantFormat, string> = {
  "quantitative-comparison": "Quantitative Comparison",
  single: "Multiple Choice",
  multi: "Multiple Choice (one or more)",
  numeric: "Numeric Entry",
};

/** Compact format tag for dense list rows. */
export const FORMAT_SHORT: Record<QuantFormat, string> = {
  "quantitative-comparison": "QC",
  single: "MC",
  multi: "MC·multi",
  numeric: "Numeric",
};

/** The standard fixed answer set every quantitative-comparison question uses. */
export const QC_CHOICES: string[] = [
  "Quantity A is greater.",
  "Quantity B is greater.",
  "The two quantities are equal.",
  "The relationship cannot be determined from the information given.",
];

export function choicesOf(q: QuantQuestion): string[] {
  return q.format === "quantitative-comparison" ? QC_CHOICES : q.choices ?? [];
}

export const choiceLetter = (index: number): string => String.fromCharCode(65 + index);

/**
 * Parse a numeric-entry answer: plain decimals ("72.5"), fractions ("1/6"),
 * optional commas and a leading $ are tolerated. Returns null if unparseable.
 */
export function parseNumeric(raw: string): number | null {
  const text = raw.trim().replace(/[,$\s]/g, "").replace("−", "-");
  if (text === "") return null;
  const fraction = text.match(/^(-?\d+(?:\.\d+)?)\/(-?\d+(?:\.\d+)?)$/);
  if (fraction) {
    const denominator = Number(fraction[2]);
    if (denominator === 0) return null;
    return Number(fraction[1]) / denominator;
  }
  const value = Number(text);
  return Number.isFinite(value) ? value : null;
}

const NUMERIC_TOLERANCE = 1e-9;

/**
 * Check a submitted answer. For choice formats, `selected` holds choice
 * letters; for numeric entry it holds the single typed value. Numeric answers
 * are compared by value, so "0.4" matches a stored "2/5".
 */
export function isAnswerCorrect(q: QuantQuestion, selected: string[]): boolean {
  if (q.format === "numeric") {
    const given = parseNumeric(selected[0] ?? "");
    if (given === null) return false;
    return q.correct.some((accepted) => {
      const expected = parseNumeric(accepted);
      return expected !== null && Math.abs(given - expected) <= NUMERIC_TOLERANCE * Math.max(1, Math.abs(expected));
    });
  }
  if (selected.length !== q.correct.length) return false;
  const expected = new Set(q.correct);
  return selected.every((letter) => expected.has(letter));
}

/** Human-readable correct answer for the list page and post-submit feedback. */
export function correctAnswerText(q: QuantQuestion): string {
  if (q.format === "numeric") return q.correct[0];
  const options = choicesOf(q);
  return q.correct
    .map((letter) => {
      const text = options[letter.charCodeAt(0) - 65];
      return text ? `${letter} — ${text}` : letter;
    })
    .join(" · ");
}
