// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQWZ85ZgisxWPpmxS0ooe3ike7ACj0bq0",
  authDomain: "chat-app-b7558.firebaseapp.com",
  projectId: "chat-app-b7558",
  storageBucket: "chat-app-b7558.appspot.com",
  messagingSenderId: "74830587431",
  appId: "1:74830587431:web:1f38b52c318ba6b54ed002"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export { db, auth, provider }