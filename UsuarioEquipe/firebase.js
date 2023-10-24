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

  apiKey: "AIzaSyAkprsf9CpRftcTOl0c2YR4t_8SGaSHseg",

  authDomain: "usuarioequipe-4c46c.firebaseapp.com",

  projectId: "usuarioequipe-4c46c",

  storageBucket: "usuarioequipe-4c46c.appspot.com",

  messagingSenderId: "153817575865",

  appId: "1:153817575865:web:870ea3032c062eb7578668"

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