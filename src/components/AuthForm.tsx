import { Link } from "react-router-dom";
import Loader from "../utils/Loader/Loader";
import { ChangeEvent } from "react";
import { RegisterForm } from "../types/types";

interface props {
  type: "login" | "register";
  error: string | null;
  isLoading: boolean;
  formData?: RegisterForm;
  handleLogin?: (e: React.FormEvent) => void;
  handleNewUser?: (e: React.FormEvent) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const AuthForm = ({
  type,
  isLoading,
  error,
  handleLogin,
  handleNewUser,
  handleChange,
  formData,
}: props) => {
  // Dynamic component that handles renders form for both signing in and registering a new user depending
  // on what prop was sent

  if (type == "login")
    return (
      <section className="h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300 pt-20">
        <div className="max-w-[27rem] mx-auto flex flex-col gap-10 pt-20">
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
            <p className="text-red-500 h-0">{error}</p>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-blue-500 hover:bg-blue-400 mt-10 p-3 text-white duration-200"
            >
              {isLoading && <Loader />}
              Login
            </button>
            <p className="mt-10 text-center text-gray-400">
              Not a member?
              <Link to="/register" className="text-indigo-500 underline">
                Sign up
              </Link>
              now
            </p>
          </form>
        </div>
      </section>
    );

  if (type == "register")
    return (
      <section className="h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300">
        <div className="max-w-[27rem] mx-auto flex flex-col gap-10 pt-20">
          <form
            className="flex flex-col gap-2 p-10 bg-white rounded opacity"
            onSubmit={handleNewUser}
          >
            <h1 className="py-10 text-3xl font-bold text-center">Sign Up</h1>
            <div className="flex flex-col gap-2">
              <label htmlFor="userName">Username</label>
              <input
                type="userName"
                name="userName"
                id="userName"
                value={formData!.userName}
                onChange={handleChange}
                className="p-[1rem] border-slate-200 bg-slate-200"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData!.email}
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
                value={formData!.password}
                onChange={handleChange}
                className="p-[1rem] border-slate-200 bg-slate-200"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="Cpassword">Confirm Password</label>
              <input
                type="password"
                name="Cpassword"
                id="Cpassword"
                onChange={handleChange}
                value={formData!.Cpassword}
                className="p-[1rem] border-slate-200 bg-slate-200"
              />
            </div>
            <p className="text-red-500 h-0">{error}</p>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-blue-500 hover:bg-blue-400 mt-10 p-3 text-white duration-200"
            >
              {isLoading && <Loader />}
              Register
            </button>
            <p className="mt-10 text-center text-gray-400">
              Already a member?
              <Link to="/login" className="text-indigo-500 underline">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </section>
    );
};

export default AuthForm;
