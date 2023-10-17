// Import the functions you need from the SDKs you need
//import * as firebase from "firebase
//import * as firebase from "firebase/app";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// cada produto do firebase deve ser importado separadamente
//por exemplo auth de autenticação
import "firebase/compat/auth";

import "firebase/compat/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyBuy0yw9b4mLX7O-veuFml5sx3OKoqpDT0",

  authDomain: "authentica2-7b376.firebaseapp.com",

  projectId: "authentica2-7b376",

  storageBucket: "authentica2-7b376.appspot.com",

  messagingSenderId: "513818750781",

  appId: "1:513818750781:web:abed72116d93d859b25f54"

};


// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()
const firestore = firebase.firestore()
export { auth, firestore };