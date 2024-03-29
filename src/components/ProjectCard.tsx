import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Project } from "../types/types";

interface props {
  project: Project;
}

const ProjectCard = ({ project }: props) => {
  return (
    <article className="w-[21rem] h-[34rem] bg-slate-800 rounded-xl shadow-lg shadow-gray-600 grid grid-rows-3 mx-auto">
      <figure className="w-[18rem] mx-auto my-5">
        <img src={project.image} alt={project.title} className="rounded" />
      </figure>
      <div className="w-10/12 mx-auto">
        <h2 className="font-semibold text-white text-center bg-slate-600">
          {project.title}
        </h2>
        <p className="text-white mt-5">{project.description}</p>
      </div>
      <div className="w-10/12 mx-auto relative top-16 flex justify-between items-center mb-8">
        <Link
          to={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-800 hover:bg-white hover:text-black text-white duration-300 p-2 rounded fontsem"
        >
          Visit Website
        </Link>
        <Link
          to={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-end text-white gap-1 hover:underline-offset-8 hover:opacity-80 cursor-pointer mr-2  duration-300"
        >
          <BsGithub size={27} className="text-white cursor-pointer" />
          Github
        </Link>
      </div>
    </article>
  );
};

export default ProjectCard;
