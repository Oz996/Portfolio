import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Clone } from "../types/types";

interface props {
  clone: Clone;
}

const CloneCard = ({ clone }: props) => {
  return (
    <article className="border rounded w-[19rem] h-[28rem] grid grid-rows-3 shadow-2xl mx-auto">
      <figure>
        <img src={clone.image} alt={clone.title} />
      </figure>
      <div className="p-4 px-5">
        <h2 className=" text-center font-semibold mb-4">{clone.title}</h2>
        <p>{clone.description}</p>
      </div>
      <div className="flex justify-between items-end p-4 px-5">
        <Link
          to={clone.link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 w-[6.5rem] bg-gray-600 rounded-sm text-white text-center hover:bg-gray-500 transition-all duration-300"
        >
          Visit
        </Link>
        <Link
          to={clone.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 p-2 px-4 bg-gray-600 rounded-sm text-white hover:bg-gray-500 transition-all duration-300"
        >
          <BsGithub size={18} />
          Github
        </Link>
      </div>
    </article>
  );
};

export default CloneCard;
