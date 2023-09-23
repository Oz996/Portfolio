import { createContext, useEffect, useState } from "react";

const initialState = {
  isLoggedIn: false,
  userName: null,
};

export const AuthContext = createContext(initialState);

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("auth")) || initialState.isLoggedIn
  );
  const [userName, setUserName] = useState(initialState.userName);

  const signIn = (userName) => {
    setIsLoggedIn(true);
    setUserName(userName);
  };

  const signOutUser = () => {
    setIsLoggedIn(false);
    setUserName(false);
  };

  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("auth", true);
    } else {
      localStorage.removeItem("auth");
    }
  }, [isLoggedIn]);

  useEffect(() => {
    localStorage.getItem("auth");
  }, []);
  return (
    <AuthContext.Provider value={{ isLoggedIn, signIn, signOutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
