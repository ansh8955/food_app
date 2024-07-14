// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0ZB6FziEFMLPAuKpSyRQeW4pD5nhmuhg",
  authDomain: "new-food-app-f01a7.firebaseapp.com",
  projectId: "new-food-app-f01a7",
  storageBucket: "new-food-app-f01a7.appspot.com",
  messagingSenderId: "500637597247",
  appId: "1:500637597247:web:6fa7c3ba28c8314770c28a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};