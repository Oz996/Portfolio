import { auth } from "../firebase";
import { AuthError, signInWithEmailAndPassword } from "firebase/auth";
import React, { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Loader from "../utils/Loader/Loader";

const Login = () => {
  const initialState = {
    userName: "",
    email: "",
    password: "",
  };

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const { signIn } = useAuth();

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
        signIn(user.displayName);
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
  return (
    <section className="min-h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300 pt-20">
      <div className="w-[27rem] mx-auto flex flex-col gap-10 pt-20">
        <form
          className="flex flex-col gap-2 p-10 bg-white rounded"
          onSubmit={handleLogin}
        >
          <h1 className="py-10 text-3xl font-bold text-center">Sign In</h1>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              className="p-[1rem] border-slate-200 bg-slate-200"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              className="p-[1rem] border-slate-200 bg-slate-200"
            />
          </div>
          <p className="text-red-500">{error}</p>
          <button
            type="submit"
            disabled={isLoading}
            className={`bg-blue-500 hover:bg-blue-400 mt-5 p-3 text-white duration-200 
          }`}
          >
            {isLoading && <Loader/>}
            Login
          </button>
          <p className="mt-10 text-center text-gray-400">
            Not a member?{" "}
            <Link to="/register" className="text-indigo-500 underline">
              Sign up
            </Link>{" "}
            now
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
