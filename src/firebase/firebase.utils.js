import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
        apiKey: "AIzaSyB6LeXiSI7z8qa8Terhg3T7dMb4vV1T-eA",
        authDomain: "crwn-db-cb308.firebaseapp.com",
        projectId: "crwn-db-cb308",
        storageBucket: "crwn-db-cb308.appspot.com",
        messagingSenderId: "133654304992",
        appId: "1:133654304992:web:7f38e1b33bc4b672e25885",
        measurementId: "G-LGYW88YRRL"
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;



