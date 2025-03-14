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
  apiKey: "AIzaSyAjUky_R24sQNyaS2C06mo-yhpV8QcndDc",
  authDomain: "unihack-blueprint-app.firebaseapp.com",
  projectId: "unihack-blueprint-app",
  storageBucket: "unihack-blueprint-app.firebasestorage.app",
  messagingSenderId: "34793971415",
  appId: "1:34793971415:web:0fa68ca2ebabf100981a92",
  measurementId: "G-GSYD14ZLNZ"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const firebase_db = getFirestore(firebase_app);
const firebase_auth = getAuth(firebase_app)

