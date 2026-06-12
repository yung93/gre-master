import type { QuantQuestion } from "@/lib/types";
import { ARITHMETIC } from "./arithmetic";
import { ALGEBRA } from "./algebra";
import { GEOMETRY } from "./geometry";
import { NUMBER_PROPERTIES } from "./number-properties";
import { RATIO_PROPORTION } from "./ratio-proportion";
import { WORD_PROBLEMS } from "./word-problems";
import { STATISTICS } from "./statistics";
import { PROBABILITY_COMBINATORICS } from "./probability-combinatorics";
import { COORDINATE_GEOMETRY } from "./coordinate-geometry";
import { DATA_INTERPRETATION } from "./data-interpretation";

/**
 * The full question bank, organized by topic and modeled on the Manhattan
 * Review GRE practice pool (quantitative comparison, single- and multi-answer
 * multiple choice, and numeric entry; some questions carry an SVG figure).
 */
export const QUANT: QuantQuestion[] = [
  ...ARITHMETIC,
  ...ALGEBRA,
  ...GEOMETRY,
  ...NUMBER_PROPERTIES,
  ...RATIO_PROPORTION,
  ...WORD_PROBLEMS,
  ...STATISTICS,
  ...PROBABILITY_COMBINATORICS,
  ...COORDINATE_GEOMETRY,
  ...DATA_INTERPRETATION,
];
