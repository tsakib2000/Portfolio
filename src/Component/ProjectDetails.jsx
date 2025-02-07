import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState({});
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        const singleProject = data?.find((project) => id == project.id);
        setProject(singleProject);
      });
  }, [id]);
  const {
    title,
    description,
    projectUrl,
    image,
    frontEndRepositoryLink,
    keyFeatures,
    npmPackages,
  } = project || {};
  return (
    <div className="container mx-auto px-4 py-8 !text-black">
      {!project?.id ? (
        <div className="text-center text-gray-500">
          Loading project details...
        </div>
      ) : (
        <div className="card bg-base-100 shadow-xl rounded-lg p-6">
          {/* Project Header */}
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="flex-shrink-0 w-full lg:w-1/2">
              <img src={image} alt={title} className="rounded-lg w-full" />
            </div>
            <div className="flex-grow">
              <h1 className="text-3xl font-bold">{title}</h1>
              <p className="text-gray-600 mt-4">{description}</p>
              <div className="flex gap-4 justify-center md:justify-start mt-6">
                <a
                  href={projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-gradient-to-br from-green-400 to-blue-600 text-white hover:from-green-500 hover:to-blue-700"
                >
                  Live Site
                </a>
                <a
                  href={frontEndRepositoryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-gradient-to-br from-teal-300 to-lime-300 text-gray-900 text-white hover:from-teal-400 hover:to-lime-400"
                >
                  Repository
                </a>
            
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="list-disc pl-6 space-y-2">
              {keyFeatures?.map((feature, index) => (
                <li key={index} className="text-gray-700">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* NPM Packages Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">NPM Packages Used</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {npmPackages?.map((pkg, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md"
                >
                  {/* Placeholder SVG Icon */}
                  <div className="w-10 h-10 mr-4 flex items-center justify-center bg-blue-100 text-blue-500 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM10 17l5-5-5-5v10z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{pkg.name}</h3>
                    <p className="text-gray-600">{pkg.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Link to="/" className="btn  bg-purple-600 hover:bg-purple-700 text-white mt-4">
            Back To Home
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
