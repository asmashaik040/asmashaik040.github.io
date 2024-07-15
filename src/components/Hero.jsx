const Hero = () => {
  return (
    <div id="about" className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-40">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            <span className="text-yellow-400">Asma </span>Shaik
          </h1>
          <p className="mt-6 text-lg leading-8">
            Senior Front-End Developer with 5 years of experience in
            creating seamless web applications, developing, and maintaining
            robust applications. <br></br>Proficient in JavaScript frameworks such as
            React JS and jQuery. <br></br>
            Passionate about clean code, responsive design, and staying
            up-to-date with industry trends.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="assets/ASMA_SHAIK.pdf"
              target="_blank"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Checkout My Resume
            </a>
            <a
              href="#projects"
              className="text-sm font-semibold leading-6"
            >
              Projects <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
