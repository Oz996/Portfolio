import { useContext } from "react";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { Outlet, NavLink } from "react-router-dom";
import { DarkThemeContext } from "../context/DarkThemeContext";
import Footer from "./Footer";

const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(DarkThemeContext);
  return (
    <>
      <nav className="border-b border-gray-300 py-5 h-16">
        <div className="w-8/12 mx-auto flex font-semibold">
          <NavLink to="/" className="hover:text-purple-300 duration-200">
            Home
          </NavLink>
          <div className="flex w-8/12 mx-auto gap-10">
            <NavLink
              to="projects"
              className="hover:text-purple-300 duration-200"
            >
              Projects
            </NavLink>
            <NavLink to="clones" className="hover:text-purple-300 duration-200">
              Clones
            </NavLink>
          </div>
          <div>
            {!darkTheme ? (
              <BsSunFill
                onClick={() => setDarkTheme(true)}
                size={23}
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
        </div>
      </nav>
      <Footer />
      <Outlet />
    </>
  );
};

export default Header;
