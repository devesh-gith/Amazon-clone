// import { initializeApp } from "firebase/app";
import firebase from "firebase";
// import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAl4trA_4A3j8TuCR6jUMxMhx7XUjvCjT4",
  authDomain: "clone-60295.firebaseapp.com",
  databaseURL: "https://clone-60295-default-rtdb.firebaseio.com",
  projectId: "clone-60295",
  storageBucket: "clone-60295.appspot.com",
  messagingSenderId: "272698514909",
  appId: "1:272698514909:web:be6e67cffe9cb94730aa34",
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export default db;
