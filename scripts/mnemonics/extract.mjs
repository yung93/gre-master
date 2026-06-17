// Extracts a compact "argument spine" for each issue essay so we can build
// memorizing cards: stance + the two body arguments with their examples.
// Run: node --experimental-strip-types scripts/mnemonics/extract.mjs
import { WRITING_PROMPTS } from "../../data/writing.ts";
import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const outDir = path.join(root, "docs", "essay-mnemonics");
mkdirSync(outDir, { recursive: true });

const pick = (sentences, test) => sentences.find((s) => test(s.fn || ""))?.text || "";

const cards = [];
for (const p of WRITING_PROMPTS) {
  if (!p.sample) continue;
  const sections = p.sample.sections || [];
  const intro = sections.find((s) => /intro/i.test(s.role));
  const bodies = sections.filter((s) => /^body/i.test(s.role));

  const thesis =
    pick(intro?.sentences || [], (fn) => /thesis/i.test(fn)) ||
    pick(intro?.sentences || [], (fn) => /position/i.test(fn));

  const bodyCards = bodies.slice(0, 2).map((b) => ({
    role: b.role,
    topic: pick(b.sentences, (fn) => /topic/i.test(fn)),
    example: pick(b.sentences, (fn) => /example/i.test(fn)),
  }));

  cards.push({
    id: p.id,
    category: p.category,
    prompt: p.prompt,
    thesis,
    bodies: bodyCards,
  });
}

writeFileSync(path.join(outDir, "cards.json"), JSON.stringify(cards, null, 2));
console.log(`Extracted ${cards.length} essay cards -> docs/essay-mnemonics/cards.json`);
console.log(JSON.stringify(cards.slice(0, 2), null, 2));
