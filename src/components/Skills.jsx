import { skills } from "../data/portfolioData";

function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-4 section-title">
          Skills
        </h2>
        <div className="mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Languages */}
          <div className="bg-white-themed p-6 rounded-lg shadow-lg border border-themed">
            <h3
              className="text-xl font-bold mb-4"
              style={{ color: "var(--primary)" }}
            >
              Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((skill, index) => (
                <span
                  key={index}
                  className="skill-badge px-4 py-2 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Frontend */}
          <div className="bg-white-themed p-6 rounded-lg shadow-lg border border-themed">
            <h3
              className="text-xl font-bold mb-4"
              style={{ color: "var(--primary)" }}
            >
              Frontend
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.map((skill, index) => (
                <span
                  key={index}
                  className="skill-badge px-4 py-2 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend/DB */}
          <div className="bg-white-themed p-6 rounded-lg shadow-lg border border-themed">
            <h3
              className="text-xl font-bold mb-4"
              style={{ color: "var(--primary)" }}
            >
              Backend & DB
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.backend.map((skill, index) => (
                <span
                  key={index}
                  className="skill-badge px-4 py-2 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-white-themed p-6 rounded-lg shadow-lg border border-themed">
            <h3
              className="text-xl font-bold mb-4"
              style={{ color: "var(--primary)" }}
            >
              Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill, index) => (
                <span
                  key={index}
                  className="skill-badge px-4 py-2 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
