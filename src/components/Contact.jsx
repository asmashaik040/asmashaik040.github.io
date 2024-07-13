import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  return (
    <>
      <section id="contact" className="m-8">
        <div className="text-center mb-12 text-3xl font-bold tracking-tight sm:text-4xl">Contact at</div>
        <div className="container">
          <div className="single-contact-box">
            <div
              className="text-center fs-2 flex justify-between items-center max-w-40"
              style={{ margin: "2rem auto" }}
            >
              <a target="_blank" href="mailto:asmashaik040">
                <IoIosMail className="h-8 w-8 text-yellow-400 hover:text-white duration-300" />
              </a>

              <a href="https://www.linkedin.com/in/asma-shaik/">
                <FaLinkedinIn className="h-8 w-8 text-yellow-400 hover:text-white duration-300" />
              </a>
              <a href="https://github.com/asmashaik040">
                <FaGithub className="h-8 w-8 text-yellow-400 hover:text-white duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
