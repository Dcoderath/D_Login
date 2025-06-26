// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIoi4GTsehSqpwZXeucKuN_DUeXh9lFS4",
  authDomain: "d-login-636c9.firebaseapp.com",
  projectId: "d-login-636c9",
  storageBucket: "d-login-636c9.appspot.com",
  messagingSenderId: "518437966024",
  appId: "1:518437966024:web:d325ef4490bad9435a15fd"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
