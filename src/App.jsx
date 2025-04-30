import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import BackgroundAnimation from './components/BackgroundAnimation';
import ParticlesBackground from './components/ParticlesBackground';
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import SkillsSection from './components/Skills'

function App() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      <BackgroundAnimation />
      <ParticlesBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <SkillsSection />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
