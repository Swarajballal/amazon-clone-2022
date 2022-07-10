import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBMLwEckmJNFH0JR2SeJ3e2pkFZ-YJ4uW8",
    authDomain: "clone-44045.firebaseapp.com",
    projectId: "clone-44045",
    storageBucket: "clone-44045.appspot.com",
    messagingSenderId: "123547888996",
    appId: "1:123547888996:web:9d78417416cc5f6ef15e71",
    measurementId: "G-ZH16VVKJM9"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };