// import { createContext, useEffect, useState } from "react";

// export const BalanceContext = createContext();

// const BalanceProvider = ({ children }) => {
//   const [balance, setBalance] = useState([]);
//   const rp = 500000;
//   useEffect(() => {
//     const initialBalance = () => {
//       setBalance(rp);
//       localStorage.setItem('balance', rp.toString())
//     };
//     initialBalance();
//     console.log(setBalance);
//     console.log(balance);
//   }, []);
//   return (
//     <BalanceContext.Provider value={{ balance }}>
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
