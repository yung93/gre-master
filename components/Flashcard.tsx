"use client";

import { useEffect, useState } from "react";

interface FlashcardProps {
  cardKey: string;
  front: React.ReactNode;
  back: React.ReactNode;
  footerFront?: React.ReactNode;
  footerBack?: React.ReactNode;
}

export default function Flashcard({ cardKey, front, back, footerFront, footerBack }: FlashcardProps) {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    setFlipped(false);
  }, [cardKey]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.target instanceof HTMLElement) {
        const tag = event.target.tagName;
        if (tag === "INPUT" || tag === "TEXTAREA") return;
      }
      if (event.key === " " || event.key.toLowerCase() === "f") {
        event.preventDefault();
        setFlipped((prev) => !prev);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget) return;
    if (event.key === "Enter") {
      event.preventDefault();
      setFlipped((prev) => !prev);
    }
  }

  return (
    <div className="relative">
      <div
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label={flipped ? "Show front of card" : "Show back of card"}
        onClick={(event) => {
          if (event.target !== event.currentTarget && (event.target as HTMLElement).closest("button, a, input, textarea")) {
            return;
          }
          setFlipped((prev) => !prev);
        }}
        onKeyDown={handleKeyDown}
        className="block w-full text-left surface px-8 sm:px-12 py-10 sm:py-14 min-h-[22rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] transition-shadow hover:shadow-[var(--shadow-soft)] cursor-pointer"
      >
        <div key={`${cardKey}-${flipped ? "back" : "front"}`} className="anim-fade-up">
          {flipped ? back : front}
        </div>
      </div>

      <div className="flex items-center justify-between mt-3 text-xs text-[var(--color-ink-faint)]">
        <span>
          Press <kbd className="mono px-1.5 py-0.5 rounded bg-[var(--color-accent-soft)] text-[var(--color-ink)]">space</kbd> to flip
        </span>
        <div>{flipped ? footerBack : footerFront}</div>
      </div>
    </div>
  );
}
