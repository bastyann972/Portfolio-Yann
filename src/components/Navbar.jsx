import React from "react";
import { useState, useEffect } from "react";
import { MdDownload } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { FaMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";

const Navbar = React.memo(() => {
  const [showLinks, setShowLinks] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  };

  return (
    <nav className="bg-main-brand text-white py-4 transition-colors duration-300 dark:bg-dark-shades">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold hover:text-highlight transition-colors duration-300">
          YB
        </h1>
        <button
          onClick={() => setShowLinks(!showLinks)}
          className="md:hidden text-2xl hover:text-highlight transition-colors duration-300"
          aria-label="Toggle menu"
        >
          <TiThMenu />
        </button>

        {/* Desktop menu - horizontal alignment with space-x */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="#aboutme"
            className="hover:text-highlight transition-colors duration-300"
          >
            À propos
          </a>
          <a
            href="#techno"
            className="hover:text-highlight transition-colors duration-300"
          >
            Technologies
          </a>
          <a
            href="#portfolio"
            className="hover:text-highlight transition-colors duration-300"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="hover:text-highlight transition-colors duration-300"
          >
            Contact
          </a>
          <a
            href="/path/to/your/cv.pdf"
            download
            className="flex items-center bg-white text-main-brand px-4 py-2 rounded hover:bg-hover-shades transition-colors duration-300"
          >
            <MdDownload className="mr-2 hover:text-highlight transition-colors duration-300" />
            CV
          </a>
          <button
            onClick={toggleDarkMode}
            className="text-xl hover:text-highlight transition-colors duration-300"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <GoSun className="hover:text-highlight transition-colors duration-300" />
            ) : (
              <FaMoon className="hover:text-highlight transition-colors duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu - vertical alignment with space-y */}
      <div
        className={`${
          showLinks ? "block" : "hidden"
        } md:hidden mt-4 flex flex-col items-start space-y-4 px-4`}
      >
        <a
          href="#aboutme"
          className="hover:text-highlight transition-colors duration-300"
        >
          À propos
        </a>
        <a
          href="#techno"
          className="hover:text-highlight transition-colors duration-300"
        >
          Technologies
        </a>
        <a
          href="#portfolio"
          className="hover:text-highlight transition-colors duration-300"
        >
          Portfolio
        </a>
        <a
          href="#contact"
          className="hover:text-highlight transition-colors duration-300"
        >
          Contact
        </a>
        <a
          href="/path/to/your/cv.pdf"
          download
          className="flex items-center bg-white text-main-brand px-4 py-2 rounded hover:bg-hover-shades transition-colors duration-300"
        >
          <MdDownload className="mr-2 hover:text-highlight transition-colors duration-300" />
          CV
        </a>
        <button
          onClick={toggleDarkMode}
          className="text-xl hover:text-highlight transition-colors duration-300"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <GoSun className="hover:text-highlight transition-colors duration-300" />
          ) : (
            <FaMoon className="hover:text-highlight transition-colors duration-300" />
          )}
        </button>
      </div>
    </nav>
  );
});

export default Navbar;
