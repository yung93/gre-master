"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface SpeakButtonProps {
  text: string;
  label?: string;
  shortcut?: string;
  size?: "sm" | "md";
}

type Status = "loading" | "ready" | "unavailable";

interface DictionaryPhonetic {
  audio?: string;
}
interface DictionaryEntry {
  phonetics?: DictionaryPhonetic[];
}

async function fetchPronunciationUrl(word: string): Promise<string | null> {
  const cacheKey = `gre-master/v1/audio/${word.toLowerCase()}`;
  if (typeof window !== "undefined") {
    const cached = window.sessionStorage.getItem(cacheKey);
    if (cached !== null) return cached || null;
  }
  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word.toLowerCase())}`,
    );
    if (!response.ok) {
      window.sessionStorage.setItem(cacheKey, "");
      return null;
    }
    const data = (await response.json()) as DictionaryEntry[];
    let chosen = "";
    for (const entry of data) {
      for (const phon of entry.phonetics ?? []) {
        if (phon.audio && /-us\.mp3$|us\.mp3$/i.test(phon.audio)) {
          chosen = phon.audio;
          break;
        }
      }
      if (chosen) break;
    }
    if (!chosen) {
      for (const entry of data) {
        for (const phon of entry.phonetics ?? []) {
          if (phon.audio) {
            chosen = phon.audio;
            break;
          }
        }
        if (chosen) break;
      }
    }
    if (chosen.startsWith("//")) chosen = `https:${chosen}`;
    window.sessionStorage.setItem(cacheKey, chosen);
    return chosen || null;
  } catch {
    return null;
  }
}

export default function SpeakButton({ text, label, shortcut, size = "sm" }: SpeakButtonProps) {
  const [status, setStatus] = useState<Status>("loading");
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setStatus("loading");
    setAudioUrl(null);
    const cleaned = text.trim();
    if (!cleaned) {
      setStatus("unavailable");
      return;
    }
    let cancelled = false;
    fetchPronunciationUrl(cleaned).then((url) => {
      if (cancelled) return;
      if (url) {
        setAudioUrl(url);
        setStatus("ready");
      } else {
        setStatus("unavailable");
      }
    });
    return () => {
      cancelled = true;
    };
  }, [text]);

  const play = useCallback(() => {
    if (!audioUrl) return;
    try {
      audioRef.current?.pause();
      const audio = new Audio(audioUrl);
      audio.preload = "auto";
      audio.crossOrigin = "anonymous";
      audioRef.current = audio;
      audio.onplay = () => setPlaying(true);
      audio.onended = () => setPlaying(false);
      audio.onerror = () => {
        setPlaying(false);
        setStatus("unavailable");
      };
      audio.play().catch(() => {
        setPlaying(false);
        setStatus("unavailable");
      });
    } catch {
      setStatus("unavailable");
    }
  }, [audioUrl]);

  useEffect(() => {
    if (!shortcut || status !== "ready") return;
    const key = shortcut.toLowerCase();
    function onKey(event: KeyboardEvent) {
      if (event.target instanceof HTMLElement) {
        const tag = event.target.tagName;
        if (tag === "INPUT" || tag === "TEXTAREA") return;
      }
      if (event.key.toLowerCase() === key) {
        event.preventDefault();
        play();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [shortcut, status, play]);

  const dimension = size === "md" ? "h-9 w-9" : "h-7 w-7";
  const iconSize = size === "md" ? 14 : 12;

  const disabled = status !== "ready";

  let tone =
    "bg-[var(--color-bg-elevated)] border-[var(--color-rule)] text-[var(--color-ink-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]";
  if (playing) tone = "bg-[var(--color-accent)] border-[var(--color-accent)] text-white";
  else if (status === "unavailable") tone = "bg-[var(--color-bg-elevated)] border-[var(--color-rule)] text-[var(--color-ink-faint)] opacity-50";
  else if (status === "loading") tone = "bg-[var(--color-bg-elevated)] border-[var(--color-rule)] text-[var(--color-ink-faint)]";

  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        if (!disabled) play();
      }}
      disabled={disabled}
      aria-label={
        label ??
        (status === "loading"
          ? "Loading pronunciation"
          : status === "unavailable"
            ? `No US pronunciation available for "${text}"`
            : `Play US pronunciation of "${text}"`)
      }
      title={
        status === "loading"
          ? "Loading pronunciation…"
          : status === "unavailable"
            ? "No US recording available"
            : shortcut
              ? `Play (press ${shortcut})`
              : "Play"
      }
      className={`inline-flex items-center justify-center rounded-full border transition-colors ${dimension} ${tone} disabled:cursor-not-allowed`}
    >
      {status === "loading" ? <Spinner size={iconSize} /> : <SpeakerIcon size={iconSize} active={playing} />}
    </button>
  );
}

function SpeakerIcon({ active, size }: { active: boolean; size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M3 6h2.5L8.5 3v10L5.5 10H3V6z" fill="currentColor" />
      <path
        d="M10.5 5.5c1 0.8 1 4.2 0 5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        opacity={active ? 1 : 0.7}
      />
      <path
        d="M12.5 4c1.7 1.5 1.7 6.5 0 8"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        opacity={active ? 1 : 0.4}
      />
    </svg>
  );
}

function Spinner({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden className="animate-spin">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
      <path d="M14 8a6 6 0 0 0-6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
