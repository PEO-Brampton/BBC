import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // Replace these with your Firebase configuration values
  apiKey: "AIzaSyDB_j4Alvxo2IOfPwgiO74RGCQhTIHm8w8",
  authDomain: "bbc-app-9d500.firebaseapp.com",
  projectId: "bbc-app-9d500",
  storageBucket: "bbc-app-9d500.firebasestorage.app",
  messagingSenderId: "213795589881",
  appId: "1:213795589881:web:f256f33e26b5e643d09c28",
  measurementId: "G-2W6DTRL3TM"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 