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
  }
  return userRef;
};

export const addCollectionAndDocument = async (collectionKey, objToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch(); // дожидается, пока все объекты не будут сформированы для отправки, после чего они будут отправлены одним запросом
  objToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc(); //создаем уникальный ключ для каждого объекта, если передать в doc() имя, то оно будет задано вручную
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnaphsotToMap = collectionsSnapshot => {
  const transformedCollection = collectionsSnapshot.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
