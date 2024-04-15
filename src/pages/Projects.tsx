import html from "/html.svg";
import css from "/css.svg";
import sass from "/Sass.svg";
import tailwind from "/Tailwind.svg";
import query from "/Tanstack Query.svg";
import redux from "/Redux Toolkit.svg";
import { FaReact } from "react-icons/fa";
import ProjectCard from "../components/ProjectCard";
import { collection, getDocs } from "firebase/firestore";
import { Project } from "../types/types";
import { useEffect, useState } from "react";
import { db } from "../firebase";

interface Projects extends Project {
  id: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Projects[]>([]);

  const fetchProjects = async () => {
    try {
      const projectsCollection = collection(db, "projects");
      const snapshot = await getDocs(projectsCollection);
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as Projects[];

      const sortedProjects = sortProjects(data);
      const projectsToDisplay = sortedProjects.filter(
        (project) => !project.isHidden
      );
      setProjects(projectsToDisplay);
    } catch (error) {
      console.error(error);
    }
  };

  const sortProjects = (arr: Projects[]) => {
    const sorted = arr.slice().sort((a, b) => a.orderId - b.orderId);
    return sorted;
  };

  useEffect(() => {
    fetchProjects();
  }, [db]);

  return (
    <section className="w-8/12 mx-auto mb-10 max-sm:w-full">
      <div className="flex gap-8 justify-center mt-10 max-sm:hidden animate-fade-in">
        <img src={html} title="HTML" alt="html-logo" className="w-12" />
        <img src={css} title="CSS" alt="css-logo" className="w-12" />
        <img
          src={query}
          title="Tanstack Query"
          alt="react-query-logo"
          className="w-12"
        />
        <FaReact size={100} title="React" className="text-cyan-400" />
        <img
          src={redux}
          title="Redux Toolkit"
          alt="redux-logo"
          className="w-12"
        />
        <img src={sass} title="Sass" alt="scss-logo" className="w-12" />
        <img
          src={tailwind}
          title="Tailwind"
          alt="tailwind-logo"
          className="w-12"
        />
      </div>
      <div className="grid grid-cols-3 gap-10 mt-10 max-md:flex max-md:flex-col max-xl:grid-cols-2 animate-slide-up">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="w-full flex justify-center">
        {/* <button
          onClick={() =>
            !showAll
              ? (setShowAll(true), scrollToBottom())
              : (setShowAll(false), scrollToTop())
          }
          className="btn fade-in mt-10 mb-10 bg-purple-400 rounded font-semibold text-lg px-3 py-1 flex justify-center items-center"
        >
          {!showAll ? (
            <>
              View More
              <FaCaretDown size={23} />
            </>
          ) : (
            <>
              View Less
              <FaCaretUp size={23} />
            </>
          )}
        </button> */}
      </div>
    </section>
  );
};

export default Projects;
