import { aboutText } from "../data/portfolioData";

function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white-themed">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-4 section-title">
          About Me
        </h2>
        <div className="mb-12"></div>
        <p className="text-lg text-gray-themed leading-relaxed text-center">
          {aboutText}
        </p>
      </div>
    </section>
  );
}

export default About;
