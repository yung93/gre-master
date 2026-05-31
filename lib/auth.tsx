"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { onAuthStateChanged, signInWithPopup, signOut as fbSignOut, type User } from "firebase/auth";
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

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const auth = getFirebaseAuth();
    return onAuthStateChanged(auth, (next) => {
      setUser(next);
      setLoading(false);
    });
  }, []);

  async function signIn() {
    try {
      setError(null);
      await signInWithPopup(getFirebaseAuth(), googleProvider);
    } catch (err) {
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
