import React from "react";
import logo from "../assets/logo.webp";
import SignIn from "./SignIn";
import { Link, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import { UserAuth } from "../context/AuthContext";
import HomePage from "../pages/LogOut";

const Header = () => {
  const location = useLocation();
  const { user, logOut } = UserAuth()
  const isActive = (pathname) => {
    return location.pathname === pathname
      ? "font-bold bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text"
      : "";
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <img src={logo} className="max-w-[100px]"></img>
        </div>
        <div className={`text-black text-xl ${isActive("/")}`}>
          <Link to="/">Movie</Link>
        </div>
        <div className={`text-black text-xl ${isActive("/Children")}`}>
          <Link to="/Children">Children</Link>
        </div>
        <div className={`text-black text-xl ${isActive("/Newest")}`}>
          <Link to="/Newest">Newest</Link>
        </div>
        {user ? <HomePage /> : <div className="flex justify-end">
          {/* <SignIn /> */}
          <Link className="active:translate-y-1 text-white text-lg bg-gradient-to-r from-red-500 to-red-800 py-1 px-6 rounded" to="/register">
            Sign In
          </Link>
        </div>}
      </div>
    </div>
  );
};

export default Header;
