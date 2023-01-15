import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCBzgZdNYSgFpNn4Fyw9UkLr6uQz_XjYkA",
  authDomain: "chat-23862.firebaseapp.com",
  projectId: "chat-23862",
  storageBucket: "chat-23862.appspot.com",
  messagingSenderId: "695653881217",
  appId: "1:695653881217:web:08776e7e9d6eb3fcbe0480",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
