import { research } from "../data/portfolioData";

function Research() {
  return (
    <>
      {/* Research Papers Section */}
      <section id="research" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4 section-title">
            Research & Publications
          </h2>
          <div className="mb-12"></div>

          <div className="space-y-6">
            {research.map((paper, index) => (
              <div
                key={index}
                className="bg-white-themed p-6 rounded-lg shadow-lg border-l-4"
                style={{ borderLeftColor: paper.borderColor }}
              >
                <h3 className="text-xl font-bold mb-2">{paper.title}</h3>
                <p className="text-gray-themed mb-3">{paper.conference}</p>
                <div className="flex items-center gap-3 flex-wrap">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm ${
                      paper.status === "Published" ||
                      paper.status === "Under Publication"
                        ? "tech-badge-indigo"
                        : "bg-orange-100 text-orange-800"
                    }`}
                  >
                    {paper.status} • {paper.year}
                  </span>
                  {paper.certificateImage && (
                    <a
                      href={`#certificate-${index}`}
                      className="text-sm btn-outline px-4 py-1 rounded-lg transition inline-flex items-center"
                    >
                      <i className="fas fa-certificate mr-2"></i>
                      View Certificate
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section - At Bottom */}
      <section
        id="research-certificates"
        className="py-20 px-6 bg-white-themed"
      >
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-4 section-title">
            Publication Certificates
          </h2>
          <div className="mb-16"></div>

          <div className="space-y-16">
            {research.map(
              (paper, index) =>
                paper.certificateImage && (
                  <div key={index} id={`certificate-${index}`}>
                    <div className="mb-6 text-center">
                      <h3
                        className="text-2xl font-bold mb-2"
                        style={{ color: "var(--primary)" }}
                      >
                        <i className="fas fa-award mr-3"></i>
                        {paper.title}
                      </h3>
                      <p className="text-gray-themed text-sm mb-2">
                        {paper.conference}
                      </p>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs ${
                          paper.status === "Published" ||
                          paper.status === "Under Publication"
                            ? "tech-badge-indigo"
                            : "bg-orange-100 text-orange-800"
                        }`}
                      >
                        {paper.status} • {paper.year}
                      </span>
                    </div>

                    <div className="certificate-container">
                      <img
                        src={paper.certificateImage}
                        alt={`${paper.title} certificate`}
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.parentElement.innerHTML = `
                          <div class="placeholder-text" style="min-height: 400px; display: flex; align-items: center; justify-content: center;">
                            <div>
                              Publication Certificate<br/>
                              <small>Upload certificate to: ${paper.certificateImage}</small>
                            </div>
                          </div>
                        `;
                        }}
                      />
                    </div>
                  </div>
                ),
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Research;
