// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS88EqSxyyu2inZeG6vQtVcxSQ0S0KCsI",
  authDomain: "student-login-71b53.firebaseapp.com",
  projectId: "student-login-71b53",
  storageBucket: "student-login-71b53.firebasestorage.app",
  messagingSenderId: "513748058912",
  appId: "1:513748058912:web:98eced83efea20643b4d45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore Database
const db = getFirestore(app);

// Export
export { db };