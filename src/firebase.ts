// Import the functions you need from the SDKs you need
import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCf8sc-oBe3n2NQ54JfH7fJxDYJM8VmHeU",
    authDomain: "scraper-ed2df.firebaseapp.com",
    projectId: "scraper-ed2df",
    storageBucket: "scraper-ed2df.appspot.com",
    messagingSenderId: "790459845602",
    appId: "1:790459845602:web:8305233e9a30b5f1b907bb",
    measurementId: "G-0X1VLMFTEZ"
  };
  

// Initialize Firebase

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db}