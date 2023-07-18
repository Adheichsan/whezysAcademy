import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZXnik2m7uk4Yk608BCyd4Fj65D7zaTh8",
  authDomain: "wejiakademi.firebaseapp.com",
  projectId: "wejiakademi",
  storageBucket: "wejiakademi.appspot.com",
  messagingSenderId: "968709198063",
  appId: "1:968709198063:web:76e8c482abc0e91426cb1a",
  measurementId: "G-HNT7ED3ESG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);