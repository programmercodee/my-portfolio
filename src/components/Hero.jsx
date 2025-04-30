import React, { useEffect } from 'react';
import Typed from 'typed.js';
// import 'font-awesome/css/font-awesome.min.css';

const HeroSection = () => {
  useEffect(() => {
    const typed = new Typed('#typed-text', {
      strings: [
        'Frontend Development',
        'React.js Development',
        'Node.js & Express.js',
        'MongoDB Database',
        'RESTful API Design',
        'Responsive Web Design',
        'UI/UX Development',
        'Full Stack Development'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: '|',
      autoInsertCss: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden md:mt-0 mt-18">
      <div className="hero-3d"></div>
      <div className="container mx-auto px-6 hero-content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
              <div className="absolute -bottom-8 right-0 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
              <h1 className="text-7xl font-bold leading-tight relative">
                Creative
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 animate-gradient-x">
                  {' '}Web Developer
                </span>
              </h1>
            </div>
            <div className="text-2xl">
              <span className="text-gray-300">Specialized in </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500 font-semibold">
                <span id="typed-text"></span>
              </span>
            </div>
            <p className="text-xl text-gray-300 leading-relaxed">
              Transforming ideas into elegant digital experiences with modern web technologies
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 hover:text-white focus:ring-4 focus:ring-indigo-500/50"
              >
                <span className="relative px-8 py-3 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Get in Touch
                </span>
              </a>
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg border border-indigo-500 hover:text-white focus:ring-4 focus:ring-indigo-500/50"
              >
                <span className="relative px-8 py-3 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  View Projects
                </span>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative z-10">
              <div className="w-72 h-72 mx-auto rounded-full overflow-hidden border-4 border-indigo-500/20 shadow-2xl shadow-indigo-500/20 transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://res.cloudinary.com/defazdfkp/image/upload/v1745262154/WhatsApp_Image_2025-04-22_at_00.32.13_626ceaa4_acwuld.jpg"
                  alt="Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                <i className="fa fa-code"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;