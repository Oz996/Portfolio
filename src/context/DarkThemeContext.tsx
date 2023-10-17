import { createContext, useState, ReactElement } from "react";

interface Theme {
  darkTheme: boolean;
  setDarkTheme: (value: boolean) => void;
  theme: string | { ui: string; bg: string;};
}

const initialState: Theme = {
  darkTheme: false,
  setDarkTheme: () => {},
  theme: "",
};

export const DarkThemeContext = createContext(initialState);

export const DarkThemeContextProvider = ({
  children,
}: {
  children: ReactElement;
}) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const dark = {
    ui: "#fff",
    bg: "#121212",
  };

  const theme = darkTheme ? dark : "";

  return (
    <DarkThemeContext.Provider value={{ darkTheme, setDarkTheme, theme }}>
      {children}
    </DarkThemeContext.Provider>
  );
};
