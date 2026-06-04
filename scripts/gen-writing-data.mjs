// Generates lightweight, bundle-friendly artifacts from the authoring source of
// truth (data/writing.ts):
//   - public/essays/<id>.json      one sample essay per prompt (lazy-fetched)
//   - data/writing-index.json      prompt metadata WITHOUT sample bodies
//   - data/writing-words.json      vocab grouped by category + signposts
// Run via `npm run gen` (also wired to predev/prebuild). Keep the outputs
// committed so the app builds without a manual generation step.
import { WRITING_PROMPTS } from "../data/writing.ts";
import { mkdirSync, writeFileSync, rmSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const essaysDir = path.join(root, "public", "essays");

// Fresh essays dir so removed samples leave no orphan files behind.
if (existsSync(essaysDir)) rmSync(essaysDir, { recursive: true, force: true });
mkdirSync(essaysDir, { recursive: true });

const prompts = [];
let sampleCount = 0;
for (const p of WRITING_PROMPTS) {
  const hasSample = !!p.sample;
  prompts.push({
    id: p.id,
    type: p.type,
    category: p.category,
    prompt: p.prompt,
    directions: p.directions,
    hasSample,
  });
  if (hasSample) {
    sampleCount += 1;
    writeFileSync(path.join(essaysDir, `${p.id}.json`), JSON.stringify(p.sample));
  }
}

// Harvest vocab grouped by category + de-duplicated signposts.
const byCat = new Map();
const moveSet = new Set();
let wordCount = 0;
for (const p of WRITING_PROMPTS) {
  if (!p.sample) continue;
  for (const sec of p.sample.sections) {
    for (const s of sec.sentences) {
      for (const v of s.vocab ?? []) {
        const list = byCat.get(p.category) ?? [];
        if (!list.some((w) => w.term.toLowerCase() === v.term.toLowerCase())) {
          list.push({ term: v.term, gloss: v.gloss, example: s.text });
          wordCount += 1;
        }
        byCat.set(p.category, list);
      }
      for (const m of s.moves ?? []) moveSet.add(m);
    }
  }
}
const groups = [...byCat.entries()]
  .map(([category, words]) => ({ category, words }))
  .sort((a, b) => a.category.localeCompare(b.category));
const moves = [...moveSet].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

writeFileSync(
  path.join(root, "data", "writing-index.json"),
  JSON.stringify({ total: prompts.length, sampleCount, prompts }, null, 0) + "\n",
);
writeFileSync(
  path.join(root, "data", "writing-words.json"),
  JSON.stringify({ total: wordCount, groups, moves }, null, 0) + "\n",
);

console.log(`gen-writing-data: ${prompts.length} prompts, ${sampleCount} essays, ${wordCount} words, ${moves.length} signposts`);
