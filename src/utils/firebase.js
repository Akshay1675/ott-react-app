// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJfWYfHSEhG-qQk1qenRT1lWFo2sbhuCU",
  authDomain: "ottreactapp.firebaseapp.com",
  projectId: "ottreactapp",
  storageBucket: "ottreactapp.appspot.com",
  messagingSenderId: "573033420644",
  appId: "1:573033420644:web:a1c1e2e1ca16af1b140c71",
  measurementId: "G-0S1WVSMVXV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
