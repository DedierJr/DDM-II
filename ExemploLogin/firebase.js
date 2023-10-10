// Import the functions you need from the SDKs you need
//import * as firebase from "firebase
//import * as firebase from "firebase/app";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// cada produto do firebase deve ser importad separadamente
//por exemplo auth de autenticação
import "firebase/compat/auth";

import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyCM2FntufV-0uPPXvGv_jJwOMCRswFPbP8",

  authDomain: "exemplologin-e6c6c.firebaseapp.com",

  projectId: "exemplologin-e6c6c",

  storageBucket: "exemplologin-e6c6c.appspot.com",

  messagingSenderId: "141301266003",

  appId: "1:141301266003:web:5a357f7dc3401b1c9f38a6"

};


// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
const firestore = firebase.firestore();
export { auth, firestore };
