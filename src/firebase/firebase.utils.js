import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAQvkyNNDj5JR2jJTVRw0b6zQ-coNXyYgA",
    authDomain: "crown-db-a19ef.firebaseapp.com",
    projectId: "crown-db-a19ef",
    storageBucket: "crown-db-a19ef.appspot.com",
    messagingSenderId: "886377846493",
    appId: "1:886377846493:web:92c5d8a5494ff828dd6d34",
    measurementId: "G-9K4Q9JWEFQ"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;