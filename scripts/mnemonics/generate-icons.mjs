// Generates one hero icon per essay via the fal.ai REST API (flux/schnell),
// downloading into docs/essay-mnemonics/icons/<id>.jpg. Skips essays that
// already have an icon. Reads prompts from icon-prompts.json.
// Usage: node scripts/mnemonics/generate-icons.mjs [fromN] [toN]
//   e.g. node scripts/mnemonics/generate-icons.mjs 7 12
import { readFileSync, writeFileSync, existsSync, readdirSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const KEY = process.env.FAL_KEY;
if (!KEY) throw new Error("FAL_KEY not set");

const dir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..", "docs", "essay-mnemonics");
const iconsDir = path.join(dir, "icons");
const prompts = JSON.parse(readFileSync(path.join(dir, "icon-prompts.json"), "utf8"));

const from = Number(process.argv[2] || 1);
const to = Number(process.argv[3] || 140);
const num = (id) => Number(id.replace("w-issue-", ""));
const FORCE = process.env.FORCE === "1";
const existing = new Set(
  FORCE
    ? []
    : (existsSync(iconsDir) ? readdirSync(iconsDir) : [])
        .filter((f) => /^w-issue-\d+\./.test(f))
        .map((f) => f.split(".")[0]),
);

const MODEL = process.env.MODEL || "fal-ai/flux/schnell";
const ENDPOINT = `https://fal.run/${MODEL}`;
const CONCURRENCY = 5;
const isRecraft = MODEL.includes("recraft");

async function genOne(item) {
  const body = isRecraft
    ? { prompt: item.prompt, image_size: "square_hd", style: "vector_illustration" }
    : { prompt: item.prompt, image_size: "square", num_inference_steps: 4 };
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { Authorization: `Key ${KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`fal ${res.status}: ${(await res.text()).slice(0, 200)}`);
  const json = await res.json();
  const url = json?.images?.[0]?.url;
  if (!url) throw new Error(`no image url for ${item.id}`);
  const img = await fetch(url);
  const buf = Buffer.from(await img.arrayBuffer());
  const head = buf.subarray(0, 16);
  const ext =
    head[0] === 0x3c // "<"  -> SVG / XML
      ? "svg"
      : head[0] === 0x89 && head[1] === 0x50 // PNG
        ? "png"
        : head.subarray(8, 12).toString() === "WEBP"
          ? "webp"
          : "jpg";
  // Clear any prior icon for this id so we never end up with two extensions.
  for (const f of existsSync(iconsDir) ? readdirSync(iconsDir) : []) {
    if (f.startsWith(item.id + ".")) rmSync(path.join(iconsDir, f));
  }
  writeFileSync(path.join(iconsDir, `${item.id}.${ext}`), buf);
  return item.id;
}

const todo = prompts.filter(
  (p) => num(p.id) >= from && num(p.id) <= to && !existing.has(p.id),
);
console.log(`Generating ${todo.length} icons (range ${from}-${to}, skipping ${existing.size} existing)`);

let done = 0;
const failures = [];
async function worker(queue) {
  while (queue.length) {
    const item = queue.shift();
    try {
      await genOne(item);
      done += 1;
      if (done % 5 === 0 || done === todo.length) console.log(`  ${done}/${todo.length}`);
    } catch (e) {
      failures.push({ id: item.id, error: String(e.message || e) });
      console.error(`  FAIL ${item.id}: ${e.message || e}`);
    }
  }
}

const queue = [...todo];
await Promise.all(Array.from({ length: CONCURRENCY }, () => worker(queue)));

if (failures.length) {
  writeFileSync(path.join(dir, "icon-failures.json"), JSON.stringify(failures, null, 2));
  console.log(`Done with ${failures.length} failures -> icon-failures.json`);
} else {
  console.log("All requested icons generated.");
}
