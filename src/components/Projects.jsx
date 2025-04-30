import React from "react";
import { FaGithub, FaExternalLinkAlt, FaCode, FaChartLine } from "react-icons/fa";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB.",
    tech: ["React", "Node.js", "MongoDB"],
    imageUrl: "https://res.cloudinary.com/defazdfkp/image/upload/v1745261767/Screenshot_2025-03-13_200410_vnwvlt.png",
    githubUrl: "https://github.com/programmercodee/BlinkBasket",
    liveUrl: "https://blink-basket-bwf5-git-main-brijeshs-projects-7349bf66.vercel.app",
    icon: <FaCode className="text-xl text-white" />
  },
  {
    title: "Social Media Dashboard",
    description: "Real-time social media analytics with dynamic data visualization.",
    tech: ["React", "Redux", "D3.js"],
    imageUrl: "https://img.freepik.com/free-vector/social-tree-concept-illustration_114360-4898.jpg",
    githubUrl: "#",
    liveUrl: "#",
    icon: <FaChartLine className="text-xl text-white" />
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6 content-wrapper">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 animate-gradient-x">
            Featured Projects
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative glass-card rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    className="text-indigo-400 hover:text-indigo-300 transition-colors flex items-center"
                  >
                    <FaGithub className="mr-2" />
                    View Code
                  </a>
                  <a
                    href={project.liveUrl}
                    className="text-indigo-400 hover:text-indigo-300 transition-colors flex items-center"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                  {project.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
