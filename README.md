# GRE Master

A private GRE study workbench. Spaced-repetition vocabulary, quant drills with bilingual explanations, an Analytical Writing prompt library with annotated samples, and a full-length timed mock test — all running entirely in the browser with no backend.

## Stack

- Next.js 16 (App Router, static export)
- TypeScript + Tailwind CSS v4
- SM-2 spaced repetition, persisted to `localStorage`
- US English pronunciation via the public Free Dictionary API (recorded audio)

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # static export to ./out
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds a static export and publishes it to GitHub Pages. The site is available at:

```
https://<your-user>.github.io/<repo-name>/
```

Enable it on first deploy in **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Adding content

All seed content lives in `data/`:

- `data/vocab.ts` — vocabulary entries (word, part of speech, Traditional Chinese gloss, English gloss, example sentence, synonyms)
- `data/quant.ts` — quantitative problems (bilingual explanations)
- `data/writing.ts` — Issue and Argument prompts, plus optional annotated sample essays
- `data/mock.ts` — full-length mock tests (sectioned and timed)

Adding to any of these arrays automatically surfaces in the corresponding learning surface.
