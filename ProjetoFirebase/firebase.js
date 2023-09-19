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
  apiKey: "AIzaSyAU1dAi2c1stxTJsw1ycsn-_X1qh9u3MS8",

  authDomain: "anemal-a438c.firebaseapp.com",

  projectId: "anemal-a438c",

  storageBucket: "anemal-a438c.appspot.com",

  messagingSenderId: "342687874636",

  appId: "1:342687874636:web:e8663a80f7d7d650a4bee9",
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
