import React from "react";

function About() {
  return (
    <div id="aboutme" className="py-16 px-4 md:px-8 flex flex-col md:flex-row gap-8 justify-between items-center bg-main-brand dark:bg-dark-shades">
      <img
        src="/img/moi.jpg"
        alt="Photo de Yann, développeur web back-end"
        className="w-4/5 md:w-2/5 max-h-[300px] rounded-full shadow-md"
      />
      <section id="about" aria-labelledby="about-heading" className="max-w-2xl text-left">
        <h2 id="about-heading" tabIndex={0} className="text-3xl font-bold mb-4 text-light-shades dark:text-highlight">
          À propos de moi
        </h2>
        <p className="text-lg leading-relaxed text-light-shades dark:text-light-shades mb-6">
          Passionné par la technologie et animé par une grande curiosité,
          je me spécialise dans le développement web back-end. Actuellement en
          formation à l'École O'clock,
          j'ai acquis et mis en pratique diverses technologies. Je suis
          également reconnu pour ma rapidité d'analyse,
          mon excellent esprit d'équipe et ma volonté continue d'apprendre de
          nouvelles compétences. À la recherche d'un nouveau défi ? Collaborons
          pour créer ensemble quelque chose de mémorable.
        </p>
      </section>
    </div>
  );
}

export default About;