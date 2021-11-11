import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAQvkyNNDj5JR2jJTVRw0b6zQ-coNXyYgA",
  authDomain: "crown-db-a19ef.firebaseapp.com",
  projectId: "crown-db-a19ef",
  storageBucket: "crown-db-a19ef.appspot.com",
  messagingSenderId: "886377846493",
  appId: "1:886377846493:web:92c5d8a5494ff828dd6d34",
  measurementId: "G-9K4Q9JWEFQ",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await  userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;

}
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
