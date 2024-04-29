import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAbiYUlJr-j9Feo6qjNxkeazu7kyz7__Rg",
  authDomain: "nextjs-62517.firebaseapp.com",
  databaseURL: "https://nextjs-62517-default-rtdb.firebaseio.com",
  projectId: "nextjs-62517",
  storageBucket: "nextjs-62517.appspot.com",
  messagingSenderId: "229533254935",
  appId: "1:229533254935:web:299de5b8a392d9316c6352"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export {database};