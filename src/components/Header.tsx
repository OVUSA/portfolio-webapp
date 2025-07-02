import React from "react";
import '../styles/Header.css';
import portfolioData from '../data/portfolioData';


function Header(){
    const {name, title} = portfolioData;

      return (
        <header className="header">
          <div className="header-content">
            <h1>{name}</h1>
            <h2>{title}</h2>
            <nav className="main-nav">
              {/* <ul>
                <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
                <li><a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a></li>
                <li><a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></li>
                <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
              </ul> */}
            </nav>
          </div>
        </header>
      );
    }

    
    export default Header;


