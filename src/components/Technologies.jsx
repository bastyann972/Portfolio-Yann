import React from 'react';
import {
  FaJsSquare,
  FaReact,
  FaDatabase,
  FaHtml5,
  FaGitAlt,
} from "react-icons/fa";

// Liste des technologies avec icônes
const technologies = [
  { name: "JavaScript", icon: FaJsSquare },
  { name: "React", icon: FaReact },
  { name: "SQL", icon: FaDatabase },
  { name: "HTML", icon: FaHtml5 },
  { name: "Git", icon: FaGitAlt },
];

const Technologies = () => {
  return (
    <section
      id="techno"
      className="py-16 bg-main-brand text-white transition-colors duration-300 dark:bg-dark-shades"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white dark:text-blue-400">
          Technologies déjà utilisées
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-gray-700 dark:bg-custom-dark rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-gray-600 w-full h-72"
            >
              <tech.icon className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 text-blue-500 transition-colors duration-300 hover:text-highlight" />
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-200 text-center">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-base md:text-lg text-gray-400">
          Et bien d'autres...
        </p>
      </div>
    </section>
  );
};

export default Technologies;