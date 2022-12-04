// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBwh7IUYF2Pc9tiuTqHJTZiN2CONLTKTU",
  authDomain: "todo-app-react-7349c.firebaseapp.com",
  projectId: "todo-app-react-7349c",
  storageBucket: "todo-app-react-7349c.appspot.com",
  messagingSenderId: "555489168860",
  appId: "1:555489168860:web:fc318181af305943135319"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)