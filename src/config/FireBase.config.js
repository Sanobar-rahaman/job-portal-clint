// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdj1_8ZfzJvHvHts9J-WDsRG3BiJhN0l8",
  authDomain: "job-hunting-c8703.firebaseapp.com",
  projectId: "job-hunting-c8703",
  storageBucket: "job-hunting-c8703.appspot.com",
  messagingSenderId: "577599649686",
  appId: "1:577599649686:web:d9d88fb55974e21f190fb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth