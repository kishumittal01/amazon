// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyABkvY4DBRLeE39TM845WjkukvU3g_9IxE",
    authDomain: "clone-32ab6.firebaseapp.com",
    projectId: "clone-32ab6",
    storageBucket: "clone-32ab6.appspot.com",
    messagingSenderId: "622488364062",
    appId: "1:622488364062:web:dbad1717a7c22a96d23a0f",
    measurementId: "G-2GK0LNRDDS"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};