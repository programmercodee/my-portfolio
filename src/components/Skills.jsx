import React from "react";
import { FaCode, FaServer, FaTools } from "react-icons/fa";

const skillsData = [
  {
    title: "Frontend Development",
    icon: <FaCode className="text-2xl text-white" />,
    skills: [
      { name: "React.js", progress: 90 },
      { name: "JavaScript", progress: 85 },
      { name: "Tailwind CSS", progress: 95 }
    ],
    gradient: "from-indigo-500 to-cyan-500"
  },
  {
    title: "Backend Development",
    icon: <FaServer className="text-2xl text-white" />,
    skills: [
      { name: "Node.js", progress: 80 },
      { name: "Express.js", progress: 85 },
      { name: "MongoDB", progress: 75 }
    ],
    gradient: "from-cyan-500 to-purple-500"
  },
  {
    title: "Tools & Technologies",
    icon: <FaTools className="text-2xl text-white" />,
    skills: [
      { name: "Git & GitHub", progress: 90 },
      { name: "RESTful APIs", progress: 85 },
      { name: "Responsive Design", progress: 95 }
    ],
    gradient: "from-purple-500 to-indigo-500"
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6 content-wrapper">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 animate-gradient-x">
            Technical Expertise
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="glass-card card-3d p-6 rounded-xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div
                  className={`w-16 h-16 mx-auto bg-gradient-to-r ${skill.gradient} rounded-full flex items-center justify-center mb-4 shadow-lg`}
                >
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500">
                  {skill.title}
                </h3>
              </div>
              <div className="space-y-4">
                {skill.skills.map((item, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        {item.name}
                      </span>
                      <span className="text-indigo-400 group-hover:text-cyan-400 transition-colors">
                        {item.progress}%
                      </span>
                    </div>
                    <div
                      className="skill-progress"
                      style={{ "--progress": `${item.progress}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 blur-sm"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
