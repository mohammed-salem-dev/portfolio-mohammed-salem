import { personalInfo } from "../data/portfolioData";

function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-4 section-title">
          Get In Touch
        </h2>
        <div className="mb-12"></div>

        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Contact Information
          </h3>
          <div className="space-y-6">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center justify-center text-gray-themed transition hover:opacity-80"
              style={{ textDecoration: "none" }}
            >
              <i
                className="fas fa-envelope text-3xl mr-4"
                style={{ color: "var(--primary)" }}
              ></i>
              <span className="text-lg">{personalInfo.email}</span>
            </a>
            <div className="flex items-center justify-center text-gray-themed">
              <i
                className="fas fa-phone text-3xl mr-4"
                style={{ color: "var(--primary)" }}
              ></i>
              <span className="text-lg">{personalInfo.phone}</span>
            </div>
            <div className="flex items-center justify-center text-gray-themed">
              <i
                className="fas fa-map-marker-alt text-3xl mr-4"
                style={{ color: "var(--primary)" }}
              ></i>
              <span className="text-lg">{personalInfo.location}</span>
            </div>
          </div>

          <div className="mt-12">
            <h4 className="text-xl font-bold mb-6 text-center">
              Connect With Me
            </h4>
            <div className="flex justify-center space-x-6">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gray-800 text-white rounded-full flex items-center justify-center transition hover:scale-110"
                style={{ backgroundColor: "#24292e" }}
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 text-white rounded-full flex items-center justify-center transition hover:scale-110"
                style={{ backgroundColor: "#0077b5" }}
              >
                <i className="fab fa-linkedin-in text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
