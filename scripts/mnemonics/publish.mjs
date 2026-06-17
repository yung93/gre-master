// Publishes the generated hero icons into public/mnemonics/ (so Next serves
// them) and writes data/mnemonics.json: a { id -> "/mnemonics/<file>" } map the
// writing page imports. Re-run after generating or re-rolling icons.
// Run: node scripts/mnemonics/publish.mjs
import { readdirSync, mkdirSync, copyFileSync, writeFileSync, rmSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const iconsDir = path.join(root, "docs", "essay-mnemonics", "icons");
const outDir = path.join(root, "public", "mnemonics");

if (existsSync(outDir)) rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

const map = {};
for (const f of readdirSync(iconsDir).sort()) {
  const m = f.match(/^(w-issue-\d+)\.(svg|jpg|png|webp)$/);
  if (!m) continue;
  copyFileSync(path.join(iconsDir, f), path.join(outDir, f));
  map[m[1]] = `/mnemonics/${f}`;
}

writeFileSync(path.join(root, "data", "mnemonics.json"), JSON.stringify(map, null, 2) + "\n");
console.log(`Published ${Object.keys(map).length} icons -> public/mnemonics/ and data/mnemonics.json`);
