# Pronunciation Feature — Engineering Report

_A retrospective on how word-pronunciation audio was built for GRE Master:
the approaches tried, the problems hit, the solutions shipped, and the lessons
learned._

---

## 1. Goal & constraints

**Goal:** every vocabulary word (~1,507 of them) should play a clear US
pronunciation, instantly, on click or keyboard shortcut.

**Constraints that shaped the design:**

- **100% coverage required** — a half-covered feature feels broken.
- **No runtime TTS dependency** — playback must not depend on a flaky
  third-party API at the moment of the click.
- **Audio must not be committed to the git repo** (explicit decision).
- **Static-export app on Firebase Hosting** — no server at runtime.
- **Free / near-zero cost.**

---

## 2. Strategies tried (and why most failed)

The feature went through two distinct phases: first getting audio to play
*at all* with full coverage, then making it play *fast*.

### Phase A — Getting a reliable source (coverage)

| # | Strategy | Outcome | Why |
|---|----------|---------|-----|
| 1 | Browser **`SpeechSynthesis`** (Web Speech API) | ❌ Failed | Silent on the target device; voice availability is inconsistent across OS/browser. |
| 2 | **Google Translate TTS** endpoint | ❌ Failed | 404s browser requests; referer-gated, not a public API. |
| 3 | **Free Dictionary API** (`api.dictionaryapi.dev`) recordings | ⚠️ Insufficient | Only ~half the words have a recording. Fails the 100%-coverage bar. |
| 4 | **Commit pre-generated audio to the repo** | ❌ Declined | Bloats the repo with ~1,500 binaries. |
| 5 | **Pre-generate every clip + host on Firebase Cloud Storage** | ✅ Shipped | macOS `say` (Samantha voice) → AAC/`.m4a`, uploaded to Storage, served via its public-read download URL. 100% coverage, no runtime TTS. |

Strategy 5 became the baseline: `scripts/generate-audio.sh` (macOS `say` +
`afconvert`) produces a clip per word, `scripts/upload-audio.mjs` pushes them to
`gs://<bucket>/audio/<word>.m4a`, and `SpeakButton.tsx` played the
`firebasestorage.googleapis.com/...?alt=media` URL.

The Free Dictionary API was **kept as a fallback** for any word missing a clip.

### Phase B — Making it fast (latency)

Audio worked, but **playback felt laggy** — a noticeable wait between the click
and the sound. This phase fixed that.

| # | Strategy | Outcome | Why |
|---|----------|---------|-----|
| 6 | **Prefetch-on-mount** (prime the `<audio>` element when the card renders, instead of fetching only on click) | ➖ Helped, not enough | Only hides latency when there's a gap between render and click. A fast click still waited. |
| 7 | **Direct Google Cloud Storage URL** (`storage.googleapis.com/...`) to skip the slow Firebase download API | ❌ Failed | Returned **403**. The clips are public via Firebase *Storage rules*, not via GCS *IAM* — so the direct GCS/CDN URL is forbidden. |
| 8 | **`fetch()` cache-warming** of the clip | ❌ Blocked | The Storage endpoint sends no `Access-Control-Allow-Origin`, so a CORS-mode fetch is rejected. |
| 9 | **Serve clips from Firebase Hosting (CDN)** at same-origin `/audio/<word>.m4a` | ✅ Shipped | Hosting *is* a global CDN. Same-origin, edge-cached, `immutable`. First-fetch TTFB dropped ~1,000×. |
| 10 | **Web Audio API** (decode into an `AudioBuffer` ahead of time, play a `BufferSource` on click) | ✅ Shipped | Removes `HTMLAudioElement`'s first-play pipeline/decode latency. Truly instant. |

---

## 3. Problems met & solutions

### Problem 1 — Audio only fetched on click
`SpeakButton` constructed `new Audio(url)` and called `.play()` only inside the
click handler, so the whole network round-trip happened *after* the click.
`preload="auto"` did nothing because the element didn't exist until then.

**Solution:** prime the audio on render (Strategy 6). Necessary but not
sufficient on its own.

### Problem 2 — The Storage download API is just slow (the real bottleneck)
Measured with `curl`:

```
firebasestorage.googleapis.com/...  →  TTFB ~0.9–1.4s  (for a 7.6 KB file)
```

Almost all of it was **latency, not transfer**. Root cause from the response
headers: `x-goog-storage-class: REGIONAL` and **no CDN** in front. The
`immutable` cache header meant *repeat* plays were cached client-side, but the
**first** play of every word hit the regional origin cold.

**Solution:** serve the clips from **Firebase Hosting's CDN** instead
(Strategy 9). The clips live in `public/audio/` (gitignored), so they ride the
deploy bundle and serve same-origin from `/audio/<word>.m4a`, edge-cached with a
long `immutable` header (`firebase.json`). Storage remains the source of truth
and a fallback.

| Source | First-play TTFB |
|--------|-----------------|
| Storage download API | ~900–1,400 ms |
| Hosting CDN (local dev disk) | **~1.6 ms** |
| Hosting CDN (production, `x-cache: HIT`) | tens of ms |

Because the clips are gitignored, `scripts/download-audio.mjs` repopulates
`public/audio/` from the public Storage URLs (no credentials, no macOS,
idempotent).

### Problem 3 — Still a small delay on an *immediate* click
Even with bytes served in ~1.6 ms, clicking the instant a card appeared still
had a perceptible lag. Cause: **`HTMLAudioElement` pays ~100–250 ms on its
*first* `play()`** to spin up the media pipeline and decode the AAC — even when
the bytes are already local. Replays were instant; the first one wasn't.

**Solution:** the **Web Audio API** (Strategy 10). On render, the clip is
decoded into an `AudioBuffer` ahead of time (`decodeWord`); on click, a
`BufferSource` plays it with **zero** decode/pipeline latency (`playWord`).
`/verbal` decodes the whole 10-word learning batch ahead of time, so every card
in rotation is instant regardless of which one comes up next.

### Problem 4 — Auto-deploy would silently ship *without* the clips
`public/audio/` is gitignored. The GitHub Actions deploy workflow does a clean
checkout + `npm run build`, so the clips weren't present and the CDN `/audio/`
paths would 404 (silently degrading to the slow Storage fallback).

**Solution:** add a **"Fetch pronunciation clips"** step to
`.github/workflows/firebase-deploy.yml` that runs `download-audio.mjs` before
the build, cached by the vocab-file hash (only re-downloads when the word list
changes), with a 3× per-clip retry so a transient blip doesn't fail the deploy.

---

## 4. Final architecture

```
Source of truth:   macOS "Samantha" voice  →  AAC .m4a clips
                                              │
                   ┌──────────────────────────┴───────────────────────────┐
                   ▼                                                        ▼
        Firebase Cloud Storage                                  public/audio/ (gitignored)
        gs://…/audio/<word>.m4a                                 → ships in Hosting deploy
        (fallback / source of truth)                            → served from CDN: /audio/<word>.m4a
                                                                  (immutable, edge-cached)

Playback (SpeakButton.tsx, single word):
   on render →  decodeWord(word)            // Web Audio: fetch + decode ahead
   on click  →  playWord(word)              // BufferSource.start() — instant
                   │ (if unavailable)
                   ▼
                HTMLAudio(/audio/…)  →  HTMLAudio(Storage URL)  →  dictionary recording
```

**Playback fallback chain (single word):**
`Web Audio (/audio CDN)` → `HTMLAudio (/audio)` → `HTMLAudio (Storage URL)` →
`Free Dictionary recording`.

**Batch prefetch:** `/verbal` calls `prefetchAudio(batchWords)` to decode the
current 10-word batch ahead of time.

### Key files

| File | Role |
|------|------|
| `components/SpeakButton.tsx` | The button. Web Audio for single words, fallback chain, keyboard shortcut. |
| `lib/audio.ts` | URL helpers, Web Audio decode/play (`decodeWord`, `playWord`), `prefetchAudio`. |
| `scripts/generate-audio.sh` | macOS: generate clips for new words. |
| `scripts/upload-audio.mjs` | Upload clips to Cloud Storage (source of truth). |
| `scripts/download-audio.mjs` | Populate `public/audio/` from public Storage URLs (no creds). |
| `firebase.json` | `immutable` cache header for `/audio/**`. |
| `.github/workflows/firebase-deploy.yml` | Auto-deploy; fetches clips before build. |
| `docs/MAINTENANCE.md` | Operational runbook for adding words / regenerating audio. |

---

## 5. Cost

Stays inside Firebase's free tier:

- **Storage:** ~1,507 × ~7.6 KB ≈ **11.5 MB** (free tier: 10 GB).
- **Transfer:** 360 MB/day free ≈ ~47,000 clip plays/day before any charge;
  `immutable` caching means a re-played word costs **zero** transfer.
- Firebase Hosting's CDN is included at no separate charge.

---

## 6. Lessons learned

1. **Measure the network before optimizing the code.** The real bottleneck was
   infrastructure (a regional bucket with no CDN, ~1 s TTFB), not the React
   component. A 5-minute `curl -w` of TTFB pointed straight at it; without that,
   we'd have kept tuning client code that wasn't the problem.

2. **Prefetching hides latency, it doesn't remove it.** Priming on render only
   helps when there's lead time before the interaction. It's a complement to a
   fast origin, not a substitute.

3. **"Public" in Firebase Storage rules ≠ public in GCS IAM.** Objects readable
   via the `firebasestorage` download URL can still **403** on the direct
   `storage.googleapis.com` URL. Don't assume the faster URL is accessible.

4. **Firebase Hosting is a CDN — use it for static media.** Moving files into
   the Hosting deploy turned a ~1 s regional fetch into an edge-cached,
   same-origin, tens-of-ms fetch, for free. Same-origin also sidesteps the CORS
   wall that blocked cache-warming.

5. **`HTMLAudioElement` has first-play latency even with local bytes.** For
   instant, repeatable playback of short clips, the **Web Audio API**
   (pre-decoded `AudioBuffer` + `BufferSource`) is the right tool. Decode ahead;
   create the `AudioContext` early (suspended) and `resume()` it on the first
   user gesture to satisfy autoplay policy.

6. **Gitignored build inputs must be reconstructed in CI.** The most dangerous
   bug was the *silent* one: auto-deploy would have shipped a degraded
   experience (CDN 404 → slow fallback) with a green checkmark. If the build
   needs an asset that isn't in the repo, the pipeline must regenerate it —
   and you should verify the deployed artifact, not just the build status.

7. **Always keep a graceful fallback chain.** A missing clip degrades (Storage,
   then dictionary, then a silent/greyed button) instead of breaking. This made
   every migration safe to ship incrementally.

8. **Verify in production, not just locally.** The fix only counted once
   `curl https://…web.app/audio/<word>.m4a` returned `200` with `x-cache: HIT`
   and the `immutable` header — proof the CDN path was actually live.

---

## 7. Status

✅ Shipped and verified in production. All 1,507 words play instantly from the
Hosting CDN via Web Audio, with a Storage → dictionary fallback chain, deployed
automatically on push to `main`.

### Known residual / cleanup opportunity

The **Free Dictionary API** code (`fetchPronunciationUrl`, the phrase branch)
is now effectively **dead**: `SpeakButton` only ever receives single words, and
all 1,507 have clips on both the CDN and Storage, so the dictionary fallback is
unreachable in practice. It can be removed (~50 lines) to simplify the
component — the only thing it still buys is a recording for a brand-new word
before its clip has been generated.
