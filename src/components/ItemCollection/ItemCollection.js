// Import the functions you need from the SDKs you need
import firebase from "firebase/app";

import "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsuVur-McMvu6R0zejgPmB7CSbLZe8WRQ",
  authDomain: "reactjs-7eade.firebaseapp.com",
  projectId: "reactjs-7eade",
  storageBucket: "reactjs-7eade.appspot.com",
  messagingSenderId: "181523664818",
  appId: "1:181523664818:web:5277c86a060f977abddeab"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const db= app.firestore()
