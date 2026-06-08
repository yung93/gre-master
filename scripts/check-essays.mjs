// QA for simplified essays: flags em-dash/colon in prose and repeated sentence
// openers within a single essay. Usage: node scripts/check-essays.mjs [minN] [maxN]
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const { WRITING_PROMPTS } = await import(pathToFileURL(path.join(root, "data", "writing.ts")).href);

const minN = Number(process.argv[2] ?? 1);
const maxN = Number(process.argv[3] ?? 999);
let problems = 0;

for (const p of WRITING_PROMPTS) {
  const n = Number(p.id.split("-").pop());
  if (n < minN || n > maxN || !p.sample) continue;
  const sentences = p.sample.sections.flatMap((s) => s.sentences.map((x) => x.text));
  for (const t of sentences) {
    if (t.includes("—")) { console.log(`${p.id} EM-DASH: ${t}`); problems++; }
    if (/[A-Za-z] ?: /.test(t) || /:$/.test(t)) { console.log(`${p.id} COLON: ${t}`); problems++; }
  }
  const openers = sentences.map((t) => t.split(/\s+/).slice(0, 2).join(" ").toLowerCase());
  const seen = new Map();
  for (const o of openers) seen.set(o, (seen.get(o) ?? 0) + 1);
  for (const [o, c] of seen) if (c > 1) { console.log(`${p.id} REPEAT OPENER "${o}" x${c}`); problems++; }
  const words = sentences.join(" ").split(/\s+/).length;
  if (words < 330 || words > 460) console.log(`${p.id} LENGTH ${words} words`);
}
console.log(problems === 0 ? "OK: no punctuation/opener problems" : `${problems} problem(s)`);
