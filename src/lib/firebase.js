import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchatapp-37b35.firebaseapp.com",
  projectId: "reactchatapp-37b35",
  storageBucket: "reactchatapp-37b35.appspot.com",
  messagingSenderId: "23995722769",
  appId: "1:23995722769:web:1548804e0eb1c143eb95b0"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()