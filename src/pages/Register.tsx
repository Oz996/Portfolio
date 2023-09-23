import { ChangeEvent, useState } from "react";
import {
  AuthError,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../utils/Loader/Loader";

const Register = () => {
  const initialState = {
    userName: "",
    email: "",
    password: "",
    Cpassword: "",
  };

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((data) => {
      return {
        ...data,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleNewUser = (e: React.FormEvent) => {
    e.preventDefault();

    const { email, password, userName, Cpassword } = formData;

    if (!email || !password || !userName || !Cpassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (Cpassword !== password) {
      setError("Passwords dont match");
      return;
    } else {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, { displayName: userName }).then(() => {
            navigate("/login");
          });
        })
        .catch((error: AuthError) => {
          setError(error.message);
        })
        .finally(() => {
          setIsLoading(false);
          setTimeout(() => {
            setError(null);
          }, 3000);
        });
    }
  };

  return (
    <section className="min-h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300">
      <div className="w-[27rem] mx-auto flex flex-col gap-10 pt-20">
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
              value={formData.userName}
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
              value={formData.email}
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
              value={formData.password}
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
              value={formData.Cpassword}
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
            {isLoading && <Loader />}
            Register
          </button>
          <p className="mt-10 text-center text-gray-400">
            Already a member?{" "}
            <Link to="/login" className="text-indigo-500 underline">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;
