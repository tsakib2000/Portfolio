/* eslint-disable react/prop-types */

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  useEffect(() => {
    AOS.init();
  });
  const { id, title, projectUrl, image } = project;
  return (
    <div
      data-aos="fade-right"
      className="card glass group shadow-xl rounded-none "
    >
      <figure>
        <img
          className="group-hover:scale-110 transition-transform duration-300 "
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{title}</h2>
        <span>
          Check Out live site{" "}
          <a href={projectUrl} className="btn-xs btn" target="_blank">
            👉click here
          </a>
        </span>
        <div className="card-actions justify-start mt-4 flex-1">
          <Link
            to={`/details/${id}`}
            className="btn bg-purple-600 hover:bg-purple-700 text-white border-none"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
