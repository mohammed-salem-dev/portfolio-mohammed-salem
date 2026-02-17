import { projects } from "../data/portfolioData";

function Projects() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {}
      <section id="projects" className="py-20 px-6 bg-white-themed">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4 section-title">
            My Projects
          </h2>
          <div className="mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-card border rounded-lg overflow-hidden shadow-lg"
              >
                <div
                  className="project-image flex items-center justify-center"
                  style={{ background: project.gradient }}
                >
                  <i className={`fas ${project.icon} text-white text-6xl`}></i>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-themed mb-4">{project.description}</p>
                  <ul className="text-sm text-gray-themed mb-4 space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index}>• {feature}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="tech-badge-indigo px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center btn-outline px-4 py-2 rounded-lg transition"
                    >
                      <i className="fab fa-github mr-2"></i>Code
                    </a>
                    <button
                      onClick={() =>
                        scrollToSection(`${project.id}-screenshots`)
                      }
                      className="flex-1 text-center btn-primary px-4 py-2 rounded-lg transition"
                    >
                      <i className="fas fa-images mr-2"></i>View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section - At Bottom */}
      <section id="project-screenshots" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4 section-title">
            Project Screenshots
          </h2>
          <div className="mb-16"></div>

          {projects.map((project) => (
            <div
              key={project.id}
              id={`${project.id}-screenshots`}
              className="mb-20"
            >
              <div className="mb-8 text-center">
                <h3
                  className="text-3xl font-bold mb-2"
                  style={{ color: "var(--primary)" }}
                >
                  <i className={`fas ${project.icon} mr-3`}></i>
                  {project.screenshotTitle || project.title}
                </h3>
                <p className="text-gray-themed">
                  {project.description}
                  {project.screenshotNote && (
                    <span className="screenshot-note">
                      {" "}
                      [{project.screenshotNote}]
                    </span>
                  )}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {project.images.map((image, index) => (
                  <div key={index} className="screenshot-card">
                    <img
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentElement.innerHTML = `
                          <div class="placeholder-text">
                            Screenshot ${index + 1}<br/>
                            <small>Upload to: ${image}</small>
                          </div>
                        `;
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
