// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABhezUY5hXIBbIhHxpkXAUSE9NmiVLCsE",
  authDomain: "movieapp-c2c3a.firebaseapp.com",
  projectId: "movieapp-c2c3a",
  storageBucket: "movieapp-c2c3a.firebasestorage.app",
  messagingSenderId: "167979397062",
  appId: "1:167979397062:web:c778dc7189f7d6e1788cc7",
  measurementId: "G-KRMFPB956Y"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



const auth = getAuth(app); // Get and export the auth instance

export { auth }; // Export auth