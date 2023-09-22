import { useEffect } from "react";
import { TbError404 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(-1);
    }, 2000);
  });
  return (
    <section className="flex flex-col justify-center items-center h-[40rem]">
      <TbError404 size={250} className="text-purple-400" />
      <h1 className="font-bold text-lg">
        Looks like this page does not exist...
      </h1>
    </section>
  );
};

export default NotFound;
