import React from "react";
import { Fade, Flip, Slide } from "react-awesome-reveal";
import Navbar from "./Navbar";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className="w-auto text-white h-auto px-6 py-20 mx-5 mb-5 mt-20 sm:py-32 lg:px-36 lg:py-48 lg:mx-[150px] ">
        <div className="text-3xl sm:text-4xl md:text-5xl">
          <Fade>
          <h1 className="font-bold">Hello,<br />I'm Ankit Kumar</h1>
          </Fade>
          <Slide>
          <h3 className="pt-4 text-yellow-500 text-2xl font-bold sm:text-3xl gradiant-text">Frontend Developer</h3>
          </Slide>
          <p className="pt-2 text-sm sm:text-lg mt-2">
            Hello! I am Ankit Kumar, a passionate Frontend Developer with a keen interest in building responsive and interactive web applications.
          </p>
          <button
            className="mt-3 p-2 rounded-lg text-sm font-bold bg-blue-600 hover:ring hover:ring-pink-500 hover:ring-offset-4 md:text-xl md:p-4 md:mt-10"
          >
            Download Resume
          </button>
        </div>
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
