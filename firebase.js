// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Firestore } from "firebase/firebase-firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQHbCI70_J7A46dvMF0xS8cFH4zy_rbEI",
  authDomain: "mixishop-ui.firebaseapp.com",
  projectId: "mixishop-ui",
  storageBucket: "mixishop-ui.appspot.com",
  messagingSenderId: "32586765925",
  appId: "1:32586765925:web:5dc24100a19a6b32c1188c",
  measurementId: "G-YLJBZGZK0N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = Firestore(app);






