// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKQz31S-jL6LhviKzI5LvRzpGyCsjuecI",
  authDomain: "food-b0210.firebaseapp.com",
  projectId: "food-b0210",
  storageBucket: "food-b0210.appspot.com",
  messagingSenderId: "965460006845",
  appId: "1:965460006845:web:f922f9eb134ffcae5da4d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};