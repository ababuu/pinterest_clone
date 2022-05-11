// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider ,signInWithPopup,getAuth} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq6UD_AoNtabeVkjEghXPXKl9Q7Oza8Xc",
  authDomain: "pinterest-clone-e0861.firebaseapp.com",
  databaseURL: "https://pinterest-clone-e0861-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pinterest-clone-e0861",
  storageBucket: "pinterest-clone-e0861.appspot.com",
  messagingSenderId: "171828826864",
  appId: "1:171828826864:web:0228174dca781baf7d2835"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const provider = new GoogleAuthProvider();