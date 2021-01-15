import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0tcpkex3rFRHDtnnR6aE8PGFoTMcP3to",
  authDomain: "clone-f6d1b.firebaseapp.com",
  projectId: "clone-f6d1b",
  storageBucket: "clone-f6d1b.appspot.com",
  messagingSenderId: "277908418306",
  appId: "1:277908418306:web:537659d2774712e4d9dc1b",
  measurementId: "G-M2D9E8R8NE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
