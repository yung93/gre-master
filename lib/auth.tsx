"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import {
  getRedirectResult,
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect,
  signOut as fbSignOut,
  type User,
} from "firebase/auth";
import { getFirebaseAuth, googleProvider } from "./firebase";

interface AuthContextValue {
  user: User | null;
  loading: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
  error: string | null;
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  loading: true,
  signIn: async () => {},
  signOut: async () => {},
  error: null,
});

const POPUP_FALLBACK_CODES = new Set([
  "auth/popup-blocked",
  "auth/popup-closed-by-user",
  "auth/cancelled-popup-request",
  "auth/web-storage-unsupported",
  "auth/operation-not-supported-in-this-environment",
  "auth/internal-error",
]);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const auth = getFirebaseAuth();

    getRedirectResult(auth).catch((err: unknown) => {
      setError(err instanceof Error ? err.message : "Sign-in failed");
    });

    return onAuthStateChanged(auth, (next) => {
      setUser(next);
      setLoading(false);
    });
  }, []);

  async function signIn() {
    setError(null);
    const auth = getFirebaseAuth();
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err: unknown) {
      const code = (err as { code?: string })?.code ?? "";
      if (POPUP_FALLBACK_CODES.has(code)) {
        try {
          await signInWithRedirect(auth, googleProvider);
        } catch (redirectErr) {
          setError(redirectErr instanceof Error ? redirectErr.message : "Sign-in failed");
        }
        return;
      }
      setError(err instanceof Error ? err.message : "Sign-in failed");
    }
  }

  async function signOut() {
    try {
      setError(null);
      await fbSignOut(getFirebaseAuth());
    } catch (err) {
      setError(err instanceof Error ? err.message : "Sign-out failed");
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut, error }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  return useContext(AuthContext);
}
