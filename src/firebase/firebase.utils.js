import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCrjqQqbXuFst5gKg8V1pPkxWAOgGX6ElI",
  authDomain: "e-shop-2393a.firebaseapp.com",
  databaseURL: "https://e-shop-2393a.firebaseio.com",
  projectId: "e-shop-2393a",
  storageBucket: "e-shop-2393a.appspot.com",
  messagingSenderId: "461415991566",
  appId: "1:461415991566:web:b3f322cc9078df0b4e2f5f"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
