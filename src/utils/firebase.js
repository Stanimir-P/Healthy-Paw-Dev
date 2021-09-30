import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";

import { Redirect } from 'react-router-dom';
import { showErrorMessage } from "../services/common";

const firebaseConfig = {
    apiKey: "AIzaSyAEMAmh7iOEjclNHFakq7zFdf1LQX40h04",
    authDomain: "healthy-paw-42f3b.firebaseapp.com",
    databaseURL: "https://healthy-paw-42f3b-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "healthy-paw-42f3b",
    storageBucket: "healthy-paw-42f3b.appspot.com",
    messagingSenderId: "124595422330",
    appId: "1:124595422330:web:b286cdc4092017d1bb27c3"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;

export const auth = firebase.auth();

export const storage = firebase.storage();

export const database = firebase.database();

export const register = (email, password, history) => {
    auth.createUserWithEmailAndPassword(email, password)
        .then(() => history.push('/'))
        .catch(err => showErrorMessage('Invalid email address!'));
}

export const login = (email, password, history) => {
    auth.signInWithEmailAndPassword(email, password)
        .then(() => history?.push('/'))
        .catch(err => showErrorMessage('Wrong email or password!'));
}

export const logout = () => {
    auth.signOut();
    return <Redirect to="/" />
}
