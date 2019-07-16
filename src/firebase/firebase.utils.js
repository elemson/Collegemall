import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAiob7oxOfAUEaRwv2gAUBLeCSI7_40_i4",
  authDomain: "collegemall-db.firebaseapp.com",
  databaseURL: "https://collegemall-db.firebaseio.com",
  projectId: "collegemall-db",
  storageBucket: "",
  messagingSenderId: "689952768967",
  appId: "1:689952768967:web:bfa0b2073b6057ee"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
