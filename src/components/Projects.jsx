import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

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
        <div>
          <ul className="group/list">
            <li className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <Link
                      to="https://muskaan-dining.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-baseline font-medium leading-tight text-yellow-400 hover:text-slate-200 focus-visible:text-slate-200  group/link text-base"
                    >
                      Muskaan Fine Dining <FaExternalLinkAlt className="ml-3" />
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">
                    Restaurant's web page, meticulously crafted with React JS,
                    Tailwind CSS, and powered by Vite! <br></br>
                    From our mouthwatering menu displayed with beautiful
                    animations to our easy-to-navigate reservation system.
                    <br></br>
                    With responsive design at its core, our site adapts
                    flawlessly across all devices.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Projects;
