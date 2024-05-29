import { ChangeEvent, useState } from "react";
import {
  AuthError,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../utils/Loader/Loader";
import AuthForm from "../components/AuthForm";
import { RegisterForm } from "../types/types";

const Register = () => {
  const initialState: RegisterForm = {
    userName: "",
    email: "",
    password: "",
    Cpassword: "",
  };

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<RegisterForm>(initialState);
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
    <AuthForm
      type="register"
      error={error}
      isLoading={isLoading}
      formData={formData}
      handleNewUser={handleNewUser}
      handleChange={handleChange}
    />
  );
};

export default Register;
