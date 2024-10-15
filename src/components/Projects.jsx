import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import muskaan from "../images/restaurant.png";

const Projects = () => {
  const techStack = [
    {
      id: "1",
      name: "Fizzi - 3D e-commerce landing Page",
      imgsrc: "/assets/fizzi.png",
      desc: "Fizzi is a 3D animated e-commerce landing page for the fictional soda brand. Its sleek design, seamless animations, and overall user experience set a high standard, serving as a inspiration for future modern applications or websites.",
      techStack: "Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, GSAP and Prismic, drei, Three.js, React.js and React-three-fiber",
      href: "https://fizzi-3d-soda.netlify.app/",
    },
    {
      id: "2",
      name: "CarePulse - Health Management System",
      imgsrc: "/assets/carePulse.png",
      desc: "An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for patients.",
      techStack: "With a focus on efficiency, CarePulse integrantes complex forms by using Next.js, Tailwind CSS, TypeScript, React.js and shadCN that enhance",
      href: "https://health-carepulse.netlify.app/",
    },
    {
      id: "3",
      name: "Aurora - Modern UI Web Interface",
      imgsrc: "/assets/aurora.png",
      desc: "Aurora is a Software-as-a-Service application that empowers users to create stunning modern UI/UX principles. Its sleek design, seamless animations, and overall user experience set a high standard, serving as a reference or inspiration for future modern applications or websites in general.",
      techStack: "Built with React.js, Vite, Tailwind CSS and JavaScript that exemplifies modern UI/UX principles.",
      href: "https://aurora-saas.netlify.app/",
    },
    {
      id: "4",
      name: "Muskaan - Online Dining Platform",
      imgsrc: "/assets/restaurant.png",
      desc: "Muskaan is a online dining platform that offers users a centralized dashboard. It allows users to connect to restuarant management, view the services and food offered, and seamlessly reserve to experience fine dining.",
      techStack: "Built with React.js, Vite, Tailwind CSS and JavaScript ensures a smooth and dining experience, tailored to meet the needs of modern consumers.",
      href: "https://muskaan-dining.netlify.app/",
    },
    {
      id: "5",
      name: "ReactJobs - Job Listing Portal",
      imgsrc: "/assets/jobs.png",
      desc: "ReactJobs is a jobs listing project where user can view the job listing, employer can add, edit and delete jobs. Using json-server for mock backend.",
      techStack: "With ReactJobs, users can experience the future of collaboration, where multiple employers can post job opportunities to work together, by using React.js and Tailwind CSS latest features.",
      href: "https://jobs-portal-reactjs.netlify.app/",
    },
  ];

  return (
    <>
      <section
        id="projects"
        className="m-8 mb-16 pt-8 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="Selected projects"
      >
        <div className="bg-black bg-opacity-50 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center fs-2 fw-bold">
              <h1 className="text-center mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
                Projects
              </h1>
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {techStack.map((project) => (
                <article
                  key={project.id}
                  className="flex max-w-xl flex-col items-start justify-between"
                >
                  <div className="relative flex items-center gap-x-4">
                    <img alt={project.id} src={project.imgsrc} />
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <Link
                        to={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-baseline font-medium leading-tight text-yellow-400 hover:text-slate-200 focus-visible:text-slate-200  group/link text-base"
                      >
                        <span className="absolute inset-0" />
                        {project.name}
                        <FaExternalLinkAlt className="ml-3" />
                      </Link>
                    </h3>
                    <p className="mt-5 text-sm leading-6">
                      {project.desc}
                    </p>
                    
                    <p className="mt-5 text-sm leading-6">
                      {project.techStack}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
