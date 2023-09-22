import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1ci7oOibV_ODn2FaEd51Qu0N3Z0PnYI8",
  authDomain: "portfolio-b67d7.firebaseapp.com",
  projectId: "portfolio-b67d7",
  storageBucket: "portfolio-b67d7.appspot.com",
  messagingSenderId: "301933942445",
  appId: "1:301933942445:web:3935ab95553dc963d15824",
  measurementId: "G-7MWT4VXFBC",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
