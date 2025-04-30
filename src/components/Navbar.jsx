import React, { useState } from "react";
import { FaHome, FaCode, FaProjectDiagram, FaEnvelope, FaFileAlt, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleResumeDownload = () => {
    // Replace 'resume.pdf' with your actual resume file name
    const resumeUrl = '/resume.pdf';

    // Create a temporary link element
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Brijesh_Resume.pdf'; // This will be the name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="fixed w-full z-50 top-0">
      {/* Navbar Background with Glassmorphism */}
      <div className="bg-gray-900/70 backdrop-blur-xl border-b border-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            {/* Logo Section */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <span className="text-xl font-bold text-white">&lt;/&gt;</span>
              </div>
              <span className="text-2xl font-bold">
                <span className="text-white">Mr Brijesh's</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500">Folio</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="group relative">
                <a href="#home" className="text-gray-300 hover:text-white transition-colors py-2">
                  <span className="relative z-10">Home</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </div>
              <div className="group relative">
                <a href="#skills" className="text-gray-300 hover:text-white transition-colors py-2">
                  <span className="relative z-10">Skills</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </div>
              <div className="group relative">
                <a href="#projects" className="text-gray-300 hover:text-white transition-colors py-2">
                  <span className="relative z-10">Projects</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </div>
              <div className="group relative">
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors py-2">
                  <span className="relative z-10">Contact</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </div>
              {/* Resume Button */}
              <button
                onClick={handleResumeDownload}
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-indigo-500 to-cyan-500 hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
              >
                <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  <span className="relative text-white flex items-center">
                    <FaFileAlt className="mr-2" />
                    Resume
                  </span>
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-white focus:outline-none"
            >
              <div className="w-6 h-6 flex flex-col justify-between transform transition-transform duration-300">
                <span className="w-full h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 transform transition-transform duration-300"></span>
                <span className="w-full h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 transform transition-transform duration-300"></span>
                <span className="w-full h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 transform transition-transform duration-300"></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/50">
            <div className="container mx-auto px-6 py-4">
              <div className="flex flex-col space-y-4">
                <a
                  href="#home"
                  className="flex items-center text-gray-300 hover:text-white transition-colors py-3 px-4 hover:bg-gray-800/50 rounded-lg group"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <FaHome className="text-white" />
                  </div>
                  <span className="font-medium">Home</span>
                </a>
                <a
                  href="#skills"
                  className="flex items-center text-gray-300 hover:text-white transition-colors py-3 px-4 hover:bg-gray-800/50 rounded-lg group"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <FaCode className="text-white" />
                  </div>
                  <span className="font-medium">Skills</span>
                </a>
                <a
                  href="#projects"
                  className="flex items-center text-gray-300 hover:text-white transition-colors py-3 px-4 hover:bg-gray-800/50 rounded-lg group"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <FaProjectDiagram className="text-white" />
                  </div>
                  <span className="font-medium">Projects</span>
                </a>
                <a
                  href="#contact"
                  className="flex items-center text-gray-300 hover:text-white transition-colors py-3 px-4 hover:bg-gray-800/50 rounded-lg group"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <FaEnvelope className="text-white" />
                  </div>
                  <span className="font-medium">Contact</span>
                </a>
                <button
                  onClick={handleResumeDownload}
                  className="flex items-center justify-center text-white bg-gradient-to-r from-indigo-500 to-cyan-500 py-3 px-4 rounded-lg group hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
                >
                  <FaFileAlt className="mr-2" />
                  <span className="font-medium">Resume</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
