// import React from "react";
// import logo from "../asset/logo.webp";
// import SignIn from "./SignIn";
// import { Link } from "react-router-dom";
// import Home from "../pages/Home";
// const Header = () => {
//   return (
//     <div>
//       <div className="flex items-center justify-between">
//         <div>
//           <img src={logo} className="max-w-[100px]"></img>
//         </div>
//         <div className="text-black font-bold text-xl">
//           <Link to="/">Movie</Link>
//         </div>
//         <div className="text-black text-xl">
//           <Link to="/Children">Children</Link>
//         </div>
//         <div className="text-black text-xl">
//           <Link to="/Children">Newest</Link>
//         </div>
//         <div className="flex justify-end">
//           <SignIn />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
import React from "react";
import logo from "../asset/logo.webp";
import SignIn from "./SignIn";
import { Link, useLocation } from "react-router-dom";
import Home from "../pages/Home";

const Header = () => {
  const location = useLocation();

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
        <div className="flex justify-end">
          <SignIn />
        </div>
      </div>
    </div>
  );
};

export default Header;
