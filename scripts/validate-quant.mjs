// Structural validation of the quantitative question bank (data/quant/*.ts).
// Catches integrity problems no type-checker sees: answer keys pointing at
// missing choices, unparseable numeric answers, missing figure files,
// duplicate ids, and format-convention violations. Judgment calls (GRE
// pattern fidelity, difficulty) belong to the gre-question-auditor agent.
//
// Run via `npm run validate:quant` (wired into prebuild, so every local and
// CI build runs it). Exits non-zero on errors; warnings don't fail the build.
import { existsSync, readdirSync } from "node:fs";
import { dirname, join, basename } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const quantDir = join(root, "data", "quant");

const FORMATS = new Set(["quantitative-comparison", "single", "multi", "numeric"]);
const QC_LETTERS = new Set(["A", "B", "C", "D"]);
const SINGLE_CHOICE_COUNT = 5; // GRE single-answer MC always offers five options

const errors = [];
const warnings = [];

/** Mirrors parseNumeric in lib/quant.ts (decimals, fractions, $ and commas). */
function parseNumeric(raw) {
  const text = String(raw).trim().replace(/[,$\s]/g, "").replace("−", "-");
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

function letterIndex(letter) {
  return letter.charCodeAt(0) - 65;
}

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim() !== "";
}

function checkQuestion(q, file, seenIds) {
  const where = `${file} · ${q.id ?? "<missing id>"}`;
  const error = (msg) => errors.push(`${where}: ${msg}`);
  const warn = (msg) => warnings.push(`${where}: ${msg}`);

  if (!isNonEmptyString(q.id) || !/^q-[a-z][a-z-]*-\d+$/.test(q.id)) {
    error(`id "${q.id}" does not match q-<prefix>-<number>`);
  } else if (seenIds.has(q.id)) {
    error(`duplicate id (also in ${seenIds.get(q.id)})`);
  } else {
    seenIds.set(q.id, file);
  }

  const expectedTopic = basename(file, ".ts");
  if (q.topic !== expectedTopic) error(`topic "${q.topic}" ≠ file topic "${expectedTopic}"`);
  if (!FORMATS.has(q.format)) error(`unknown format "${q.format}"`);
  if (![1, 2, 3].includes(q.difficulty)) error(`difficulty must be 1–3, got ${q.difficulty}`);
  if (!isNonEmptyString(q.explanation)) error("missing explanation");
  if (!isNonEmptyString(q.explanationZh)) error("missing explanationZh");
  if (!Array.isArray(q.correct) || q.correct.length === 0) {
    error("correct must be a non-empty array");
    return;
  }

  if (q.format === "quantitative-comparison") {
    if (!isNonEmptyString(q.quantityA) || !isNonEmptyString(q.quantityB)) {
      error("QC needs both quantityA and quantityB");
    }
    if (q.choices) warn("QC questions use the fixed answer set; drop `choices`");
    if (q.correct.length !== 1 || !QC_LETTERS.has(q.correct[0])) {
      error(`QC correct must be exactly one of A–D, got [${q.correct}]`);
    }
  } else if (!isNonEmptyString(q.question)) {
    error("missing question text");
  }

  if (q.format === "single" || q.format === "multi") {
    if (!Array.isArray(q.choices) || q.choices.length < 2) {
      error("choice formats need a choices array");
      return;
    }
    if (new Set(q.choices).size !== q.choices.length) error("duplicate choice text");
    for (const letter of q.correct) {
      const index = letterIndex(letter);
      if (index < 0 || index >= q.choices.length) {
        error(`correct letter "${letter}" has no matching choice`);
      }
    }
    if (new Set(q.correct).size !== q.correct.length) error("duplicate correct letters");
    if (q.format === "single") {
      if (q.correct.length !== 1) error("single format must have exactly one correct letter");
      if (q.choices.length !== SINGLE_CHOICE_COUNT) {
        warn(`GRE single-answer MC uses ${SINGLE_CHOICE_COUNT} choices, got ${q.choices.length}`);
      }
    } else if (q.correct.length === q.choices.length) {
      warn("every choice is correct — trivially guessable for select-all");
    }
  }

  if (q.format === "numeric") {
    if (q.choices) warn("numeric entry should not carry choices");
    for (const value of q.correct) {
      if (parseNumeric(value) === null) error(`numeric answer "${value}" is unparseable`);
    }
  }

  if (q.figure) {
    const { src, alt, width, height } = q.figure;
    if (!isNonEmptyString(src) || !src.startsWith("/figures/")) {
      error(`figure src must live under /figures/, got "${src}"`);
    } else if (!existsSync(join(root, "public", src))) {
      error(`figure file public${src} does not exist`);
    }
    if (!isNonEmptyString(alt)) error("figure alt is required");
    else if (alt.trim().length < 25) warn("figure alt looks too thin to stand in for the figure");
    if (!Number.isInteger(width) || width <= 0 || !Number.isInteger(height) || height <= 0) {
      error("figure width/height must be positive integers");
    }
  }
}

const files = readdirSync(quantDir).filter((f) => f.endsWith(".ts") && f !== "index.ts");
const seenIds = new Map();
let total = 0;

for (const file of files.sort()) {
  const mod = await import(pathToFileURL(join(quantDir, file)).href);
  const lists = Object.values(mod).filter(Array.isArray);
  if (lists.length === 0) {
    errors.push(`${file}: exports no question array`);
    continue;
  }
  for (const list of lists) {
    for (const q of list) {
      total += 1;
      checkQuestion(q, file, seenIds);
    }
  }
}

for (const message of warnings) console.warn(`  warn  ${message}`);
for (const message of errors) console.error(`  ERROR ${message}`);
if (errors.length > 0) {
  console.error(`\n✗ quant bank: ${errors.length} error(s), ${warnings.length} warning(s) across ${total} questions`);
  process.exit(1);
}
console.log(`✓ quant bank: ${total} questions valid (${warnings.length} warning(s))`);
