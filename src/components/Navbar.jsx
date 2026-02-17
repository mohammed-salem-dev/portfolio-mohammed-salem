import { useState, useEffect } from "react";

function Navbar({ theme, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      id="navbar"
      className="fixed top-0 w-full bg-white-themed shadow-md z-50 transition-all"
      style={{
        boxShadow: scrolled
          ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
          : "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
          className="text-2xl font-bold"
          style={{ color: "var(--primary)" }}
        >
          MS
        </a>

        <div className="hidden md:flex space-x-8 items-center">
          <a onClick={() => scrollToSection("home")} className="nav-link">
            Home
          </a>
          <a onClick={() => scrollToSection("about")} className="nav-link">
            About
          </a>
          <a onClick={() => scrollToSection("projects")} className="nav-link">
            Projects
          </a>
          <a onClick={() => scrollToSection("skills")} className="nav-link">
            Skills
          </a>
          <a onClick={() => scrollToSection("research")} className="nav-link">
            Research
          </a>
          <a onClick={() => scrollToSection("experience")} className="nav-link">
            Experience
          </a>
          <a onClick={() => scrollToSection("contact")} className="nav-link">
            Contact
          </a>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <i
              className={`fas ${theme === "light" ? "fa-moon" : "fa-sun"}`}
              style={{ color: "var(--text-light)" }}
            ></i>
          </button>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-2xl"
          style={{ color: "var(--text-light)" }}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white-themed border-t border-themed">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <a onClick={() => scrollToSection("home")} className="nav-link">
              Home
            </a>
            <a onClick={() => scrollToSection("about")} className="nav-link">
              About
            </a>
            <a onClick={() => scrollToSection("projects")} className="nav-link">
              Projects
            </a>
            <a onClick={() => scrollToSection("skills")} className="nav-link">
              Skills
            </a>
            <a onClick={() => scrollToSection("research")} className="nav-link">
              Research
            </a>
            <a
              onClick={() => scrollToSection("experience")}
              className="nav-link"
            >
              Experience
            </a>
            <a onClick={() => scrollToSection("contact")} className="nav-link">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
