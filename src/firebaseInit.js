// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg6UUBWQhxCFy_oumupbNarvUQhw4lFc8",
  authDomain: "photoalbum-444c9.firebaseapp.com",
  projectId: "photoalbum-444c9",
  storageBucket: "photoalbum-444c9.appspot.com",
  messagingSenderId: "527695551206",
  appId: "1:527695551206:web:1739dd0ba67f8244b33927"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
