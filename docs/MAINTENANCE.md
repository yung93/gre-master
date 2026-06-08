# Maintenance

Operational notes for GRE Master. (App architecture is in the code; this file
covers the non-obvious recurring tasks.)

## Hosting & deploy

- **Hosted on Firebase Hosting** at https://gre-master-a2ec8.web.app
- **Auto-deploy**: every push to `main` runs `.github/workflows/firebase-deploy.yml`,
  which builds the static export and deploys. Needs the `FIREBASE_SERVICE_ACCOUNT`
  GitHub secret (already set).
- **Manual deploy**: `npm run deploy` (builds + `firebase deploy`).
- Firebase project: `gre-master-a2ec8` (Blaze pay-as-you-go plan — needed for
  Cloud Storage; usage sits well within the free quota, ~$0/mo).

## Vocabulary data

- All words live in `data/vocab.ts` as a flat array of `VocabEntry`.
- Each entry needs: `id` (`v-<word>`), `word`, `partOfSpeech`, `meaningZh`
  (Traditional Chinese), `meaningEn`, `example`, `exampleZh`, optional
  `synonyms`, and a `memoryAid` (`roots` + `mnemonic`).
- The deck currently has ~1507 words. Adding entries to the array surfaces them
  automatically in the flashcards (`/verbal`), word list (`/words`), and
  learning queue.

## Pronunciation audio (the non-obvious part)

Audio is **not** in the repo (git-ignored), but it **is** in the deploy bundle.
Clips live in `public/audio/<word>.m4a` and are served from the **Firebase
Hosting CDN** at the same-origin path `/audio/<word>.m4a` (long `immutable`
cache header, see `firebase.json`). `SpeakButton` plays that URL; if a clip is
missing it falls back to the regional Storage bucket, then a dictionary
recording. The clips also still live in **Firebase Cloud Storage** (the source
of truth / fallback) under `audio/<word>.m4a`.

### Why this setup
- Browser `SpeechSynthesis` did not work on the target device.
- Google Translate TTS 404s browser requests (referer-gated).
- Recorded clips (Free Dictionary API) only cover ~half the words.
- So: pre-generate every clip once with the macOS **Samantha** voice. 100%
  coverage, no runtime TTS dependency.
- Originally served straight from the Storage **download API**, but that has
  ~1s TTFB (regional bucket, no CDN) on the first play of each word. Moving the
  clips into the Hosting deploy puts them behind Google's edge CDN → tens of ms.
  `lib/audio.ts` + `SpeakButton` prime the current word on render and
  `/verbal` warms the whole 10-word batch, so cards play instantly.

### Before each deploy: populate `public/audio/`
The clips are git-ignored, so a fresh checkout has none. Pull them from the
public Storage URLs (no credentials, no macOS needed; idempotent):

```bash
node scripts/download-audio.mjs        # -> public/audio/<word>.m4a
```

`npm run deploy` builds (`out/` copies `public/`) and ships the clips via
Hosting. Re-run the download whenever new words are added and uploaded.

### Regenerating audio after adding new words
Run on **macOS** (uses built-in `say` + `afconvert`), then re-upload to Storage
(the source of truth) so `download-audio.mjs` can pick the new clips up:

```bash
# 1. Generate M4A clips for any words missing one (idempotent)
bash scripts/generate-audio.sh          # -> /tmp/gre-audio/out/<word>.m4a

# 2. Upload to Firebase Storage (skips files already uploaded)
GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json \
  node scripts/upload-audio.mjs /tmp/gre-audio/out

# 3. Pull everything into public/audio/ for the deploy bundle
node scripts/download-audio.mjs
```

- The **service-account JSON** is a Firebase Admin key (Console → Project
  Settings → Service accounts → Generate new private key). Keep it OUT of the
  repo. It can read/write the whole project; revoke if leaked.
- Storage read rule (already published) — public read, no write:
  ```
  rules_version = '2';
  service firebase.storage {
    match /b/{bucket}/o {
      match /audio/{file} { allow read: if true; allow write: if false; }
    }
  }
  ```
- New words show a silent (greyed) speaker button until their clip is generated,
  uploaded, and pulled into `public/audio/`.

## Mastery counts

`/verbal` and `/words` both use `isMastered()` from `lib/learn-queue.ts`
(`everMastered ?? graduated`). Don't reintroduce a raw `graduated` check for the
"Mastered" stat, or the two pages will diverge for words out on spaced revisit.
