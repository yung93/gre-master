"use client";

import { useEffect, useState } from "react";

interface TimerProps {
  startedAt: number;
  durationSeconds: number;
  onExpire?: () => void;
  paused?: boolean;
  compact?: boolean;
}

function format(seconds: number): string {
  const safe = Math.max(0, Math.floor(seconds));
  const m = Math.floor(safe / 60);
  const s = safe % 60;
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

export default function Timer({ startedAt, durationSeconds, onExpire, paused, compact }: TimerProps) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, [paused]);

  const elapsed = (now - startedAt) / 1000;
  const remaining = durationSeconds - elapsed;
  const expired = remaining <= 0;

  useEffect(() => {
    if (expired && onExpire) onExpire();
  }, [expired, onExpire]);

  const warn = remaining <= 60;
  const half = remaining <= durationSeconds / 4 && !warn;

  return (
    <div
      role="timer"
      aria-live="off"
      className={`mono inline-flex items-center gap-2 ${
        compact ? "text-sm" : "text-base"
      } ${warn ? "text-[var(--color-danger)]" : half ? "text-[var(--color-warm)]" : "text-[var(--color-ink)]"}`}
    >
      <span aria-hidden className={`w-1.5 h-1.5 rounded-full ${
        warn ? "bg-[var(--color-danger)]" : half ? "bg-[var(--color-warm)]" : "bg-[var(--color-accent)]"
      }`} />
      <span className="tabular-nums">{format(remaining)}</span>
    </div>
  );
}
