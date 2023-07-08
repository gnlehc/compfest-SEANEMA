// import React, { useEffect, useState } from "react";
// import { auth, provider } from "./config";
// import { signInWithPopup } from "firebase/auth";
// import HomePage from "../pages/LogOut";

// function SignIn() {
//   const [value, setValue] = useState("");
//   const handleClick = () => {
//     signInWithPopup(auth, provider).then((data) => {
//       setValue(data.user.email);
//       localStorage.setItem("email", data.user.email);
//     });
//   };
//   console.log(value);
//   console.log(setValue);
//   useEffect(() => {
//     setValue(localStorage.getItem("email"));
//   });

//   return (
//     <div>
//       {value ? (
//         <HomePage />
//       ) : (
//         <button
//           className="active:translate-y-1 text-white text-lg bg-gradient-to-r from-red-500 to-red-800 py-1 px-6 rounded"
//           onClick={handleClick}
//         >
//           Sign In
//         </button>
//       )}
//     </div>
//   );
// }
// export default SignIn;
import React, { useEffect, useState } from "react";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import HomePage from "../pages/LogOut"; // Correct the import path to the correct HomePage component

function SignIn() {
  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUserId(generateUserId());
        setUserEmail(user.email);
        localStorage.setItem("userId", generateUserId().toString());
        localStorage.setItem("email", user.email);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const generateUserId = () => {
    const existingUserId = parseInt(localStorage.getItem("userId"));
    if (existingUserId) {
      return existingUserId + 1;
    } else {
      return 1;
    }
  };

  useEffect(() => {
    setUserId(localStorage.getItem("userId"));
    setUserEmail(localStorage.getItem("email"));
  }, []);

  return (
    <div>
      {userId ? (
        <HomePage userId={userId} userEmail={userEmail} />
      ) : (
        <button
          className="active:translate-y-1 text-white text-lg bg-gradient-to-r from-red-500 to-red-800 py-1 px-6 rounded"
          onClick={handleSignIn}
        >
          Sign In
        </button>
      )}
    </div>
  );
}

export default SignIn;
