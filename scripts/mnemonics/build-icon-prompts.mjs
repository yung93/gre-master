// Turns cards.json into one hero-icon prompt per essay. Single clear symbol,
// no text (the model is reliable at that); the card overlays real argument text.
// Run: node scripts/mnemonics/build-icon-prompts.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const dir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..", "docs", "essay-mnemonics");
const cards = JSON.parse(readFileSync(path.join(dir, "cards.json"), "utf8"));

const STYLE =
  "Minimalist flat vector illustration, two simple concrete objects side by side, bold clean shapes, limited warm color palette, plain off-white background, generous white space. CRITICAL: absolutely no text, no words, no letters, no numbers, no captions. Any sign, book, paper, screen, board or banner must be left completely blank with no writing on it.";

// Strip the boilerplate "For example, ... / Consider ..." openers so the model
// keys on the concrete imagery, not the connective.
const cleanEg = (s = "") =>
  s
    .replace(/^(for example,?|consider|imagine|take|a teacher who|when |if )/i, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 240);

const prompts = cards.map((c) => {
  const a = cleanEg(c.bodies[0]?.example || c.bodies[0]?.topic);
  const b = cleanEg(c.bodies[1]?.example || c.bodies[1]?.topic);
  return {
    id: c.id,
    prompt: `${STYLE} A single iconic picture contrasting two ideas. On the left, depict: ${a}. On the right, depict: ${b}. Draw only the key objects as simple flat icons, never any writing. Do NOT render the topic as text anywhere in the image.`,
  };
});

writeFileSync(path.join(dir, "icon-prompts.json"), JSON.stringify(prompts, null, 2));
console.log(`Wrote ${prompts.length} icon prompts -> docs/essay-mnemonics/icon-prompts.json`);
