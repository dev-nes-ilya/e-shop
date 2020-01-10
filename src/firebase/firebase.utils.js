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

export const createUsersProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`); //получаем ссылку на объект(документ) по указанному пути

  const snapShot = await userRef.get(); //получаем снимок объекта (список доступных полей)

  if (!snapShot.exists) {
    const { displayName, email } = userAuth; //userAuth - большой объект возвращаемый API firebase
    const createdTime = new Date();

    try {
      await userRef.set({
        // метод firebase, позволяющий сохранить данные в БД
        displayName,
        email,
        createdTime,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user ", error.message);
    }
    return userRef;
  }
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
