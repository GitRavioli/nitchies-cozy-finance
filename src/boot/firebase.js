// Import the functions you need from the Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAelPqsl9W9ExLg6cPVJWbklyd_0yPZHr8",
  authDomain: "financetracker-f3bfb.firebaseapp.com",
  projectId: "financetracker-f3bfb",
  storageBucket: "financetracker-f3bfb.firebasestorage.app",
  messagingSenderId: "913190400469",
  appId: "1:913190400469:web:dfe1403f77bb72bbb50d5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);

// Export auth and db for use in other parts of the app
export { auth, db };
