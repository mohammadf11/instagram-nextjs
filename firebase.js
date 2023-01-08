// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBvgteub-5SXdD8Gk8az4eGGkwjd2akqWU",
    authDomain: "nextinstagram-874fb.firebaseapp.com",
    projectId: "nextinstagram-874fb",
    storageBucket: "nextinstagram-874fb.appspot.com",
    messagingSenderId: "270936583745",
    appId: "1:270936583745:web:6ba28858daf3fd884ca0c0"
};

// Initialize Firebase
const app = !getApps().lenght ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage }