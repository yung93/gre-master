// Populate public/audio/ with the pre-generated pronunciation clips so they
// ship in the Firebase Hosting deploy and are served from its global CDN
// (fast, same-origin) instead of the slow regional Storage download API.
//
// Pulls each <word>.m4a from the public Storage URL — no credentials needed.
// Idempotent: skips clips already present. Run before deploy:
//
//   node scripts/download-audio.mjs
//
// public/audio/ is gitignored, so the clips never land in the repo.

import { mkdir, readFile, writeFile, access } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const BUCKET = "gre-master-a2ec8.firebasestorage.app";
const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT_DIR = join(ROOT, "public", "audio");

function storageUrl(word) {
  const path = encodeURIComponent(`audio/${word}.m4a`);
  return `https://firebasestorage.googleapis.com/v0/b/${BUCKET}/o/${path}?alt=media`;
}

async function exists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

// Same word extraction as scripts/generate-audio.sh.
const vocabSrc = await readFile(join(ROOT, "data", "vocab.ts"), "utf8");
const words = [...new Set([...vocabSrc.matchAll(/word: "([a-z]+)"/g)].map((m) => m[1]))].sort();

await mkdir(OUT_DIR, { recursive: true });
console.log(`populating ${OUT_DIR} with ${words.length} clips`);

let downloaded = 0;
let skipped = 0;
let failed = 0;
const concurrency = 16;

const MAX_ATTEMPTS = 3;

async function fetchOne(word) {
  const dest = join(OUT_DIR, `${word}.m4a`);
  if (await exists(dest)) {
    skipped += 1;
    return;
  }
  let lastErr;
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt += 1) {
    try {
      const res = await fetch(storageUrl(word));
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      await writeFile(dest, buf);
      downloaded += 1;
      lastErr = undefined;
      break;
    } catch (err) {
      lastErr = err;
      if (attempt < MAX_ATTEMPTS) await new Promise((r) => setTimeout(r, 300 * attempt));
    }
  }
  if (lastErr) {
    failed += 1;
    console.warn(`  ! ${word}: ${lastErr.message}`);
  }
  if ((downloaded + skipped + failed) % 100 === 0) {
    console.log(`  progress: ${downloaded + skipped + failed}/${words.length}`);
  }
}

const queue = [...words];
async function worker() {
  while (queue.length) {
    const word = queue.shift();
    if (word) await fetchOne(word);
  }
}
await Promise.all(Array.from({ length: concurrency }, worker));

console.log(`done. downloaded ${downloaded}, skipped ${skipped}, failed ${failed}.`);
if (failed > 0) process.exitCode = 1;
