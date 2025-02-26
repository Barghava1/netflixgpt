// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAO8mXE--MxD6_n1sHrBjhkXup41xVubBQ",
  authDomain: "barghava-b06ca.firebaseapp.com",
  projectId: "barghava-b06ca",
  storageBucket: "barghava-b06ca.firebasestorage.app",
  messagingSenderId: "309120493451",
  appId: "1:309120493451:web:fde1e24b6a05115b99f18e",
  measurementId: "G-GKNFYR9HPL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();