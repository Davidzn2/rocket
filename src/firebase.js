import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDTeUxMGxffxt6KFohp9Bnw8OiG6T-JAzw",
    authDomain: "rocket-challenge-f7307.firebaseapp.com",
    projectId: "rocket-challenge-f7307",
    storageBucket: "rocket-challenge-f7307.appspot.com",
    messagingSenderId: "604769282933",
    appId: "1:604769282933:web:53a9c5b8b8a745cddb813c",
    measurementId: "G-1NVT025EKN"
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export default app;