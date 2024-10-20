import React from 'react';
import Typewriter from './Typewriter';
import AnimatedBackground from './AnimatedBackground';
import "./Landing.css";

// Nouveau tableau de messages pour l'effet Typewriter
let msgArray = [
  " ",
  "Bonjour, je m'appelle Yann",
  "Je suis développeur...",
  "front-end",
  "back-end",
  "Full-stack",
  "Ou bien simplement...",
  '"un créateur de solutions"',
  " ",
];

function Landing() {
  return (
    <AnimatedBackground>
      <section
        className="landing-type"
        aria-label="Introduction et messages dynamiques"
      >
        <h1 tabIndex="0">Bienvenue sur mon site</h1>
        <div role="region" aria-live="polite" aria-atomic="true">
          <Typewriter data={msgArray} />
        </div>
      </section>
    </AnimatedBackground>
  );
}

export default Landing;