import React from "react";
import {
  FaKeyboard,
  FaCode,
  FaJs,
  FaReact,
  FaGit,
  FaDatabase,
  FaHtml5,
  FaBatteryFull,
  FaClock,
  FaFlask,
  FaCoffee,
  FaHome,
  FaBicycle,
  FaDumbbell,
  FaHeart,
  FaGamepad,
  FaCloud,
  FaSkating,
} from "react-icons/fa";

// Liste des icônes à afficher
const icons = [
  FaCode,
  FaJs,
  FaReact,
  FaKeyboard,
  FaGit,
  FaDatabase,
  FaCoffee,
  FaHtml5,
  FaBatteryFull,
  FaClock,
  FaHome,
  FaBicycle,
  FaDumbbell,
  FaHeart,
  FaFlask,
  FaGamepad,
  FaCloud,
  FaSkating,
];

// Fonction pour une rangée d'icônes
function AnimatedRow({ isEven }) {
  return (
    <div
      className={`flex whitespace-nowrap ${isEven ? "even-row" : "odd-row"}`}
    >
      <div className="flex">
        {icons.map((Icon, index) => (
          <Icon
            key={index}
            className="w-[90px] h-[90px] text-gray-500 transition-transform duration-300 ease-in-out transform hover:scale-125 hover:text-teal-500 hover:drop-shadow-glow mx-[5px]"
          />
        ))}
      </div>
      <div className="flex">
        {icons.map((Icon, index) => (
          <Icon
            key={index}
            className="w-[90px] h-[90px] text-gray-500 transition-transform duration-300 ease-in-out transform hover:scale-125 hover:rotate-[20deg] hover:text-teal-500 hover:drop-shadow-glow mx-[5px]"
          />
        ))}
      </div>
    </div>
  );
}

// Composant principal avec les rangées d'icônes et arrière-plan
function AnimatedBackground({ children }) {
  // Générer 15 rangées pour l'arrière-plan animé
  const rows = Array.from({ length: 15 }, (_, i) => (
    <AnimatedRow key={i} isEven={i % 2 === 0} />
  ));

  return (
    <section
      className="relative w-full h-[60vh] flex flex-col overflow-hidden"
      style={{ backgroundColor: "rgb(35, 40, 36)" }}
    >
      {rows}
      {children}
    </section>
  );
}

export default AnimatedBackground;