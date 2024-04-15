import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Project } from "../types/types";
import classNames from "classnames";

interface props {
  project: Project;
}

const ProjectCard = ({ project }: props) => {
  return (
    <article className="max-w-[21rem] h-[34rem] bg-slate-800 rounded-xl shadow-lg shadow-gray-600 grid grid-rows-3 text-white mx-auto">
      <img
        src={project.image}
        alt={project.title}
        className="rounded w-[85%] lg:w-[17rem] mx-auto pt-5"
      />
      <div className="w-10/12 mx-auto">
        <h2 className="font-semibold text-white text-center bg-slate-600">
          {project.title}
        </h2>
        <div className="flex gap-1 h-9 mt-3">
          {project?.stack?.map((icon) => (
            <img
              src={`/${icon}.svg`}
              alt={icon}
              title={icon}
              className="hover:scale-105 duration-200"
            />
          ))}
        </div>
        <p className="mt-3">{project.description}</p>
      </div>
      <div className="w-10/12 mx-auto relative top-16 flex justify-between items-center mb-8">
        <Link
          to={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={classNames({
            "bg-slate-800 hover:bg-slate-700 active:bg-slate-800 active:duration-100 hover:px-3 hover:pr-8 duration-300 py-2 rounded-lg":
              true,
            "hover:after:content-arrow hover:after:animate-fade-in-fast after:absolute after:left-[38.5%] after:top-[44%]":
              true,
          })}
        >
          Visit Website
        </Link>
        <Link
          to={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-end gap-1 hover:underline-offset-8 hover:opacity-80 cursor-pointer mr-2  duration-300"
        >
          <BsGithub size={27} className="cursor-pointer" />
          Github
        </Link>
      </div>
    </article>
  );
};

export default ProjectCard;
