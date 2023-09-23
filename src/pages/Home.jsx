import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="flex w-8/12 mx-auto max-sm:w-11/12 max-sm:mx-5 duration-200 max-sm:flex-col-reverse">
      <div className="flex flex-col h-[53rem] justify-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-7xl font-semibold mb-6 max-sm:text-5xl slide-left max-sm:mt-[-20vh]">
            Özgün Güven
          </h1>
          <h2 className="text-3xl font-bold text-purple-400 slide-left">
            Frontend Developer
          </h2>
          <p className="w-[32rem] font leading-7 mt-2 mb-5 max-sm:w-11/12 slide-left font-one">
            Hi and welcome to my portfolio! Take a look at some of the projects
            and clones I've developed in my free time. I'm currently a student
            at KYH, eager to learn more and advance as a developer. Born and
            raised in Sweden. I'm fluent in both Swedish and English. Feel free
            to explore my work and reach out if you have any questions or
            opportunities.
          </p>
          <div className="flex gap-1 justify-start items-end w-7/12 cursor-pointer fade-in">
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
        <div className="flex gap-5 justify-start mt-10 fade-in-slow">
          <Link to="/projects">
            <button className="btn bg-purple-400 rounded font-semibold">
              Projects
            </button>
          </Link>
          <Link to="/clones">
            <button className="btn rounded font-semibold">Clones</button>
          </Link>
        </div>
        <p className="my-5 fade-in-slow">
          Contact me at: <b> nguven996@gmail.com</b>
        </p>
        <div className="flex gap-3 fade-in-slow">
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
      <div className="w-3/12 mt-[10rem] ml-[11vw] text-cyan-400 max-sm:mx-auto max-sm:my-0 max-sm:ml-0">
        <FaReact size={400} className="rotate max-sm:w-[20rem]" />
      </div>
    </main>
  );
};
export default Home;
