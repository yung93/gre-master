// Builds an HTML study sheet from cards.json + generated hero icons.
// Each card: hero icon (visual hook) + stance + the two body arguments with
// their examples (guaranteed-correct overlaid text). Browse or print to PDF.
// Run: node scripts/mnemonics/compose.mjs
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const dir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..", "docs", "essay-mnemonics");
const cards = JSON.parse(readFileSync(path.join(dir, "cards.json"), "utf8"));

const iconsDir = path.join(dir, "icons");
const iconFiles = existsSync(iconsDir) ? readdirSync(iconsDir) : [];
const iconFor = (id) => {
  const f = iconFiles.find((n) => n.startsWith(id + "."));
  return f ? `icons/${f}` : "";
};

const esc = (s = "") =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const num = (id) => id.replace("w-issue-", "");

const cardHtml = (c) => {
  const icon = iconFor(c.id);
  const body = (b, label) =>
    b
      ? `<div class="body">
           <span class="tag">${label}</span>
           <p class="topic">${esc(b.topic)}</p>
           <p class="eg">${esc(b.example)}</p>
         </div>`
      : "";
  return `<article class="card">
    <div class="hook">
      ${icon ? `<img src="${esc(icon)}" alt="" loading="lazy">` : `<div class="ph">no&nbsp;icon</div>`}
      <span class="no">#${num(c.id)}</span>
    </div>
    <div class="text">
      <span class="cat">${esc(c.category)}</span>
      <h2>${esc(c.prompt)}</h2>
      <p class="stance">${esc(c.thesis)}</p>
      ${body(c.bodies[0], "First")}
      ${body(c.bodies[1], "Second")}
    </div>
  </article>`;
};

const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Issue Essay Mnemonics</title>
<style>
  :root{
    --ink:#1f2430; --muted:#6b7280; --line:#e7e3da; --bg:#faf8f3;
    --accent:#b4541e; --accent2:#2f6f4e; --card:#fff;
  }
  *{box-sizing:border-box}
  body{margin:0;background:var(--bg);color:var(--ink);
    font:16px/1.5 ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}
  header{padding:2.5rem 1.5rem 1rem;max-width:1100px;margin:0 auto}
  header h1{margin:0;font-size:1.9rem;letter-spacing:-.01em}
  header p{margin:.4rem 0 0;color:var(--muted)}
  main{max-width:1100px;margin:0 auto;padding:1rem 1.5rem 4rem;
    display:grid;gap:1.1rem}
  .card{display:grid;grid-template-columns:200px 1fr;background:var(--card);
    border:1px solid var(--line);border-radius:16px;overflow:hidden;
    box-shadow:0 1px 2px rgba(20,20,30,.04)}
  .hook{position:relative;background:#fff;border-right:1px solid var(--line);
    display:flex;align-items:center;justify-content:center;padding:.5rem}
  .hook img{width:100%;height:100%;object-fit:contain;aspect-ratio:1}
  .hook .ph{color:#bbb;font-size:.8rem}
  .hook .no{position:absolute;top:.5rem;left:.6rem;font-weight:700;
    font-size:.8rem;color:var(--muted)}
  .text{padding:1.1rem 1.3rem}
  .cat{display:inline-block;font-size:.7rem;font-weight:700;letter-spacing:.06em;
    text-transform:uppercase;color:var(--accent);margin-bottom:.35rem}
  .text h2{margin:.1rem 0 .5rem;font-size:1.08rem;line-height:1.35}
  .stance{margin:0 0 .8rem;font-weight:600;color:#384}
  .stance{color:var(--accent2)}
  .body{border-top:1px dashed var(--line);padding-top:.6rem;margin-top:.6rem}
  .tag{display:inline-block;font-size:.68rem;font-weight:700;letter-spacing:.05em;
    text-transform:uppercase;color:#fff;background:var(--ink);
    border-radius:999px;padding:.1rem .55rem;margin-bottom:.3rem}
  .topic{margin:.15rem 0 .25rem;font-weight:600}
  .eg{margin:0;color:var(--muted);font-size:.92rem}
  @media print{
    body{background:#fff}
    .card{break-inside:avoid;box-shadow:none}
    header{padding-top:1rem}
  }
  @media (max-width:640px){.card{grid-template-columns:1fr}
    .hook{border-right:0;border-bottom:1px solid var(--line);max-height:240px}}
</style></head>
<body>
<header>
  <h1>Issue Essay Mnemonics</h1>
  <p>${cards.length} essays &middot; one visual hook + the two arguments to recall. The picture jogs the memory; the text under it is the argument you reproduce.</p>
</header>
<main>
${cards.map(cardHtml).join("\n")}
</main>
</body></html>`;

writeFileSync(path.join(dir, "index.html"), html);
const have = cards.filter((c) => iconFor(c.id)).length;
console.log(`Wrote index.html (${cards.length} cards, ${have} with icons) -> docs/essay-mnemonics/index.html`);
