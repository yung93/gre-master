// Re-generates only the icons listed in icon-failures.json (e.g. after a fal
// balance top-up). Deletes their stale icons first, then regenerates via the
// normal generator so only the missing ones are produced.
// Run: MODEL="fal-ai/recraft/v3/text-to-image" node scripts/mnemonics/retry-failures.mjs
import { readFileSync, existsSync, readdirSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";
import path from "node:path";

const here = path.dirname(fileURLToPath(import.meta.url));
const dir = path.resolve(here, "..", "..", "docs", "essay-mnemonics");
const failPath = path.join(dir, "icon-failures.json");
if (!existsSync(failPath)) {
  console.log("No icon-failures.json — nothing to retry.");
  process.exit(0);
}
const fails = JSON.parse(readFileSync(failPath, "utf8")).map((f) => f.id);
const iconsDir = path.join(dir, "icons");
for (const id of fails) {
  for (const f of readdirSync(iconsDir)) {
    if (f.startsWith(id + ".")) rmSync(path.join(iconsDir, f));
  }
}
console.log(`Cleared ${fails.length} stale icons; regenerating the now-missing ones...`);
rmSync(failPath); // fresh failure log on the retry run
execFileSync(
  "node",
  ["--experimental-strip-types", path.join(here, "generate-icons.mjs"), "1", "140"],
  { stdio: "inherit", env: process.env },
);
