import React, { useRef, RefObject, useEffect } from 'react';
import { Github, Linkedin, Mail, Cloud, Code, Briefcase, User, Star } from 'lucide-react';
import photo from "../src/data/photo.png"


// --- Type Definitions ---
/**
 * Props for the Reusable Button Component.
 */
interface ButtonProps {
  children: React.ReactNode; // Content inside the button
  onClick?: () => void; // Optional click handler function
  className?: string; // Optional Tailwind CSS classes for styling
  type?: "button" | "submit" | "reset"; // HTML button type
}

/**
 * Props for the Reusable Card Component.
 */
interface CardProps {
  children: React.ReactNode; // Content inside the card
  className?: string; // Optional Tailwind CSS classes for styling
}

/**
 * Props for the Navbar Component, defining references to scrollable sections.
 * These refs can initially be null.
 */
interface NavbarProps {
  heroRef: RefObject<HTMLDivElement | null>;
  aboutRef: RefObject<HTMLDivElement | null>;
  projectsRef: RefObject<HTMLDivElement | null>;
  skillsRef: RefObject<HTMLDivElement | null>;
  contactRef: RefObject<HTMLDivElement | null>;
}

/**
 * Props for the Hero Section Component.
 */
interface HeroSectionProps {
  contactRef: RefObject<HTMLDivElement | null>;
}

/**
 * Interface for a single project object.
 */
interface Project {
  title: string; // Title of the project
  description: string; // Brief description of the project
  tech: string[]; // Array of technologies used
  link: string; // Link to the live project (placeholder)
  github: string; // Link to the GitHub repository (placeholder)
}

/**
 * Interface for the skills object, where keys are skill categories and values are arrays of skills.
 */
interface Skills {
  [category: string]: string[]; // Allows for dynamic skill categories (e.g., "Programming Languages": ["JS", "Python"])
}
// --- End Type Definitions ---

/**
 * Helper function to smoothly scroll to a given DOM element reference.
 * @param ref The React RefObject pointing to the target HTMLElement.
 */
const scrollToSection = (ref: RefObject<HTMLElement | null>) => {
  if (ref && ref.current) {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }
};

/**
 * Reusable Button Component.
 * Mimics Shadcn/ui button style with Tailwind CSS.
 * @param {ButtonProps} props - The props for the Button component.
 */
const Button: React.FC<ButtonProps> = ({ children, onClick, className = '', type = 'button' }) => (
  <button
    type={type}
    onClick={onClick}
    className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-900 text-gray-50 hover:bg-gray-700 h-10 px-4 py-2 ${className}`}
  >
    {children}
  </button>
);

/**
 * Reusable Card Component.
 * Mimics Shadcn/ui card style with Tailwind CSS.
 * @param {CardProps} props - The props for the Card component.
 */
const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`rounded-lg border bg-white text-gray-900 shadow-sm p-6 ${className}`}>
    {children}
  </div>
);

/**
 * Navbar Component for navigation between sections.
 * @param {NavbarProps} props - The props for the Navbar component, containing references to sections.
 */
const Navbar: React.FC<NavbarProps> = ({ heroRef, aboutRef, projectsRef, skillsRef, contactRef }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <div className="text-lg font-semibold text-gray-900">
          Olga Velichko
        </div>
        <div className="hidden md:flex space-x-6">
          <button onClick={() => scrollToSection(heroRef)} className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Home</button>
          <button onClick={() => scrollToSection(aboutRef)} className="text-gray-700 hover:text-gray-900 font-medium transition-colors">About</button>
          <button onClick={() => scrollToSection(projectsRef)} className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Projects</button>
          <button onClick={() => scrollToSection(skillsRef)} className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Skills</button>
          <button onClick={() => scrollToSection(contactRef)} className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Contact</button>
        </div>
        {/* Mobile menu icon - simplified for this example */}
        <div className="md:hidden">
          {/* You could add a hamburger icon and a dropdown menu here */}
          <span className="text-gray-700">Menu</span>
        </div>
      </div>
    </nav>
  );
};

/**
 * Hero Section, the introductory part of the portfolio.
 * @param {HeroSectionProps} props - The props for the HeroSection component.
 */
const HeroSection: React.FC<HeroSectionProps> = ({ contactRef }) => (
  <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 text-center px-4 pt-16" id="home">
    <div className="max-w-2xl">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 animate-fade-in-up">
        Hi, I'm <span className="text-blue-600">Olga Velichko</span>
      </h1>
      <p className="text-lg sm:text-xl text-gray-700 mb-8 animate-fade-in-up delay-200">
        Software Engineer passionate about building robust backend systems and scalable cloud solutions.
      </p>
      <Button onClick={() => scrollToSection(contactRef)} className="animate-fade-in-up delay-400">
        Get in Touch
      </Button>
    </div>
  </section>
);

/**
 * About Section, providing information about the engineer.
 */
const AboutSection: React.FC = () => (
  <section className="py-20 bg-white px-4" id="about">
    <div className="max-w-screen-lg mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-lg text-gray-700 space-y-6">
          <p>
          As a software engineer, I thrive on solving complex problems and building efficient, reliable software.
          </p>
          <p>
            I have a strong foundation in designing APIs, managing databases, and deploying applications on cloud platforms. I'm always eager to learn new technologies and apply best practices to create impactful solutions.
          </p>
          <p>
          My goal is to help your application leverage the power of the cloud to deliver seamless user experiences and robust, secure, and cost-efficient services.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={photo}
            alt="photo1"
            className="rounded-full shadow-lg w-80 h-80 object-cover border-4 border-gray-100"
          />
        </div>
      </div>
    </div>
  </section>
);

/**
 * Projects Section, showcasing the engineer's work.
 */
const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: "E-commerce Backend API",
      description: "A RESTful API for an e-commerce platform, handling product management, user authentication, and order processing.",
      tech: ["Node.js", "React","Typescript", "MongoDB", "JWT","AWS Cognito"],
      link: "#", // Placeholder link
      github: "#" // Placeholder link
    },
    {
      title: "Apple watch note-taking app ",
      description: "Apple Watch Notes App. A lightweight note-taking app that lets users create and update notes using Siri. The app integrates seamlessly with the iPhone notes app and supports full CRUD functionality.",
      tech: ["C# .NET", "SQLite", "Xcode (SwiftUI)", "AWS Lambda"],
      link: "#",
      github: "https://github.com/OVUSA/AppleWatch-Notes-app"
    },
    {
      title: "Real-time Chat Application",
      description: "Developed a real-time chat application backend using WebSockets, supporting multiple chat rooms and user presence.",
      tech: ["Java", "SpringBoot", "Socket.IO", "MySQL Amazon RDS", "React","Typescript"],
      link: "#",
      github: "#"
    },
  ];

  return (
    <section className="py-20 bg-gray-50 px-4" id="projects">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex space-x-4 mt-4">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 flex items-center">
                  <Briefcase className="w-4 h-4 mr-1" /> View Project
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 flex items-center">
                  <Github className="w-4 h-4 mr-1" /> GitHub
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * Skills Section, detailing the engineer's technical proficiencies.
 */
const SkillsSection: React.FC = () => {
  const skills: Skills = {
    "Programming Languages": ["Java","C#","TypeScript","Python"],
    "Cloud Platforms": ["AWS (EC2, S3, Lambda, RDS)", "Docker", "Kubernetes"],
    "Databases": ["MongoDB", "MySQL","OracleDB", "Redis"],
    "Frameworks & Libraries": ["React","Angular","Spring Boot", ".NET"],
    "Tools & Methodologies": ["Git", "CI/CD", "RESTful APIs", "Microservices", "Agile"]
  };

  return (
    <section className="py-20 bg-white px-4" id="skills">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">Skills</h2>
        <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-12">
          Here's an overview of my technical knowledge, spanning various programming languages, cloud platforms, databases, frameworks, and development tools.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <Card key={index}>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Star className="w-5 h-5 mr-2 text-blue-600" /> {category}
              </h3>
              <div className="flex flex-wrap gap-2"> {/* Use flex-wrap for skill tags */}
                {items.map((item, itemIndex) => (
                  <span key={itemIndex} className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full border border-gray-200">
                    {item}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * Contact Section, providing ways to get in touch.
 */
const ContactSection: React.FC = () => (
  <section className="py-20 bg-gray-50 px-4" id="contact">
    <div className="max-w-screen-lg mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Get in Touch</h2>
      <p className="text-lg text-gray-700 mb-8">
        I'm currently open to new opportunities and collaborations. Feel free to reach out!
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
        <a href="mailto:ovelichko.austin@gmail.com" className="flex items-center justify-center text-blue-600 hover:text-blue-800 font-medium text-lg">
          <Mail className="w-6 h-6 mr-2" /> Email
        </a>
        <a href="https://linkedin.com/in/olga-velichko" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-blue-600 hover:text-blue-800 font-medium text-lg">
          <Linkedin className="w-6 h-6 mr-2" /> LinkedIn Profile
        </a>
        <a href="https://github.com/ovusa" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-blue-600 hover:text-blue-800 font-medium text-lg">
          <Github className="w-6 h-6 mr-2" /> GitHub Profile
        </a>
      </div>
    </div>
  </section>
);

/**
 * Footer Component for copyright and design credits.
 */
const Footer: React.FC = () => (
  <footer className="py-8 bg-gray-900 text-gray-400 text-center text-sm px-4">
    <div className="max-w-screen-lg mx-auto">
      <p>&copy; {new Date().getFullYear()} Olga Velichko. All rights reserved.</p>
    </div>
  </footer>
);

/**
 * Main App Component, orchestrating the entire portfolio.
 */
const App: React.FC = () => {
  // Refs for smooth scrolling to different sections
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Use useEffect to dynamically add external CSS and font links to the document head
  useEffect(() => {
    // Add Tailwind CSS CDN script
    const tailwindScript = document.createElement('script');
    tailwindScript.src = 'https://cdn.tailwindcss.com';
    document.head.appendChild(tailwindScript);

    // Add Inter font link
    const interLink = document.createElement('link');
    interLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
    interLink.rel = 'stylesheet';
    document.head.appendChild(interLink);

    // Clean up function to remove the elements if the component unmounts
    return () => {
      document.head.removeChild(tailwindScript);
      document.head.removeChild(interLink);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="font-inter antialiased bg-gray-50 text-gray-900">
      {/* Custom styles for smooth scrolling and basic animations */}
      <style>
        {`
        html {
          scroll-behavior: smooth;
        }
        body {
          font-family: 'Inter', sans-serif;
        }
        .animate-fade-in-up {
          opacity: 0;
          transform: translateY(20px);
          animation: fade-in-up 0.6s ease-out forwards;
        }
        .animate-fade-in-up.delay-200 { animation-delay: 0.2s; }
        .animate-fade-in-up.delay-400 { animation-delay: 0.4s; }

        @keyframes fade-in-up {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        `}
      </style>

      {/* Navbar component, passing refs for navigation */}
      <Navbar
        heroRef={heroRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
        contactRef={contactRef}
      />

      {/* Individual sections, each wrapped in a div with its corresponding ref */}
      <div ref={heroRef}>
        <HeroSection contactRef={contactRef} />
      </div>
      <div ref={aboutRef}>
        <AboutSection />
      </div>
      <div ref={projectsRef}>
        <ProjectsSection />
      </div>
      <div ref={skillsRef}>
        <SkillsSection />
      </div>
      <div ref={contactRef}>
        <ContactSection />
      </div>

      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default App;
