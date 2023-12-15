import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCIwHS3-KLmVtSMWqkNyKOtdJ3McYgAAU",
  authDomain: "aeroco-eccomerce.firebaseapp.com",
  projectId: "aeroco-eccomerce",
  storageBucket: "aeroco-eccomerce.appspot.com",
  messagingSenderId: "667078628597",
  appId: "1:667078628597:web:58d48fbe28738a8e7161bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
