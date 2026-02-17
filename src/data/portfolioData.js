export const personalInfo = {
  name: "Mohammed Salem",
  tagline: "Full-Stack Developer",
  email: "mo7d.salem@gmail.com",
  phone: "+90 536 923 2604",
  location: "Istanbul, Türkiye",
  github: "https://github.com/mohammed-salem-dev",
  linkedin: "https://www.linkedin.com/in/mohammed-salem-70ba69326/",
  profileImage:
    "https://cdn.abacus.ai/images/408fc053-b9ae-4902-bfa0-6af5390ae738.png",
};

export const aboutText = `I am a final year Software Engineering student at Haliç University in Istanbul, Türkiye, with experience in full-stack web development. I have completed internship and freelance projects building scalable applications with modern technologies like React,Next.js, Node.js, and PostgreSQL. Additionally, I have experience in academic research, co-authoring three conference papers in areas such as machine learning and network modeling. I am passionate about my field and would love to learn more and grow better as a developer`;

export const skills = {
  languages: ["C++", "JavaScript", "TypeScript"],
  frontend: ["React", "Next.js", "HTML/CSS"],
  backend: ["Node.js", "REST APIs", "SQL", "PostgreSQL"],
  tools: ["Git", "GitHub"],
  AI: ["Data Analysis", "Machine Learning Concepts"],
};

export const projects = [
  {
    id: "supportdesk",
    title: "SupportDesk",
    screenshotTitle: "SupportDesk - Freelance work",
    description: "Ticketing web application with role-based access control",
    screenshotNote: "Demo Version of the project not real customers",
    features: [
      "Admin/Agent/Customer roles",
      "Advanced search and filtering",
      "Analytics dashboard",
      "Secure authentication",
    ],
    techStack: ["Next.js", "TypeScript", "NextAuth", "Prisma", "PostgreSQL"],
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    icon: "fa-ticket-alt",
    githubLink: "https://github.com/mohammed-salem-dev",
    demoLink: "#supportdesk-images",
    images: [
      "/images/supportdesk/1.png",
      "/images/supportdesk/2.png",
      "/images/supportdesk/3.png",
    ],
  },
  {
    id: "inventory",
    title: "Inventory Management System",
    screenshotTitle: "Inventory Management System - Internship project",
    description: "Full-stack system for tracking and managing inventory",
    features: [
      "Real-time inventory tracking",
      "CRUD operations for products",
      "Database integration with SQL",
      "Responsive admin dashboard",
    ],
    techStack: ["React", "Node.js", "SQL", "REST API"],
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    icon: "fa-boxes",
    githubLink: "https://github.com/mohammed-salem-dev",
    demoLink: "#inventory-images",
    images: [
      "/images/inventory/1.png",
      "/images/inventory/2.png",
      "/images/inventory/3.png",
    ],
  },
  {
    id: "techreview",
    title: "Tech Review Website",
    screenshotTitle: "Tech Review Website - Course project",
    description: "Responsive website for technology product reviews",

    features: [
      "Fully responsive design",
      "Interactive UI components",
      "Clean, modern interface",
      "Vanilla JavaScript functionality",
    ],
    techStack: ["HTML", "CSS", "JavaScript"],
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    icon: "fa-laptop-code",
    githubLink: "https://github.com/mohammed-salem-dev",
    demoLink: "#techreview-images",
    images: [
      "/images/techreview/1.png",
      "/images/techreview/2.png",
      "/images/techreview/3.png",
    ],
  },
];

export const research = [
  {
    title: "Enhanced ML-Based Detection of Deserialization Vulnerabilities",
    conference:
      "16th International Conference on Computing, Communication and Networking Technologies (ICCCNT 2025)",
    status: "Under Publication", // ← Changed from "Published"
    year: "2025",
    borderColor: "var(--primary)",
    certificateImage: "/certificates/deserialization.png",
  },
  {
    title: "Explainable Hybrid ML Approach for Early Diabetes Prediction",
    conference:
      "International Conference on Data Technologies and Digital Economy (ICDTDE 2025)",
    status: "Under Publication", // ← Changed from "Published"
    year: "2025",
    borderColor: "var(--primary)",
    certificateImage: "/certificates/diabetes.png",
  },
  {
    title: "ML-Based Path Loss Modeling for IEEE 802.15.4 Networks",
    conference:
      "International Conference on Computational Intelligence, Algorithms and Applications (ICCIAA 2026)",
    status: "Under Review",
    year: "2026",
    borderColor: "#f59e0b",
    // No certificate yet
  },
];

export const experience = [
  {
    period: "June 2025 – August 2025",
    role: "Software Engineering Intern",
    company: "Ultimate Solutions",
    responsibilities: [
      "Developed a full-stack Inventory Management System with frontend and backend functionality",
      "Worked with relational databases to store, retrieve, and manage structured data efficiently",
      "Collaborated with senior developers to implement best practices in software design",
    ],
  },
  {
    period: "January 2025 – May 2025",
    role: "Contract Full-Stack Developer",
    company: "Freelance",
    responsibilities: [
      "Developed a comprehensive support desk web application for a client",
      "Implemented role-based authentication (admin/agent/customer) with secure login",
      "Built responsive UI with React and integrated PostgreSQL database for ticket management",
      "Delivered project on time meeting all client requirements and specifications",
    ],
  },
];
