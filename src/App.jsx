import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  // Initialize theme from localStorage directly (no effect needed for initialization)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // Apply theme to DOM whenever it changes
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="app">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Research />
      <Experience />
      <Contact />

      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="mb-4">© 2025 Mohammed Salem. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="#home" className="hover:text-indigo-400 transition">
              Home
            </a>
            <a href="#projects" className="hover:text-indigo-400 transition">
              Projects
            </a>
            <a href="#research" className="hover:text-indigo-400 transition">
              Research
            </a>
            <a href="#contact" className="hover:text-indigo-400 transition">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
