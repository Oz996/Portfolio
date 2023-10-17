import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { DarkThemeContextProvider } from "./context/DarkThemeContext";
import AuthContextProvider from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkThemeContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </DarkThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
