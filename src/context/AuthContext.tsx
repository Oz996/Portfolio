import { createContext, useEffect, useState, ReactElement } from "react";

interface Auth {
  isLoggedIn: boolean;
  userName: string | null;
  signIn: (value: string) => void;
  signOutUser: () => void;
}

const initialState: Auth = {
  isLoggedIn: false,
  userName: null,
  signIn: () => {},
  signOutUser: () => {},
};

export const AuthContext = createContext(initialState);

const AuthContextProvider = ({ children }: { children: ReactElement }) => {
  const auth = localStorage.getItem("auth");
  const initialAuth = auth ? JSON.parse(auth) : initialState.isLoggedIn;

  const [isLoggedIn, setIsLoggedIn] = useState(initialAuth);
  const [userName, setUserName] = useState(initialState.userName);

  const signIn = (userName: string) => {
    setIsLoggedIn(true);
    setUserName(userName);
  };

  const signOutUser = () => {
    setIsLoggedIn(false);
    setUserName(null);
  };

  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("auth", "true");
    } else {
      localStorage.removeItem("auth");
    }
  }, [isLoggedIn]);

  useEffect(() => {
    localStorage.getItem("auth");
  }, []);
  return (
    <AuthContext.Provider value={{ isLoggedIn, signIn, signOutUser, userName }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
