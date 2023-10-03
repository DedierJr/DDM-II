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

  apiKey: "AIzaSyCzsdbQZ3Hkv_KRbHbu72SgMTHnwjSA8yQ",

  authDomain: "arvore-8def1.firebaseapp.com",

  projectId: "arvore-8def1",

  storageBucket: "arvore-8def1.appspot.com",

  messagingSenderId: "888320792684",

  appId: "1:888320792684:web:6385bf78034032011ae049"

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
