// Pronunciation clips are served same-origin from Firebase Hosting's global
// CDN at /audio/<word>.m4a (the files live in public/audio/, gitignored).
// The regional Storage bucket is kept as a fallback for any word whose clip
// is not yet in the deploy bundle (e.g. a freshly added word, or local dev
// before scripts/download-audio.mjs has populated public/audio/).
const STORAGE_BUCKET = "gre-master-a2ec8.firebasestorage.app";

/** Same-origin CDN URL for a single word's pre-generated clip. */
export function audioUrl(word: string): string {
  return `/audio/${word.toLowerCase()}.m4a`;
}

/** Slow regional Storage fallback, used only if the CDN clip is missing. */
export function storageFallbackUrl(word: string): string {
  const path = `audio/${word.toLowerCase()}.m4a`;
  return `https://firebasestorage.googleapis.com/v0/b/${STORAGE_BUCKET}/o/${encodeURIComponent(path)}?alt=media`;
}

// --- Web Audio layer ------------------------------------------------------
// HTMLAudioElement has a ~100-250ms pipeline+decode cost on its *first* play,
// even when the bytes are already local. Web Audio removes that: we decode the
// clip into an AudioBuffer ahead of time, then a BufferSource starts with zero
// latency. Only used for single words (same-origin, so no decode CORS issues).

let audioCtx: AudioContext | null = null;

function getCtx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    const Ctor =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) return null;
    audioCtx = new Ctor();
  }
  return audioCtx;
}

const buffers = new Map<string, AudioBuffer>();
const pending = new Map<string, Promise<AudioBuffer | null>>();

/** Fetch + decode a word's clip into an AudioBuffer (cached, deduped). */
export function decodeWord(word: string): Promise<AudioBuffer | null> {
  const key = word.trim().toLowerCase();
  if (!key || key.includes(" ")) return Promise.resolve(null);
  const cached = buffers.get(key);
  if (cached) return Promise.resolve(cached);
  const inflight = pending.get(key);
  if (inflight) return inflight;

  const ctx = getCtx();
  if (!ctx) return Promise.resolve(null);

  const task = (async () => {
    try {
      const res = await fetch(audioUrl(key));
      if (!res.ok) return null;
      const data = await res.arrayBuffer();
      const buffer = await ctx.decodeAudioData(data);
      buffers.set(key, buffer);
      return buffer;
    } catch {
      return null;
    } finally {
      pending.delete(key);
    }
  })();
  pending.set(key, task);
  return task;
}

interface PlayHandlers {
  onStart?: () => void;
  onEnd?: () => void;
}

/**
 * Play a word via Web Audio. Resolves to the source node (so the caller can
 * stop it) or null if Web Audio is unavailable or the clip can't be decoded —
 * in which case the caller should fall back to an HTMLAudioElement.
 */
export async function playWord(
  word: string,
  handlers: PlayHandlers = {},
): Promise<AudioBufferSourceNode | null> {
  const ctx = getCtx();
  if (!ctx) return null;
  const buffer = (await decodeWord(word)) ?? null;
  if (!buffer) return null;
  if (ctx.state === "suspended") {
    try {
      await ctx.resume();
    } catch {
      return null;
    }
  }
  const source = ctx.createBufferSource();
  source.buffer = buffer;
  source.connect(ctx.destination);
  source.onended = () => handlers.onEnd?.();
  source.start();
  handlers.onStart?.();
  return source;
}

/**
 * Decode a set of words ahead of time in the background, so the next card
 * plays instantly regardless of which one comes up. Missing clips fail
 * silently (the SpeakButton falls back at play time).
 */
export function prefetchAudio(words: readonly string[]): void {
  if (typeof window === "undefined") return;
  for (const word of words) {
    void decodeWord(word);
  }
}
