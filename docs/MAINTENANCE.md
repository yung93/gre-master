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

Audio is **not** in the repo and **not** in the deploy bundle. It is
pre-generated and stored in **Firebase Cloud Storage** under `audio/<word>.m4a`,
served publicly (read-only rule on the `audio/` path). `SpeakButton` plays
`https://firebasestorage.googleapis.com/v0/b/<bucket>/o/audio%2F<word>.m4a?alt=media`.

### Why this setup
- Browser `SpeechSynthesis` did not work on the target device.
- Google Translate TTS 404s browser requests (referer-gated).
- Recorded clips (Free Dictionary API) only cover ~half the words.
- So: pre-generate every clip once with the macOS **Samantha** voice, host on
  Storage, play as plain media. 100% coverage, no runtime TTS dependency.

### Regenerating audio after adding new words
Run on **macOS** (uses built-in `say` + `afconvert`):

```bash
# 1. Generate M4A clips for any words missing one (idempotent)
bash scripts/generate-audio.sh          # -> /tmp/gre-audio/out/<word>.m4a

# 2. Upload to Firebase Storage (skips files already uploaded)
GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json \
  node scripts/upload-audio.mjs /tmp/gre-audio/out
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
- New words show a silent (greyed) speaker button until their clip is uploaded.

## Mastery counts

`/verbal` and `/words` both use `isMastered()` from `lib/learn-queue.ts`
(`everMastered ?? graduated`). Don't reintroduce a raw `graduated` check for the
"Mastered" stat, or the two pages will diverge for words out on spaced revisit.
