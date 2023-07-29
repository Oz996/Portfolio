import { createContext, useState } from "react";

export const DarkThemeContext = createContext();

export const DarkThemeContextProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  console.log(darkTheme);

  const dark = {
    text: "#222",
    ui: "#fff",
    bg: "#121212",
    bg2: "#000"
  };

  const theme = darkTheme ? dark :""

  return (
    <DarkThemeContext.Provider value={{ darkTheme, setDarkTheme, theme }}>
      {children}
    </DarkThemeContext.Provider>
  );
};
