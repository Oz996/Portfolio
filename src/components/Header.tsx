import { useEffect, useRef, useState } from "react";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { Outlet, NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { getAuth, signOut } from "firebase/auth";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useTheme } from "../hooks/useTheme";
import { toast } from "react-toastify";
import { useMediaQuery } from "@uidotdev/usehooks";
import classNames from "classnames";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const { darkTheme, setDarkTheme } = useTheme();
  const { isLoggedIn, signOutUser } = useAuth();
  const navRef = useRef<HTMLUListElement | null>(null);

  const isMobile = useMediaQuery("only screen and (max-width: 640px)");

  console.log(isMobile);

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
    setMobileNav(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMobileNav(false);
      }
    });
  }, []);

  return (
    <>
      <nav className="border-b border-gray-300 py-5 h-16">
        {isMobile && !mobileNav && (
          <RxHamburgerMenu
            size={25}
            className="ml-16 cursor-pointer"
            onClick={() => setMobileNav(true)}
          />
        )}
        {isMobile && mobileNav && (
          <IoMdClose
            size={25}
            className="ml-16 cursor-pointer"
            onClick={() => setMobileNav(false)}
          />
        )}
        <ul
          ref={navRef}
          className={classNames({
            "w-8/12 mx-auto gap-5 font-semibold flex": true,
            " max-sm:hidden": isMobile && !mobileNav,
            "max-sm:bg-gray-950 max-sm:border-none": darkTheme,
            "max-sm:bg-white": !darkTheme,
            "max-sm:flex-col max-sm:p-5 max-sm:absolute top-[3.5rem] left-0 right-0 w-full z-10 rounded max-sm:shadow-lg max-sm:border max-sm:gap-2 max-sm:text-lg text-center":
              mobileNav && isMobile,
          })}
        >
          <li>
            <NavLink
              to="/"
              className="hover:text-purple-300 duration-300"
              onClick={closeNavMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="projects"
              className="hover:text-purple-300 duration-300"
              onClick={closeNavMenu}
            >
              Projects
            </NavLink>
          </li>
          {!isMobile && (
            <div className="flex w-8/12 mx-auto gap-10 max-sm:flex-col max-sm:mx-0 max-sm:gap-2"></div>
          )}
          <div>
            {!isLoggedIn ? (
              <li>
                <NavLink
                  className={classNames({
                    "bg-purple-400 p-2 px-4 rounded hover:bg-purple-300 duration-300 text-white max-sm:bg-inherit max-sm:p-0 max-sm:hover:text-purple-300 max-sm:hover:bg-inherit":
                      true,
                    "max-sm:text-black": !darkTheme,
                  })}
                  to="/login"
                  onClick={closeNavMenu}
                >
                  Login
                </NavLink>
              </li>
            ) : (
              <li>
                <span
                  className={classNames({
                    "bg-purple-400 p-2 px-4 rounded hover:bg-purple-300 duration-300 text-white cursor-pointer max-sm:bg-inherit max-sm:p-0 max-sm:hover:text-purple-300 max-sm:hover:bg-inherit":
                      true,
                    "max-sm:text-black": !darkTheme,
                  })}
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
          <div className="max-sm:m-0 self-center">
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
