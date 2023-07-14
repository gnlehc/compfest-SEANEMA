import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCAMDOgWuJg2qOZuYSB-KXVb6-X9yGAMSQ",
  authDomain: "seanema-1c4bf.firebaseapp.com",
  projectId: "seanema-1c4bf",
  storageBucket: "seanema-1c4bf.appspot.com",
  messagingSenderId: "986458963020",
  appId: "1:986458963020:web:ee8a5c7414bc14fa4248e9",
  measurementId: "G-VSE3Q2GWS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
export const database = getFirestore(app);

// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import {getFirestore} from "firebase/firestore"
// const firebaseConfig = {
//   apiKey: "AIzaSyClguLmnemeT24MCfttJSngx3einzufZrE",
//   authDomain: "seanema-534b4.firebaseapp.com",
//   projectId: "seanema-534b4",
//   storageBucket: "seanema-534b4.appspot.com",
//   messagingSenderId: "902059365760",
//   appId: "1:902059365760:web:87ac8c0ba56bc1cdb89d65",
//   measurementId: "G-7JENB6M326",
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();
// export { auth, provider };
// export const database = getFirestore(app);
