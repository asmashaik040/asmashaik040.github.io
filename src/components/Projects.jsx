import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import muskaan from "../images/restaurant.png";

const Projects = () => {
  return (
    <>
      <section
        id="projects"
        className="m-8 mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="Selected projects"
      >
        <div className="text-center fs-2 fw-bold">
          <h1 className="text-center mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
            Projects
          </h1>
        </div>
        <div className="flex-col md:flex md:flex-row">
          <div className="relative flex-1">
            <img src={muskaan} alt="Image 1" className="w-full h-auto" />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
              <h2 className="text-xl font-bold">
                <Link
                  to="https://muskaan-dining.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-baseline font-medium leading-tight text-yellow-400 hover:text-slate-200 focus-visible:text-slate-200  group/link text-base"
                >
                  Muskaan Fine Dining <FaExternalLinkAlt className="ml-3" />
                </Link>
              </h2>
              <p className="mt-2 text-xs">
                Restaurant's web page, crafted with React JS, Tailwind CSS with
                our mouthwatering menu displayed with beautiful animations & easy-to-navigate reservation system.
              </p>
            </div>
          </div>
          <div className="relative flex-1 mt-16 md:ml-16 md:mt-0">
            <img src={muskaan} alt="Image 2" className="w-full h-auto" />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
              <h2 className="text-xl font-bold">
                <Link
                  to="https://muskaan-dining.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-baseline font-medium leading-tight text-yellow-400 hover:text-slate-200 focus-visible:text-slate-200  group/link text-base"
                >
                  Muskaan Fine Dining <FaExternalLinkAlt className="ml-3" />
                </Link>
              </h2>
              <p className="mt-2 text-xs">
                Restaurant's web page, crafted with React JS, Tailwind CSS with
                our mouthwatering menu displayed with beautiful animations & easy-to-navigate reservation system.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
