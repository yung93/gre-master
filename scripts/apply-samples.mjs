// Splices new `sample` objects into data/writing.ts by prompt id, preserving the
// file's hand-written formatting. Author essays in a chunk module that default-
// exports { "w-issue-NNN": <SampleEssay>, ... } and run:
//   node scripts/apply-samples.mjs data/_chunk.mjs
// Idempotent per id: each run re-finds and replaces the current sample block.
import { readFileSync, writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const tsPath = path.join(root, "data", "writing.ts");
const chunkPath = path.resolve(process.argv[2]);

const samples = (await import(pathToFileURL(chunkPath).href)).default;

const esc = (s) => String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"');

function emitSentence(s) {
  const parts = [`text: "${esc(s.text)}"`, `fn: "${esc(s.fn)}"`];
  if (s.vocab?.length)
    parts.push(
      "vocab: [" +
        s.vocab.map((v) => `{ term: "${esc(v.term)}", gloss: "${esc(v.gloss)}" }`).join(", ") +
        "]",
    );
  if (s.moves?.length)
    parts.push("moves: [" + s.moves.map((mv) => `"${esc(mv)}"`).join(", ") + "]");
  return `            { ${parts.join(", ")} },`;
}

function emitSample(o) {
  const L = ["sample: {", `      score: ${o.score},`, "      scoreNote:", `        "${esc(o.scoreNote)}",`, "      sections: ["];
  for (const sec of o.sections) {
    L.push("        {", `          role: "${esc(sec.role)}",`, "          sentences: [");
    for (const s of sec.sentences) L.push(emitSentence(s));
    L.push("          ],", "        },");
  }
  L.push("      ],", "    }");
  return L.join("\n");
}

// String-aware brace matcher: returns [startIdx, endIdx) covering `sample: {...}`.
function sampleRange(src, id) {
  const idIdx = src.indexOf(`id: "${id}"`);
  if (idIdx === -1) throw new Error(`id not found: ${id}`);
  const start = src.indexOf("sample: {", idIdx);
  if (start === -1) throw new Error(`sample not found for ${id}`);
  let i = src.indexOf("{", start);
  let depth = 0, inStr = false, q = "";
  for (; i < src.length; i++) {
    const c = src[i];
    if (inStr) {
      if (c === "\\") { i++; continue; }
      if (c === q) inStr = false;
      continue;
    }
    if (c === '"' || c === "'") { inStr = true; q = c; continue; }
    if (c === "{") depth++;
    else if (c === "}" && --depth === 0) return [start, i + 1];
  }
  throw new Error(`unbalanced braces for ${id}`);
}

let out = readFileSync(tsPath, "utf8");
let count = 0;
for (const [id, sample] of Object.entries(samples)) {
  const [start, end] = sampleRange(out, id);
  out = out.slice(0, start) + emitSample(sample) + out.slice(end);
  count++;
}
writeFileSync(tsPath, out, "utf8");
console.log(`applied ${count} samples`);
