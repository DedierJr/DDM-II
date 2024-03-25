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

  apiKey: "AIzaSyD44x5c2t7xx62zq54qBwi2v5CErgvzHgo",

  authDomain: "marcador2-48487.firebaseapp.com",

  projectId: "marcador2-48487",

  storageBucket: "marcador2-48487.appspot.com",

  messagingSenderId: "257845476576",

  appId: "1:257845476576:web:339b3375c86ca7aa206485"

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