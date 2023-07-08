import React, { useContext } from "react";
import { BalanceContext } from "../context/BalanceContext";

function HomePage() {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const redirect = () => {
    window.location.href = "/TopUp";
  };

  const { balance } = useContext(BalanceContext);
  const rp = balance;

  return (
    <div className="flex flex-row gap-8 items-center">
      <div>
        {/* className="text-lg bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-yellow-200 via-yellow-400 to-yellow-700 py-1 px-6 text-white font-bold rounded-full" */}
        <button
          onClick={redirect}
          className="border py-1 px-6 rounded border-red-600 font-medium"
        >
          Rp. {rp}
        </button>
      </div>
      <button
        onClick={logout}
        className="text-white border bg-gradient-to-r from-red-500 to-red-800 text-lg active:translate-y-1 py-1 px-8 rounded hover:bg-rose-200"
      >
        Logout
      </button>
    </div>
  );
}

export default HomePage;
