// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Firestore, getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyXrFv7nsRwFk-ytk2xjR8Jp52eKtwRs8",
  authDomain: "blueprint-unihack-app.firebaseapp.com",
  projectId: "blueprint-unihack-app",
  storageBucket: "blueprint-unihack-app.firebasestorage.app",
  messagingSenderId: "104107251973",
  appId: "1:104107251973:web:2b392c8a310acdbeb3bf6c",
  measurementId: "G-6RLV04CCD0"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const firebase_db = getFirestore(firebase_app);
const firebase_auth = getAuth(firebase_app)

