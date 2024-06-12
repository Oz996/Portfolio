import classNames from "classnames";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

const Home = () => {
  const { darkTheme } = useTheme();
  return (
    <main className="flex w-8/12 h-screen mx-auto max-sm:w-11/12 max-sm:mx-5 duration-200 max-sm:pt-24">
      <div className="flex flex-col pb-24 justify-center">
        <div className="flex flex-col over">
          <h1 className="text-7xl font-semibold mb-6 max-sm:text-5xl animate-slide-left max-sm:mt-[-20vh]">
            Özgün Güven
          </h1>
          <h2 className="text-3xl font-bold text-purple-400 animate-slide-left">
            Frontend Developer
          </h2>
          <p className="w-[32rem] max-sm:text-[15px] leading-7 mt-2 mb-5 max-sm:w-11/12 animate-slide-left poppins min-w-[19rem]">
            Hi and welcome to my portfolio! Take a look at some of the projects
            I've developed in my free time. I'm currently a student at KYH,
            eager to learn more and advance as a developer. Born and raised in
            Sweden. I'm fluent in both Swedish and English. Feel free to explore
            my work and reach out if you have any questions or opportunities.
          </p>
          <div className="flex gap-1 justify-start items-end w-7/12 cursor-pointer animate-fade-in">
            <Link
              to="https://github.com/Oz996/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline flex gap-1"
            >
              <BsGithub size={25} />
              Portfolio Github
            </Link>
          </div>
        </div>
        <div className="flex gap-5 justify-start mt-10 animate-fade-in-slow">
          <Link to="/projects">
            <button
              className={classNames({
                "p-2 px-5 text-white bg-purple-400 rounded font-semibold text-lg border border-transparent active:text-white active:bg-purple-400 active:border-transparent active:duration-75":
                  true,
                "hover:bg-white hover:text-black hover:border-gray-600 duration-300":
                  !darkTheme,
                "hover:bg-black hover:text-white hover:border-gray-300 duration-300":
                  darkTheme,
              })}
            >
              Projects
            </button>
          </Link>
        </div>
        <p className="my-5 animate-fade-in-slow">
          Contact me at: <b> nguven996@gmail.com</b>
        </p>
        <div className="flex gap-3 animate-fade-in-slow">
          <Link
            to="https://www.linkedin.com/in/özgun-güven-54653524a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to my LinkedIn acccount"
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
            aria-label="Link to my Github account"
          >
            <BsGithub
              size={19}
              className="hover:text-purple-400 hover:translate-x-[2px] hover:translate-y-[-1px] duration-300"
            />
          </Link>
        </div>
      </div>
      <div className="w-3/12 mt-[10rem] ml-[11vw] text-cyan-400 max-sm:mx-auto max-sm:my-0 max-sm:ml-0 tex">
        <FaReact size={400} className="animate-rotate max-md:hidden" />
      </div>
    </main>
  );
};
export default Home;
