import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { MdSmartphone } from "react-icons/md";

const Contact = React.memo(() => {
  return (
    <footer
      id="contact"
      className="bg-main-brand text-white py-8 transition-colors duration-300 dark:bg-dark-shades dark:text-gray-100"
      aria-label="Informations de contact"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center space-x-4 md:space-x-8 mb-4">
          <a
            href="https://github.com/bastyann972"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Accéder à GitHub"
            className="text-2xl md:text-3xl hover:text-highlight dark:hover:text-gray-100 transition-colors duration-300 mb-2 md:mb-0"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/yann-bastin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Accéder à LinkedIn"
            className="text-2xl md:text-3xl hover:text-highlight dark:hover:text-gray-100 transition-colors duration-300 mb-2 md:mb-0"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:yann.bastin.jeannot@gmail.com"
            aria-label="Envoyer un email à Yann Bastin"
            className="text-2xl md:text-3xl hover:text-highlight dark:hover:text-gray-100 transition-colors duration-300 mb-2 md:mb-0"
          >
            <FaEnvelope />
          </a>
          <a
            href="tel:+596696657729"
            aria-label="Appeler Yann Bastin via smartphone"
            className="text-2xl md:text-3xl hover:text-highlight dark:hover:text-gray-100 transition-colors duration-300 mb-2 md:mb-0"
          >
            <MdSmartphone />
          </a>
        </div>
        <p className="text-center text-xs md:text-sm dark:text-gray-200">
          © 2024 Yann Bastin. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
});

export default Contact;
