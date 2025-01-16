import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBw0xfet_5GJgAR6s-IPv0XTylyWSL6wMg",
  authDomain: "cryptohub-68e5b.firebaseapp.com",
  projectId: "cryptohub-68e5b",
  storageBucket: "cryptohub-68e5b.firebasestorage.app",
  messagingSenderId: "464594239366",
  appId: "1:464594239366:web:e13de74511b4da57cc3607",
  measurementId: "G-SQMFR67MK0"
};

// Validate individual config values
const requiredFields = ['apiKey', 'authDomain', 'projectId'];
const missingFields = requiredFields.filter(field => !firebaseConfig[field]);

if (missingFields.length > 0) {
  throw new Error(`Missing required Firebase configuration: ${missingFields.join(', ')}`);
}

// Initialize Firebase
let app;
try {
  app = initializeApp(firebaseConfig);
} catch (error) {
  console.error('Error initializing Firebase:', error);
  throw error;
}

export { app };
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = typeof window === 'undefined' ? null : getAnalytics(app);