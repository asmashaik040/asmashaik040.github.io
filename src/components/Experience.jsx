const Experience = () => {
  const respListStyle = "mr-1.5 mt-2 list-disc";
  const techStyle =
    "flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-yellow-400 ";
  const expList = [
    {
      companyName: "ThoughtFocus, Bangalore",
      activeYears: "2022 — 2024",
      role: "Lead Front End Developer",
      resposibilities: [
        {
          itemNo: 1,
          resp: "Led the development of pixel perfect product pages with styled components by transforming Figma files using jQuery, JavaScript, HTML and CSS where lenders can easily access the technology to meet consumer demands for a modern mortgage experience.",
        },
        {
          itemNo: 2,
          resp: "Led the development of several products E2E, from identifying system requirements and partner dependencies to workload balancing, software implementation, and testing.",
        },
        {
          itemNo: 3,
          resp: "Integrating Xactus services with third party ICE integration platform to seamlessly offer product services through secure API based technology.",
        },
        {
          itemNo: 4,
          resp: "ContinuousIntegration/Deployment Pipeline integration, pull requests, code reviews.",
        },
        {
          itemNo: 5,
          resp: "Facilitated onboarding and mentorship of junior developers by resolving problems, enforcing branch rules and setting up a development environment locally on each developer’s device.",
        },
        {
          itemNo: 6,
          resp: "Resolved merge conflicts and improved development workflows, providing assistance to other developers.",
        },
        {
          itemNo: 7,
          resp: "Improvedteamcollaboration and knowledge sharing by explaining features and best practices.",
        },
      ],
      techUsed: [
        "JavaScript",
        "HTML & CSS",
        "jQuery",
        "Boostrap",
        "Ant",
        "Struts",
        "Postman",
        "Agile",
        "Unit Testing",
      ],
    },
    {
      companyName: "Tata Consultancy Services, Chennai",
      activeYears: "2019 — 2021",
      role: "Back End Developer",
      resposibilities: [
        {
          itemNo: 1,
          resp: "Led the development of multiple enterprise- level micro service APIs applications of CITI Mobile Banking Application using the latest technologies of Java 8, Spring Framework Integration that serves millions of banking requests every day.",
        },
        {
          itemNo: 2,
          resp: "Integrated Splunk Logging, enriching system metrics and correlating APIs with vector contexts, enabling in depth service logging.",
        },
        {
          itemNo: 3,
          resp: "Unit, Integration, E2E Testing.",
        },
        {
          itemNo: 4,
          resp: "Facilitated onboarding and mentorship of new developers by resolving problems, setting up a development environment locally.",
        },
      ],
      techUsed: [
        "Java",
        "Spring Boot",
        "Microservices",
        "Mockito",
        "Maven",
        "MySQL",
        "Postman",
        "Rest APIs",
        "Splunk",
        "Jenkins",
      ],
    },
  ];
  return (
    <>
      <section id="experience" className="pt-28 m-8">
        <div className="text-center fs-2 fw-bold">
          <h1 className="text-center mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
            Experience
          </h1>
        </div>
        {expList.map((expItem, index) => (
          <div
            className="my-12 group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
            key={index}
          >
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <header
              className="z-10 mb-2 mt-1 text-base font-semibold uppercase tracking-wide text-yellow-400  sm:col-span-2"
              aria-label="2018 to 2024"
            >
              {expItem.activeYears}
            </header>
            <div className="z-10 sm:col-span-6">
              <h2 className="font-semibold leading-snug text-yellow-400">
                <div>
                  <span>{expItem.role}</span>
                </div>
                <div>
                  <div className="text-slate-500" aria-hidden="true">
                    {expItem.companyName}
                  </div>
                </div>
              </h2>
              <ul className="mt-2 flex flex-wrap">
                {expItem.resposibilities.map((resp) => (
                  <li className={respListStyle} key={resp.itemNo}>
                    {resp.resp}
                  </li>
                ))}
              </ul>
              <ul className="mt-2 flex flex-wrap">
                {expItem.techUsed.map((tech, techIndex) => (
                  <li className={techStyle} key={techIndex}>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Experience;
