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

The app is hosted on **Firebase Hosting** at:

```
https://gre-master-a2ec8.web.app
```

Deploy is manual — build the static export and publish in one command:

```bash
npm run deploy
```

(Requires a one-time `npx firebase login` with the account that owns the
`gre-master-a2ec8` project.)

## Adding content

All seed content lives in `data/`:

- `data/vocab.ts` — vocabulary entries (word, part of speech, Traditional Chinese gloss, English gloss, example sentence, synonyms)
- `data/quant.ts` — quantitative problems (bilingual explanations)
- `data/writing.ts` — Issue and Argument prompts, plus optional annotated sample essays
- `data/mock.ts` — full-length mock tests (sectioned and timed)

Adding to any of these arrays automatically surfaces in the corresponding learning surface.
