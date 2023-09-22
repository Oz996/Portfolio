import { createContext, useState } from "react";

const initalState = {
  isLoggedIn: false,
  userName: null,
};

export const AuthContext = createContext(initalState);

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(initalState.isLoggedIn);
  const [userName, setUserName] = useState(initalState.userName);

  const signIn = (userName) => {
    setIsLoggedIn(true);
    setUserName(userName);
  };

  const signOutUser = () => {
    setIsLoggedIn(false);
    setUserName(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, signIn, signOutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
