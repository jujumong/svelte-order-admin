// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeO8_XdIxXoJiKEPc3vP-WwMjFzY7A31w",
  authDomain: "caffe-fce8e.firebaseapp.com",
  databaseURL: "https://caffe-fce8e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "caffe-fce8e",
  storageBucket: "caffe-fce8e.appspot.com",
  messagingSenderId: "606489941377",
  appId: "1:606489941377:web:eaa0dac86648f72632c480"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore( app );