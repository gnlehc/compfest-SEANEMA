// import React, { useEffect, useState, createContext } from "react";
// import { doc, getDoc, setDoc } from "firebase/firestore";
// import { database } from "./config";

// export const BalanceContext = createContext();

// const BalanceProvider = ({ children, user }) => {
//   const [balance, setBalance] = useState(0);
//   const rp = 500000;
//   const userBalanceRef = doc(database, "Users", user?.uid);

//   useEffect(() => {
//     const fetchBalance = async () => {
//       try {
//         const docSnapshot = await getDoc(userBalanceRef);
//         if (docSnapshot.exists()) {
//           setBalance(docSnapshot.data().balance);
//         } else {
//           setBalance(rp);
//           await setDoc(userBalanceRef, { balance: rp });
//         }
//       } catch (err) {
//         console.log(err.message);
//       }
//     };

//     fetchBalance();
//   }, [user, userBalanceRef]);

//   const updateBalance = async (newBalance) => {
//     try {
//       setBalance(newBalance);
//       await setDoc(userBalanceRef, { balance: newBalance });
//     } catch (err) {
//       console.log(err.message);
//     }
//   };

//   if (!user) {
//     return null; // or any loading state if necessary
//   }

//   return (
//     <BalanceContext.Provider value={{ balance, updateBalance }}>
//       {children}
//     </BalanceContext.Provider>
//   );
// };

// export default BalanceProvider;

import React, { useEffect, useState, createContext } from "react";

export const BalanceContext = createContext();

const BalanceProvider = ({ children }) => {
  const [balance, setBalance] = useState(0);
  const rp = 500000;

  useEffect(() => {
    const initialBalance = () => {
      const savedBalance = localStorage.getItem("balance");
      if (savedBalance) {
        setBalance(parseInt(savedBalance));
      } else {
        setBalance(rp);
        localStorage.setItem("balance", rp.toString());
      }
    };

    initialBalance();
  }, []);

  return (
    <BalanceContext.Provider value={{ balance, setBalance }}>
      {children}
    </BalanceContext.Provider>
  );
};

export default BalanceProvider;
