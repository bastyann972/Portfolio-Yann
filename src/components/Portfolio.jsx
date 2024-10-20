import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "./Modal";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import projects from "../data/projects";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <FaChevronRight
      className={`${className} text-white hover:text-highlight transition-colors duration-300`}
      style={{ ...style, display: "block", right: "-25px" }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <FaChevronLeft
      className={`${className} text-white hover:text-highlight transition-colors duration-300`}
      style={{ ...style, display: "block", left: "-25px" }}
      onClick={onClick}
    />
  );
};

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      id="projet"
      className="py-16 bg-main-brand dark:bg-dark-shades transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white dark:text-highlight">
          Portfolio
        </h2>
        <div className="relative" aria-label="Carrousel de projets">
          <p className="sr-only">Utilisez les flèches gauche et droite pour naviguer entre les projets</p>
          <Slider {...settings} className="portfolio-slider">
            {projects.map((project) => (
              <div key={project.id} className="px-2 pb-8">
                <div
                  className="bg-white dark:bg-dark-shades rounded-lg overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col"
                  onClick={() => setCurrentProject(project)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setCurrentProject(project);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`Voir les détails du projet ${project.title}`}
                >
                  <img
                    src={project.image}
                    alt={`Aperçu du projet ${project.title}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800 dark:text-light-shades">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 flex-grow">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {currentProject && (
        <Modal
          onClose={() => setCurrentProject(null)}
          title={currentProject.title}
          description={currentProject.description}
          image={currentProject.image}
          url={currentProject.url}
        />
      )}
    </section>
  );
};

export default Portfolio;