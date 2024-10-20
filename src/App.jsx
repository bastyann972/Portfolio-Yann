import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import "./index.css";

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <Landing />
        <About />
        <Technologies />
        <Portfolio />
        <Contact />
        <ScrollToTop />
      </div>
    </ErrorBoundary>
  );
}

export default App;
