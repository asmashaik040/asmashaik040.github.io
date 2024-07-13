import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Technologies from "./Technologies";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Technologies />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <Outlet />
    </>
  );
};
export default MainLayout;
