// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYHLAmlS38NKbNfuUgwMYVXTymWwqYsGY",
  authDomain: "rnunion-deec8.firebaseapp.com",
  projectId: "rnunion-deec8",
  storageBucket: "rnunion-deec8.appspot.com",
  messagingSenderId: "761939141937",
  appId: "1:761939141937:web:7c0914458dd5847f07bc10"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);