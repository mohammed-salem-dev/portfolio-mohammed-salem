import { personalInfo } from "../data/portfolioData";

function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6"
    >
      <div className="container mx-auto text-center fade-in">
        <img
          src="/images/profile.jpeg"
          alt="Mohammed Salem"
          className="profile-image mx-auto mb-8"
        />
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          {personalInfo.name}
        </h1>
        <p className="text-xl md:text-2xl text-gray-themed mb-8">
          {personalInfo.tagline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection("projects")}
            className="btn-primary px-8 py-4 rounded-lg font-semibold transition"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="btn-outline px-8 py-4 rounded-lg font-semibold transition"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
