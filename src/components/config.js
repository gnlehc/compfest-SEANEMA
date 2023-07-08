import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyClguLmnemeT24MCfttJSngx3einzufZrE",
  authDomain: "seanema-534b4.firebaseapp.com",
  projectId: "seanema-534b4",
  storageBucket: "seanema-534b4.appspot.com",
  messagingSenderId: "902059365760",
  appId: "1:902059365760:web:87ac8c0ba56bc1cdb89d65",
  measurementId: "G-7JENB6M326",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
