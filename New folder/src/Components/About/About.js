import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate full-stack developer with 1+ years of experience
              creating digital solutions. I love turning complex problems into
              simple, beautiful designs.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or enjoying outdoor
              activities.
            </p>
            <div className="stats">
              <div className="stat">
                <h3>20+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>1+</h3>
                <p>Years Experience</p>
              </div>
              {/* <div className="stat">
                <h3>30+</h3>
                <p>Happy Clients</p>
              </div> */}
            </div>
          </div>
          <div className="about-image">
            <div className="image-container">
              <div className="glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
