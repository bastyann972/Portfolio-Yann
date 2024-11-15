import React from "react";

const About = React.memo(() => {
  return (
    <div
      id="aboutme"
      className="py-16 px-4 md:px-8 flex flex-col md:flex-row gap-20 justify-center items-center bg-main-brand dark:bg-dark-shades"
    >
      {/* L'image centrée avec une taille réduite sur grands écrans */}
      <div className="flex justify-center items-center">
        <img
          src="/Portfolio-Yann/img/moi.webp"
          alt="Photo de Yann, développeur web back-end"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full drop-shadow-glow object-cover mb-8 md:mb-0" // Maintient l'aspect ratio
        />
      </div>

      {/* Section "À propos de moi" */}
      <section
        id="about"
        aria-labelledby="about-heading"
        className="max-w-2xl text-center md:text-left"
      >
        <h2
          id="about-heading"
          tabIndex={0}
          className="text-3xl font-bold mb-4 text-light-shades dark:text-highlight"
        >
          À propos de moi
        </h2>
        <p className="text-lg leading-relaxed text-light-shades dark:text-light-shades mb-6">
          Passionné par la technologie et animé par une grande curiosité, je me
          spécialise dans le développement web front-end. Actuellement en
          formation à l'École O'clock, j'ai acquis et mis en pratique diverses
          technologies. Je suis également reconnu pour ma rapidité d'analyse,
          mon excellent esprit d'équipe et ma volonté continue d'apprendre de
          nouvelles compétences. À la recherche d'un nouveau défi ? Collaborons
          pour créer ensemble quelque chose de mémorable.
        </p>
      </section>
    </div>
  );
});

export default About;
