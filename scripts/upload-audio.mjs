// One-off: upload pre-generated pronunciation clips to Firebase Cloud Storage.
//
// Usage:
//   GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json \
//     node scripts/upload-audio.mjs <localAudioDir>
//
// Uploads every <word>.m4a in <localAudioDir> to  audio/<word>.m4a  in the
// project's default Storage bucket, with a long cache header and public read.
// Re-running skips files already present (idempotent).

import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import admin from "firebase-admin";

const BUCKET = "gre-master-a2ec8.firebasestorage.app";
const localDir = process.argv[2];
if (!localDir) {
  console.error("Usage: node scripts/upload-audio.mjs <localAudioDir>");
  process.exit(1);
}

admin.initializeApp({ storageBucket: BUCKET });
const bucket = admin.storage().bucket();

const files = (await readdir(localDir)).filter((f) => f.endsWith(".m4a"));
console.log(`found ${files.length} clips to upload to gs://${BUCKET}/audio/`);

let uploaded = 0;
let skipped = 0;
const concurrency = 16;

async function uploadOne(name) {
  const dest = `audio/${name}`;
  const file = bucket.file(dest);
  const [exists] = await file.exists();
  if (exists) {
    skipped += 1;
    return;
  }
  const body = await readFile(join(localDir, name));
  await file.save(body, {
    resumable: false,
    contentType: "audio/mp4",
    metadata: { cacheControl: "public, max-age=31536000, immutable" },
  });
  uploaded += 1;
  if ((uploaded + skipped) % 100 === 0) {
    console.log(`progress: ${uploaded + skipped}/${files.length}`);
  }
}

// simple concurrency pool
const queue = [...files];
async function worker() {
  while (queue.length) {
    const name = queue.shift();
    if (name) await uploadOne(name);
  }
}
await Promise.all(Array.from({ length: concurrency }, worker));

console.log(`done. uploaded ${uploaded}, skipped ${skipped} (already present).`);
process.exit(0);
