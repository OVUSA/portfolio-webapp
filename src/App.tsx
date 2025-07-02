import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function App() {
  return (
    <div className="app">
      <header className="hero">
        <h1>Olga Velichko</h1>
        <p>Junior Software Engineer</p>
        <a href="#contact" className="cta">Get in Touch</a>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I'm a passionate junior software engineer with a love for building elegant, efficient, and accessible web applications. I specialize in React and enjoy transforming designs into functional UI.
        </p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript (ES6+)</li>
          <li>C#</li>
          <li>Java</li>
          <li>Git & GitHub</li>
          <li>RESTful APIs</li>
        </ul>
      </section>

      <section className="projects">
  <h2>Projects</h2>
  <div className="project-grid">
    <div className="project-card">
      <h3>Portfolio Website</h3>
      <p>A responsive React portfolio site showcasing my skills and work.</p>
      <a href="https://github.com/ovelichko/portfolio" target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
    <div className="project-card">
      <h3>Task Tracker</h3>
      <p>A simple task tracker using React Hooks and local storage.</p>
      <a href="https://github.com/ovelichko/task-tracker" target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
    <div className="project-card">
      <h3>Weather App</h3>
      <p>A React app that shows real-time weather using OpenWeatherMap API.</p>
      <a href="https://github.com/ovelichko/weather-app" target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
    <div className="project-card">
      <h3>Blog CMS</h3>
      <p>A basic blog content management system using React and Firebase.</p>
      <a href="https://github.com/ovelichko/blog-cms" target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  </div>
</section>

      <section className="contact" id="contact">
        <h2>Contact</h2>
        <div className="contact-links">
          <a href="mailto:ovelichko@example.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} /> Email
          </a>
          <a href="https://github.com/ovelichko" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
          <a href="https://linkedin.com/in/ovelichko" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
        </div>
      </section>
      <footer>
        <p>© 2025 Olga Velichko</p>
      </footer>
    </div>
  );
}

export default App;
