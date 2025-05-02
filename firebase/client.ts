import { initializeApp, getApp, getApps } from "firebase/app";
 import { getAuth } from 'firebase/auth';
 import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDvgoeYsH3-NxFuBzPnKRm5ZJ5rDvre1k",
  authDomain: "mock-interview-2c58c.firebaseapp.com",
  projectId: "mock-interview-2c58c",
  storageBucket: "mock-interview-2c58c.firebasestorage.app",
  messagingSenderId: "387906719430",
  appId: "1:387906719430:web:1439157aa9721c96d251c7",
  measurementId: "G-ER89T0V7KK"
};


const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
 
export const auth = getAuth(app);
export const db = getFirestore(app)