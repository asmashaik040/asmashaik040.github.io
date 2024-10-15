import {
  FaReact,
  FaBootstrap,
  FaHtml5,
  FaGitAlt,
  FaJava,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiJquery,
  SiVite,
  SiApacheant,
  SiApachemaven,
  SiPostman,
  SiTypescript,
  SiThreedotjs,
  SiNextdotjs,
} from "react-icons/si";
import { GrServices } from "react-icons/gr";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";

const Technologies = () => {
  const listStyle =
    "border-4 border-white border-dashed p-2 flex justify-evenly items-center hover:bg-slate-800/50";
  const gridStyle = "h-16 w-12 text-yellow-400";
  const techStack = [
    { name: "React JS", iconref: <FaReact className={gridStyle} /> },
    {
      name: "Tailwind CSS",
      iconref: <RiTailwindCssFill className={gridStyle} />,
    },
    { name: "Boostrap", iconref: <FaBootstrap className={gridStyle} /> },
    { name: "HTML5", iconref: <FaHtml5 className={gridStyle} /> },
    { name: "CSS3", iconref: <IoLogoCss3 className={gridStyle} /> },
    { name: "Javascript", iconref: <IoLogoJavascript className={gridStyle} /> },
    { name: "Typescript", iconref: <SiTypescript className={gridStyle} /> },
    { name: "jQuery", iconref: <SiJquery className={gridStyle} /> },
    { name: "Three JS", iconref: <SiThreedotjs className={gridStyle} /> },
    { name: "Next JS", iconref: <SiNextdotjs className={gridStyle} /> },
    { name: "Vite", iconref: <SiVite className={gridStyle} /> },
    { name: "Java", iconref: <FaJava className={gridStyle} /> },
    { name: "Spring Boot", iconref: <SiSpringboot className={gridStyle} /> },
    { name: "MicroServices", iconref: <GrServices className={gridStyle} /> },
    { name: "Apache Ant", iconref: <SiApacheant className={gridStyle} /> },
    { name: "Maven", iconref: <SiApachemaven className={gridStyle} /> },
    { name: "Git", iconref: <FaGitAlt className={gridStyle} /> },
    { name: "Postman", iconref: <SiPostman className={gridStyle} /> },
  ];

  return (
    <>
      <section id="skills" className="pt-28">
        <h1 className="text-center mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
          My Skills
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 m-8">
          {techStack.map((item) => (
            <div className={listStyle} key={item.name}>
              {item.iconref} {item.name}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Technologies;
