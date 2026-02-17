import { experience } from "../data/portfolioData";

function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-white-themed">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-4 section-title">
          Experience
        </h2>
        <div className="mb-12"></div>

        <div
          className="relative border-l-2 ml-4"
          style={{ borderLeftColor: "var(--primary)" }}
        >
          {experience.map((exp, index) => (
            <div
              key={index}
              className={`timeline-item relative pl-8 ${index < experience.length - 1 ? "pb-12" : ""}`}
            >
              <div>
                <span className="inline-block btn-primary px-4 py-1 rounded-full text-sm mb-2">
                  {exp.period}
                </span>
                <h3 className="text-2xl font-bold">{exp.role}</h3>
                <p className="text-lg mb-3" style={{ color: "var(--primary)" }}>
                  {exp.company}
                </p>
                <ul className="text-gray-themed space-y-2">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>• {responsibility}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
