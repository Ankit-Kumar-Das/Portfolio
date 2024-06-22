import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Netflix Clone",
      description: "Description for project one.",
      image: "https://via.placeholder.com/300",
      github: "#",
    },
    {
      id: 2,
      title: "Movie Searching App",
      description: "Description for project two.",
      image: "https://via.placeholder.com/300",
      github: "#",
    },
    // Add more projects as needed
  ];

  return (
    <>
   
             <div className="h-[100vh] text-white  mb-20 pt-20 lg:mx-[150px]">
      <div className="container mx-auto px-4 lg:pt-[100px]">
        <h1 className="text-3xl font-semibold text-center pb-20">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:mx-[150px] lg:grid-cols-2 gap-8">
          {projects.map((project,id) => (
            <div key={id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border-2 p-2">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h2 className="text-2xl font-bold">{project.title}</h2>
                <p className="mt-2">{project.description}</p>
                <div className="mt-4 flex justify-between">
                  
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
        
    </> 
     
  )
}

export default Projects;
