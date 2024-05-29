import { auth } from "../firebase";
import { AuthError, signInWithEmailAndPassword } from "firebase/auth";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useTheme } from "../hooks/useTheme";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthForm from "../components/AuthForm";
import { LoginForm } from "../types/types";

const Login = () => {
  const initialState: LoginForm = {
    userName: "",
    email: "",
    password: "",
  };

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<LoginForm>(initialState);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const { signIn } = useAuth();
  const { setDarkTheme } = useTheme();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((data) => {
      return {
        ...data,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const { email, password } = formData;
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user.displayName) {
          signIn(user.displayName);
        }
        toast(`✔️ Welcome ${user.displayName}`);
        navigate("/");
      })
      .catch((error: AuthError) => {
        setError(error.message);
        setTimeout(() => {
          setError(null);
        }, 3000);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setDarkTheme(false);
  }, []);
  return (
    <AuthForm
      type="login"
      error={error}
      isLoading={isLoading}
      handleChange={handleChange}
      handleLogin={handleLogin}
    />
  );
};

export default Login;
