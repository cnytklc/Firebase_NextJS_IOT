import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA1oxXNstgqi2VlUIe-z8fixLqmn4XT-bc",
  authDomain: "temperature-humidity-98f12.firebaseapp.com",
  databaseURL: "https://temperature-humidity-98f12-default-rtdb.firebaseio.com",
  projectId: "temperature-humidity-98f12",
  storageBucket: "temperature-humidity-98f12.appspot.com",
  messagingSenderId: "219539337918",
  appId: "1:219539337918:web:c86a87fa9b99a16d8164ef",
  measurementId: "G-WDCJDPMJKD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export {database};