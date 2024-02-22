import React, { useState } from "react";
import Navbar from "../navigation/navbar";
import Sidebar from "../navigation/sidebar";
import About from "./about";
import Education from "./education";
import Experience from "./experience";
import Footer from "../navigation/footer";
import HeroSection from "./hero";
import Projects from "./projects";
import Skills from "./skills";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
