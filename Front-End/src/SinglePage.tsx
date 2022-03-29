import "./Styles/App.css";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Work from "./Components/Work/Work";
import Contact from "./Components/Contact/Contact";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import Sidebar from "./Components/Sidebar/Sidebar";
import Footer from "./Components/Footer/Footer";
import MobileNavbar from "./Components/MobileNavbar/MobileNavbar";
import { useState } from "react";

const SinglePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <MobileNavbar isOpen={isOpen} toggle={toggle} />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
      <Sidebar />
      <ScrollToTop />
    </>
  );
};

export default SinglePage;
