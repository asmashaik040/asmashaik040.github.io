import {
  FaLongArrowAltUp, FaArrowCircleUp, FaArrowsAltV
} from "react-icons/fa";
import ScrollToTop from "./ScrollToTop";
const Footer = () => {
  return (
    <>
      <footer className="pb-5">
        <div className="text-center">
          <p>&copy; copyright, design and developed by Asma Shaik</p>
        </div>
        <div className="return-to-top">
          <ScrollToTop />
        </div>
      </footer>
    </>
  );
};

export default Footer;
