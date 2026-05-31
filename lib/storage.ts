"use client";

import { useCallback, useEffect, useState } from "react";

const PREFIX = "gre-master/v1/";
const WRITE_EVENT = "gre-master:local-write";

export function readJson<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(PREFIX + key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function writeJson<T>(key: string, value: T): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(PREFIX + key, JSON.stringify(value));
    window.dispatchEvent(new CustomEvent(WRITE_EVENT, { detail: { key } }));
  } catch {
    /* quota exceeded — ignore silently for local app */
  }
}

export function removeKey(key: string): void {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(PREFIX + key);
  window.dispatchEvent(new CustomEvent(WRITE_EVENT, { detail: { key } }));
}

export function useLocalState<T>(
  key: string,
  initial: T,
): [T, (next: T | ((prev: T) => T)) => void] {
  const [state, setState] = useState<T>(initial);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setState(readJson<T>(key, initial));
    setHydrated(true);
  }, [key]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    function onWrite(event: Event) {
      const detail = (event as CustomEvent<{ key: string }>).detail;
      if (!detail || detail.key === key) {
        setState(readJson<T>(key, initial));
      }
    }
    window.addEventListener(WRITE_EVENT, onWrite);
    return () => window.removeEventListener(WRITE_EVENT, onWrite);
  }, [key]); // eslint-disable-line react-hooks/exhaustive-deps

  const update = useCallback(
    (next: T | ((prev: T) => T)) => {
      setState((prev) => {
        const value = typeof next === "function" ? (next as (p: T) => T)(prev) : next;
        writeJson(key, value);
        return value;
      });
    },
    [key],
  );

  useEffect(() => {
    if (hydrated) writeJson(key, state);
  }, [hydrated, key, state]);

  return [state, update];
}
