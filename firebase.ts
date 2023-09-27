import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDCUORh1mHMe00950SfKJyfn3z3qGHudk8",
  authDomain: "fir-auth-35f86.firebaseapp.com",
  projectId: "fir-auth-35f86",
  storageBucket: "fir-auth-35f86.appspot.com",
  messagingSenderId: "461638437313",
  appId: "1:461638437313:web:4a43ac57d9fbb810d3c740",
};

export const FIREBASE_APP = initializeApp(firebaseConfig)
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
