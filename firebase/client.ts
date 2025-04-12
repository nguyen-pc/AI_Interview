// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAhp88kBbUyV63_XzQtu8-dOlb2fYzv-Lk",
  authDomain: "prewise-fbf5c.firebaseapp.com",
  projectId: "prewise-fbf5c",
  storageBucket: "prewise-fbf5c.firebasestorage.app",
  messagingSenderId: "240635802047",
  appId: "1:240635802047:web:9d626c602c9391d44a710a",
  measurementId: "G-WXQ8QV03K8"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app)
export const db = getFirestore(app)