import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";

import { Redirect } from 'react-router-dom';
import { showErrorMessage } from "../services/common";

const firebaseConfig = {
    apiKey: "AIzaSyAQ2VwkBsu_GVFefxOS4YtVJTOAg6klkXo",
    authDomain: "healthy-paw-258c3.firebaseapp.com",
    projectId: "healthy-paw-258c3",
    databaseURL: "https://healthy-paw-258c3-default-rtdb.europe-west1.firebasedatabase.app/",
    storageBucket: "healthy-paw-258c3.appspot.com",
    messagingSenderId: "1015211012736",
    appId: "1:1015211012736:web:5884963f56d71e41f5ac65"
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
