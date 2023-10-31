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

  apiKey: "AIzaSyCVw09xExfq-OZkyRXMfj73Sm2Ywd3nbrU",

  authDomain: "avaliacao2-223a9.firebaseapp.com",

  projectId: "avaliacao2-223a9",

  storageBucket: "avaliacao2-223a9.appspot.com",

  messagingSenderId: "899699251175",

  appId: "1:899699251175:web:89a68f9f7544b6221c8f42"

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