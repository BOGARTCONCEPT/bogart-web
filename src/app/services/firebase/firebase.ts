// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAfuULsjh1VuFR3OZidnqi0OXhjNp1-Jhw", // PUBLIC
  authDomain: "bogart-86afe.firebaseapp.com",
  projectId: "bogart-86afe",
  storageBucket: "bogart-86afe.firebasestorage.app",
  messagingSenderId: "542608645250",
  appId: "1:542608645250:web:af13bb5e38c0c44495689b",
  measurementId: "G-3Z24RH0VGB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);