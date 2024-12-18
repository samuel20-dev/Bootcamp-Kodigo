// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyDndINLuToIC11o5FuCRqtnK2V2rxp7obw",
   authDomain: "auth-app-1998e.firebaseapp.com",
   projectId: "auth-app-1998e",
   storageBucket: "auth-app-1998e.appspot.com",
   messagingSenderId: "188423563383",
   appId: "1:188423563383:web:deeff6d481845655e0fe72",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// inicializa la autenticacion de la aplicacion
export const auth = getAuth(app);
