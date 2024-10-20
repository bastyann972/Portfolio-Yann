import React from "react";
import {
  FaJsSquare,
  FaReact,
  FaDatabase,
  FaHtml5,
  FaGitAlt,
  FaCss3Alt, // Importation de l'icône CSS3
} from "react-icons/fa";

// Liste des technologies avec icônes
const technologies = [
  { name: "JavaScript", icon: FaJsSquare },
  { name: "React", icon: FaReact },
  { name: "SQL", icon: FaDatabase },
  { name: "HTML", icon: FaHtml5 },
  { name: "Git", icon: FaGitAlt },
  { name: "CSS", icon: FaCss3Alt }, // Ajout de la technologie CSS
];

const Technologies = React.memo(() => {
  return (
    <section
      id="techno"
      className="py-16 bg-main-brand text-white transition-colors duration-300 dark:bg-dark-shades dark:text-gray-100"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white dark:text-blue-400">
          Technologies déjà utilisées
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-gray-800 dark:bg-custom-dark rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-highlight w-full h-72"
              tabIndex={0} // Permet la navigation au clavier
              role="button"
              aria-label={`Voir la technologie ${tech.name}`}
            >
              <tech.icon className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 text-teal-500 dark:text-teal-300 transition-colors duration-300 hover:text-highlight" />
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-200 dark:text-gray-200 text-center">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-base md:text-lg text-gray-100">
          Et bien d'autres...
        </p>
      </div>
    </section>
  );
});

export default Technologies;
