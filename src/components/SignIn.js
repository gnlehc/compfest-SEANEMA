import React, { useState } from "react";
import { auth, provider, database } from "./config";
import { signInWithPopup } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import google from '../assets/google.png'

function SignIn() {
  const [userEmail, setUserEmail] = useState("");
  const saveUserDataToFirestore = (userEmail) => {
    const usersCollectionRef = collection(database, "Users");
    addDoc(usersCollectionRef, {
      userEmail,
    })
      .then(() => {
        console.log("User data saved to Firestore");
        window.location.href = '/'
      })
      .catch((error) => {
        console.log("Error saving user data:", error);
      });
  };
  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUserEmail(user.email);
        saveUserDataToFirestore(user.email);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const handleSignIn = () => {
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       const user = result.user;
  //       setUserId(generateUserId());
  //       setUserEmail(user.email);
  //       localStorage.setItem("userId", generateUserId().toString());
  //       localStorage.setItem("email", user.email);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };


  return (
    <div>
      <button
        className="rounded-full bg-white flex flex-row gap-4 px-8 my-auto text-black py-1 text-lg font-medium"
        onClick={handleSignIn}
      >
        <img className="w-[34px] my-auto" src={google}></img>
        Sign in with Google
      </button>
    </div>
  );
}

export default SignIn;
