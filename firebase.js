// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbARXyb9lbC9rWNnIGOqDblxOjcTAgSg0",
  authDomain: "react-native-todo-app-20ac6.firebaseapp.com",
  projectId: "react-native-todo-app-20ac6",
  storageBucket: "react-native-todo-app-20ac6.appspot.com",
  messagingSenderId: "577011564812",
  appId: "1:577011564812:web:cc98966250501da6c18929"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;