
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCbMbsAb7vGy4VThytEMvwnArAEGK3RDFQ",
  authDomain: "react-blog-a0aa9.firebaseapp.com",
  projectId: "react-blog-a0aa9",
  storageBucket: "react-blog-a0aa9.appspot.com",
  messagingSenderId: "634773609558",
  appId: "1:634773609558:web:9b57b2db1c245978d3eff7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);