import React, { useContext, useEffect, useState } from "react";
import { auth, provider, database } from "./config";
import { signInWithPopup } from "firebase/auth";
import HomePage from "../pages/LogOut";
import { collection, addDoc } from "firebase/firestore";
import { BalanceContext } from "../context/BalanceContext";


function SignIn() {
  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const saveUserDataToFirestore = (userId, userEmail) => {
    const usersCollectionRef = collection(database, "Users");
    addDoc(usersCollectionRef, {
      userId,
      userEmail,
    })
      .then(() => {
        console.log("User data saved to Firestore");
      })
      .catch((error) => {
        console.log("Error saving user data:", error);
      });
  };
  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUserId(generateUserId());
        setUserEmail(user.email);
        localStorage.setItem("userId", generateUserId().toString());
        localStorage.setItem("email", user.email);

        saveUserDataToFirestore(generateUserId(), user.email);
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
  const generateUserId = () => {
    let existingUserId = parseInt(localStorage.getItem("userId"));
    if (isNaN(existingUserId) || existingUserId === null) {
      existingUserId = 0;
    }
    return existingUserId + 1;
  };


  // useEffect(() => {
  //   setUserId(localStorage.getItem("userId"));
  //   setUserEmail(localStorage.getItem("email"));
  // }, []);

  // return (
  //   <div>
  //     {userId ? (
  //       <HomePage userId={userId} userEmail={userEmail} />
  //     ) : (

  //       <button
  //         className="rounded-full bg-white px-10 text-black py-2 text-lg font-medium"
  //         onClick={handleSignIn}
  //       >
  //         Sign in with <span className="text-blue-500">Google</span>
  //       </button>
  //     )}
  //   </div>
  // );
}

export default SignIn;
