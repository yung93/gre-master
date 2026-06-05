"use client";

import { useEffect } from "react";
import type { SrsGrade } from "@/lib/types";

interface SrsControlsProps {
  onGrade: (grade: SrsGrade) => void;
  disabled?: boolean;
  shown?: boolean;
}

const GRADES: { grade: SrsGrade; label: string; key: string; tone: string }[] = [
  { grade: "again", label: "Again", key: "1", tone: "bg-[oklch(95%_0.04_25)] text-[oklch(35%_0.15_25)] border-[oklch(80%_0.06_25)]" },
  { grade: "hard",  label: "Hard",  key: "2", tone: "bg-[oklch(96%_0.04_60)] text-[oklch(35%_0.10_60)] border-[oklch(82%_0.05_60)]" },
  { grade: "good",  label: "Good",  key: "3", tone: "bg-[oklch(96%_0.04_195)] text-[oklch(32%_0.10_195)] border-[oklch(82%_0.05_195)]" },
  { grade: "easy",  label: "Easy",  key: "4", tone: "bg-[oklch(96%_0.05_155)] text-[oklch(32%_0.13_155)] border-[oklch(82%_0.07_155)]" },
];

export default function SrsControls({ onGrade, disabled, shown = true }: SrsControlsProps) {
  useEffect(() => {
    if (!shown || disabled) return;
    function onKey(event: KeyboardEvent) {
      if (event.target instanceof HTMLElement) {
        const tag = event.target.tagName;
        if (tag === "INPUT" || tag === "TEXTAREA") return;
      }
      const match = GRADES.find((g) => g.key === event.key);
      if (match) {
        event.preventDefault();
        onGrade(match.grade);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [shown, disabled, onGrade]);

  if (!shown) return null;

  return (
    <div className="grid grid-cols-4 gap-2 mt-4">
      {GRADES.map((g) => (
        <button
          key={g.grade}
          type="button"
          onClick={() => onGrade(g.grade)}
          disabled={disabled}
          className={`btn ${g.tone} border flex-col gap-0 py-3`}
        >
          <span className="text-sm font-medium">{g.label}</span>
          <span className="hidden sm:block text-[10px] mono opacity-60">{g.key}</span>
        </button>
      ))}
    </div>
  );
}
