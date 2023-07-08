import React, { useEffect, useState } from "react";
import barcode from "../asset/barcode.jpeg";
const TopUp = () => {
  const [balance, setBalance] = useState(0);
  const [user, setUser] = useState("");

  useEffect(() => {
    const savedBalance = localStorage.getItem("balance");
    const savedUser = localStorage.getItem("email");
    if (savedBalance) {
      setBalance(parseInt(savedBalance));
    }
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const handleTopUp = (amount) => {
    const newBalance = balance + amount;
    setBalance(newBalance);
    localStorage.setItem("balance", newBalance.toString());
    console.log(newBalance);
  };

  const saldo = [
    {
      index: 1,
      topup: 50000,
    },
    {
      index: 2,
      topup: 100000,
    },
    {
      index: 3,
      topup: 150000,
    },
  ];

  return (
    <div className="flex flex-col">
      <p className="text-xl m-10 flex absolute p-2 rounded bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text">
        Hello {user}!
      </p>
      <div className="flex flex-row items-center justify-center h-screen gap-24">
        <div className="flex flex-col">
          <div>
            <p className="font-medium text-xl pb-4">Pay via Scan Barcode</p>
          </div>
          <div className="flex flex-row border-black rounded p-2 border-8">
            <img src={barcode} className="max-w-[220px]"></img>
          </div>
        </div>
        <div className="grid grid-cols-4">
          <div className="col-span-4">
            <div className="p-10">
              <h1 className="text-5xl font-bold text-red-800">
                Top Up Balance
              </h1>
            </div>
            <div className="flex flex-row justify-center gap-10">
              {saldo.map((e, index) => (
                <div className="flex flex-row items-center gap-4" key={index}>
                  <p className="text-lg font-medium text-black">{e.topup}</p>
                  <button
                    className="px-4 py-2 text-white bg-red-500 rounded-full hover:bg-red-600"
                    onClick={() => handleTopUp(e.topup)}
                  >
                    Top Up
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-lg font-medium">Current Balance: {balance}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopUp;
