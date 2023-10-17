import { useEffect, useRef, useState } from "react";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { Outlet, NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { getAuth, signOut } from "firebase/auth";
import { RxHamburgerMenu } from "react-icons/rx";
import { useTheme } from "../hooks/useTheme";
import { toast } from "react-toastify";

const Header = () => {
  const [hamburger, setHamburger] = useState(false);
  const { darkTheme, setDarkTheme } = useTheme();
  const { isLoggedIn, signOutUser } = useAuth();
  const navRef = useRef<HTMLUListElement | null>(null);

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        signOutUser();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const closeNavMenu = () => {
    setHamburger(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setHamburger(false);
      }
    });
  }, []);

  useEffect(() => {
    if (navRef.current) {
      if (hamburger) {
        navRef.current.classList.remove("max-sm:hidden");
        navRef.current.classList.add("max-sm:flex");
      } else {
        navRef.current.classList.add("max-sm:hidden");
        navRef.current.classList.remove("max-sm:flex");
      }
    }
  }, [hamburger]);
  return (
    <>
      <nav className="border-b border-gray-300 py-5 h-16">
        <RxHamburgerMenu
          size={25}
          className="hidden max-sm:block ml-16 cursor-pointer"
          onClick={() => setHamburger((prev) => !prev)}
        />
        <ul
          ref={navRef}
          className={`w-8/12 mx-auto flex font-semibold ${
            !darkTheme
              ? "max-sm:bg-white"
              : "max-sm:bg-gray-950 max-sm:border-none"
          } ${
            hamburger &&
            "max-sm:flex-col max-sm:p-5  max-sm:absolute max-sm:left-8 z-10 max-sm:w-40 rounded max-sm:shadow-lg max-sm:border max-sm:gap-2 max-sm:text-xl"
          }`}
        >
          <li>
            <NavLink
              to="/"
              className="hover:text-purple-300 duration-200"
              onClick={closeNavMenu}
            >
              Home
            </NavLink>
          </li>
          <div className="flex w-8/12 mx-auto gap-10 max-sm:flex-col max-sm:mx-0 max-sm:gap-2">
            <li>
              <NavLink
                to="projects"
                className="hover:text-purple-300 duration-200"
                onClick={closeNavMenu}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="clones"
                className="hover:text-purple-300 duration-200"
                onClick={closeNavMenu}
              >
                Clones
              </NavLink>
            </li>
          </div>
          <div>
            {!isLoggedIn ? (
              <li>
                <NavLink
                  className={`bg-purple-400 p-2 px-4 rounded hover:bg-purple-300 duration-300 text-white max-sm:bg-inherit ${
                    !darkTheme && "max-sm:text-black"
                  } max-sm:p-0 max-sm:hover:text-purple-300 max-sm:hover:bg-inherit`}
                  to="/login"
                  onClick={closeNavMenu}
                >
                  Login
                </NavLink>
              </li>
            ) : (
              <li>
                <span
                  className={`bg-purple-400 p-2 px-4 rounded hover:bg-purple-300 duration-300 text-white cursor-pointer max-sm:bg-inherit ${
                    !darkTheme && "max-sm:text-black"
                  } max-sm:p-0 max-sm:hover:text-purple-300 max-sm:hover:bg-inherit`}
                  onClick={() => {
                    handleLogout();
                    closeNavMenu();
                    toast("✔️ Signed out");
                  }}
                >
                  Logout
                </span>
              </li>
            )}
          </div>
          <div className="ml-3 max-sm:m-0">
            {!darkTheme ? (
              <BsSunFill
                onClick={() => setDarkTheme(true)}
                size={25}
                className="cursor-pointer hover:opacity-80 duration-200"
              />
            ) : (
              <BsFillMoonFill
                onClick={() => setDarkTheme(false)}
                size={25}
                className="cursor-pointer hover:opacity-80 duration-200"
              />
            )}
          </div>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Header;
