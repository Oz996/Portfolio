import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { DarkThemeContextProvider } from "./context/DarkThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkThemeContextProvider>
        <App />
      </DarkThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
