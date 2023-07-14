import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import MovieProvider from "./context/movieContext";
import BalanceProvider from "./context/BalanceContext";
import { AuthContextProvider } from "./context/AuthContext";
import { ChakraProvider } from '@chakra-ui/react'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <BalanceProvider>
      <AuthContextProvider>
        <MovieProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </MovieProvider>
      </AuthContextProvider>
    </BalanceProvider>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
