import { useContext } from "react";
import { DarkThemeContext } from "../context/DarkThemeContext";

export const useTheme = () => {
  const theme = useContext(DarkThemeContext);
  if (theme === undefined) {
    throw new Error("Dark theme error");
  }
  return theme;
};
