import projectsData from "../../db.json";
import html from "/html.svg";
import css from "/css.svg";
import scss from "/scss.svg";
import tailwind from "/tailwind.svg";
import query from "/react-query.svg";
import redux from "/redux.svg";
import { FaReact } from "react-icons/fa";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <section className="w-8/12 mx-auto mb-10 max-sm:w-9/12">
      <div className="flex gap-8 justify-center mt-10 max-sm:hidden fade-in">
        <img src={html} alt="html-logo" className="w-12" />
        <img src={css} alt="css-logo" className="w-12" />
        <img src={query} alt="react-query-logo" className="w-12" />
        <FaReact size={100} className="text-cyan-400" />
        <img src={redux} alt="redux-logo" className="w-12" />
        <img src={scss} alt="scss-logo" className="w-12" />
        <img src={tailwind} alt="tailwind-logo" className="w-12" />
      </div>
      <div className="grid grid-cols-3 gap-10 mt-10 max-md:flex max-md:flex-col max-xl:grid-cols-2 slide-up">
        {projectsData.projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
