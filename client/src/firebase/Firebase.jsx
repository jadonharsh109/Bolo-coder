// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKOeu9oJLbKdOhgQkWd3hCzrNZvZvYAz4",
  authDomain: "bolocoder-fbb19.firebaseapp.com",
  projectId: "bolocoder-fbb19",
  storageBucket: "bolocoder-fbb19.appspot.com",
  messagingSenderId: "931339446724",
  appId: "1:931339446724:web:42b8ac3144c3ea108e9c91",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
