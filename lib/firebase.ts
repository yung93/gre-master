import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAao1Di5egzBlT8swDvEVx7bnKI9oOZyX0",
  authDomain: "gre-master-a2ec8.firebaseapp.com",
  projectId: "gre-master-a2ec8",
  storageBucket: "gre-master-a2ec8.firebasestorage.app",
  messagingSenderId: "1025785989523",
  appId: "1:1025785989523:web:90e8a7cc90359076ab4066",
};

let appInstance: FirebaseApp | null = null;
let authInstance: Auth | null = null;
let dbInstance: Firestore | null = null;

function getApp(): FirebaseApp {
  if (appInstance) return appInstance;
  appInstance = getApps().length > 0 ? getApps()[0]! : initializeApp(firebaseConfig);
  return appInstance;
}

export function getFirebaseAuth(): Auth {
  if (!authInstance) authInstance = getAuth(getApp());
  return authInstance;
}

export function getFirebaseDb(): Firestore {
  if (!dbInstance) dbInstance = getFirestore(getApp());
  return dbInstance;
}

export const googleProvider = new GoogleAuthProvider();
