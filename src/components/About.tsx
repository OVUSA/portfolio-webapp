import React from 'react';
import portfolioData from '../data/portfolioData';
import '../styles/About.css'; 


function About() {
  const { name, tagline, about } = portfolioData;

  return (
    <section id="about" className="about-section">
      <div className="about-content">
        {/* <img src={profilePic} alt="Jane Doe" className="profile-pic" /> */}
        <h2>Hello, I'm {name}!</h2>
        <p className="tagline">{tagline}</p>
        <p>{about}</p>
      </div>
    </section>
  );
}

export default About;