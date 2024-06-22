import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for hamburger menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center w-full h-[60px] bg-gray-500 font-semibold fixed top-0 lg:px-[150px] z-50 ">
        <section className="text-[30px] py-5 px-10 text-white">Ankit</section>
        
        <div className="md:hidden px-5 cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={30} className="text-white" /> : <FaBars size={30} className="text-white" />}
        </div>

        <section
          className={`flex flex-col md:flex-row items-center md:space-x-8 text-[20px] md:justify-between fixed md:relative top-[10px] left-0 w-full md:w-auto bg-gray-500 md:bg-transparent transition-all duration-300 ease-in-out ${
            isOpen ? "left-0" : "left-[-100%]"
          } md:left-0`}
        >
          <Link to="/" className="hover:text-blue-400 p-2" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-400 p-2" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/skills" className="hover:text-blue-400 p-2" onClick={toggleMenu}>
            Skills
          </Link>
          <Link to="/project" className="hover:text-blue-400 p-2" onClick={toggleMenu}>
            Projects
          </Link>
          <Link to="/contact" className="hover:text-blue-400 p-2" onClick={toggleMenu}>
            Contact
          </Link>
        </section>
      </div>
    </>
  );
};

export default Navbar;
