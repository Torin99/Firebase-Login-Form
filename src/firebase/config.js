import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcM9yNNk1Q0IumgCG9pshWJqjUzoZf1rg",
  authDomain: "loginexample-d2d90.firebaseapp.com",
  projectId: "loginexample-d2d90",
  storageBucket: "loginexample-d2d90.appspot.com",
  messagingSenderId: "511882581117",
  appId: "1:511882581117:web:2f1ff41338edb93dd1cd14",
  measurementId: "G-Y50VSNSG62",
};

firebase.initializeApp(firebaseConfig);

const myFireStore = firebase.firestore();
const myAuth = firebase.auth();

export default { myFireStore, myAuth };
