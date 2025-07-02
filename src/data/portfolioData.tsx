const portfolioData = {
    name: "Olga Velichko",
    title: "Junior Software Engineer",
    tagline: "Passionate about building intuitive and efficient web applications.",
    about: "Hello! I'm Jane, a recent computer science graduate with a keen interest in front-end development and a foundational understanding of full-stack principles. I enjoy learning new technologies and solving challenging problems. My goal is to contribute to impactful projects and grow as a developer.",
    skills: [
      { category: "Languages", items: ["JavaScript (ES6+)", "Python", "HTML5", "CSS3"] },
      { category: "Frontend", items: ["ReactJS", "Redux", "Material-UI", "Tailwind CSS", "Bootstrap"] },
      { category: "Backend", items: ["Node.js", "Express.js", "RESTful APIs", "MongoDB", "PostgreSQL"] },
      { category: "Tools & Others", items: ["Git", "GitHub", "VS Code", "Netlify", "Heroku", "Agile Methodologies"] }
    ],
    projects: [
      {
        id: 1,
        title: "E-commerce Store Frontend",
        description: "A responsive e-commerce front-end built with React, featuring product listings, a shopping cart, and user authentication.",
        technologies: ["React", "Redux", "Material-UI", "Fake Store API"],
        liveLink: "https://your-ecommerce-demo.netlify.app",
        githubLink: "https://github.com/yourusername/ecommerce-frontend"
      },
      {
        id: 2,
        title: "Task Management App",
        description: "A full-stack task management application with user authentication, CRUD operations, and persistent data storage.",
        technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
        liveLink: "https://your-task-app-demo.herokuapp.com",
        githubLink: "https://github.com/yourusername/task-manager-fullstack"
      },
      // Add more projects
    ],
    contact: {
      email: "ovelichko.austin@gmail.com",
      linkedin: "https://linkedin.com/in/olgavelichko",
      github: "https://github.com/ovusa",
    }
  };
  
  export default portfolioData;