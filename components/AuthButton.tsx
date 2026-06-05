"use client";

import { useState } from "react";
import { useAuth } from "@/lib/auth";
import { useCloudSync } from "@/lib/cloud-sync";

export default function AuthButton() {
  const { user, loading, signIn, signOut, error } = useAuth();
  const { status, lastSyncedAt } = useCloudSync();
  const [menuOpen, setMenuOpen] = useState(false);

  if (loading) {
    return <span className="mono text-xs text-[var(--color-ink-faint)]">…</span>;
  }

  if (!user) {
    return (
      <div className="flex flex-col items-end gap-1">
        <button onClick={signIn} className="btn btn-secondary text-xs" title="Sign in to sync">
          <GoogleMark />
          <span className="hidden sm:inline">Sign in to sync</span>
          <span className="sm:hidden">Sync</span>
        </button>
        {error && (
          <span className="mono text-[10px] text-[var(--color-danger)] max-w-[16rem] text-right leading-tight">
            {error}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setMenuOpen((v) => !v)}
        className="block rounded-full transition-transform hover:scale-105"
        aria-haspopup="menu"
        aria-expanded={menuOpen}
        title={`Cloud sync: ${syncTitle(status)}`}
      >
        <span
          className={`block rounded-full p-[2px] ${syncRing(status)}`}
        >
          {user.photoURL ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={user.photoURL}
              alt={user.displayName ?? "Account"}
              width={32}
              height={32}
              referrerPolicy="no-referrer"
              className="w-8 h-8 rounded-full object-cover block bg-[var(--color-bg-elevated)]"
            />
          ) : (
            <span className="w-8 h-8 rounded-full bg-[var(--color-accent)] text-white text-sm flex items-center justify-center">
              {(user.displayName ?? user.email ?? "?").slice(0, 1).toUpperCase()}
            </span>
          )}
        </span>
      </button>

      {menuOpen && (
        <>
          <div className="fixed inset-0 z-30" onClick={() => setMenuOpen(false)} aria-hidden />
          <div
            role="menu"
            className="absolute right-0 top-full mt-2 z-40 min-w-[16rem] surface p-4 text-sm shadow-[var(--shadow-lift)]"
          >
            <p className="serif text-base leading-snug">{user.displayName ?? user.email ?? "Signed in"}</p>
            {user.email && user.email !== user.displayName && (
              <p className="text-xs text-[var(--color-ink-muted)] mt-0.5">{user.email}</p>
            )}
            <div className="mt-3 pt-3 border-t border-[var(--color-rule)] space-y-2">
              <div className="flex items-baseline justify-between">
                <span className="eyebrow">Cloud sync</span>
                <SyncLabel status={status} />
              </div>
              {lastSyncedAt && (
                <p className="mono text-[10px] text-[var(--color-ink-faint)]">
                  last synced {formatRelative(lastSyncedAt)}
                </p>
              )}
            </div>
            <button
              onClick={() => {
                setMenuOpen(false);
                void signOut();
              }}
              className="btn btn-ghost w-full mt-4 text-xs justify-start"
            >
              Sign out
            </button>
          </div>
        </>
      )}
    </div>
  );
}

function syncRing(status: ReturnType<typeof useCloudSync>["status"]): string {
  switch (status) {
    case "ready":
      return "bg-[var(--color-success)]";
    case "syncing":
    case "loading":
      return "bg-[var(--color-warm)] animate-pulse";
    case "error":
      return "bg-[var(--color-danger)]";
    default:
      return "bg-[var(--color-rule-strong)]";
  }
}

function syncTitle(status: ReturnType<typeof useCloudSync>["status"]): string {
  switch (status) {
    case "ready":
      return "synced";
    case "syncing":
      return "syncing…";
    case "loading":
      return "loading…";
    case "error":
      return "error";
    default:
      return "idle";
  }
}

function SyncLabel({ status }: { status: ReturnType<typeof useCloudSync>["status"] }) {
  const label =
    status === "ready"
      ? "synced"
      : status === "syncing"
        ? "syncing…"
        : status === "loading"
          ? "loading…"
          : status === "error"
            ? "error"
            : "idle";
  return <span className="mono text-xs text-[var(--color-ink-muted)]">{label}</span>;
}

function formatRelative(ts: number): string {
  const seconds = Math.max(0, Math.floor((Date.now() - ts) / 1000));
  if (seconds < 5) return "just now";
  if (seconds < 60) return `${seconds}s ago`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  return `${hours}h ago`;
}

function GoogleMark() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden>
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.25 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.1A6.6 6.6 0 0 1 5.5 12c0-.73.13-1.44.34-2.1V7.07H2.18a11 11 0 0 0 0 9.86l3.66-2.83z"
        fill="#FBBC04"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.07L5.84 9.9C6.71 7.31 9.14 5.38 12 5.38z"
        fill="#EA4335"
      />
    </svg>
  );
}
