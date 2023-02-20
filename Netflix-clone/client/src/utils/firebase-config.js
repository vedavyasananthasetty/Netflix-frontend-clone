import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBJpzHb5ntwjZLhuFjNGoLzSdjsqxY8Y3I",
  authDomain: "netflix-veda.firebaseapp.com",
  projectId: "netflix-veda",
  storageBucket: "netflix-veda.appspot.com",
  messagingSenderId: "328609277401",
  appId: "1:328609277401:web:4714d5f23003e3559265c8",
  measurementId: "G-4495BCBFDB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
