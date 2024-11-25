
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAYmQGETneSA0_a9IuOlAUFKAREZYxx88s",
  authDomain: "contact-form-df437.firebaseapp.com",
  projectId: "contact-form-df437",
  storageBucket: "contact-form-df437.firebasestorage.app",
  messagingSenderId: "393077757908",
  appId: "1:393077757908:web:2b8ce4d4f4a18236e4a841"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);