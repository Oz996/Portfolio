import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkThemeContext } from "../context/DarkThemeContext";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  const { theme } = useContext(DarkThemeContext);
  return (
    <footer
      className="absolute right-0 left-0 bottom-0 pb-3 bg-slate-200"
      style={{ background: theme.bg2 }}
    >
      <div className="w-8/12 mx-auto flex justify-center items-center gap-5 mt-2 flex-col">
        <div className="flex flex-col items-center">
          <h1>Contact me at</h1>
          <h2 className="font-semibold">nguven996@gmail.com</h2>
        </div>
        <div className="flex gap-3">
          <Link
            to="https://www.linkedin.com/in/özgun-güven-54653524a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin
              size={20}
              className="hover:text-purple-400 hover:translate-x-[2px] hover:translate-y-[-1px] duration-300"
            />
          </Link>
          <Link
            to="https://github.com/Oz996?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub
              size={19}
              className="hover:text-purple-400 hover:translate-x-[2px] hover:translate-y-[-1px] duration-300"
            />
          </Link>
        </div>
        <div>
          <ul className="flex gap-4 text-sm">
            <Link to="/">
              <li className="hover:underline text-purple-400 hover:text-purple-400">
                Home
              </li>
            </Link>
            <Link to="projects">
              <li className="hover:underline text-purple-400 hover:text-purple-400">
                Projects
              </li>
            </Link>
            <Link to="clones">
              <li className="hover:underline text-purple-400 hover:text-purple-400">
                Clones
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
