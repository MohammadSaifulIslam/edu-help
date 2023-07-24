// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAASXsn1dMi3MZwHsb6rIJgeYHws9zwkR4",
  authDomain: "edu-help-admission.firebaseapp.com",
  projectId: "edu-help-admission",
  storageBucket: "edu-help-admission.appspot.com",
  messagingSenderId: "338590759497",
  appId: "1:338590759497:web:97ee155c7b8e2a685b5d98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;