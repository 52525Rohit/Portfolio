import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Rohit Kumar</span>
            </h1>
            <h2 className="hero-subtitle">Full Stack Developer</h2>
            <p className="hero-description">
              I create amazing web experiences using modern technologies.
              Passionate about clean code, user experience, and bringing ideas
              to life.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="floating-card">
              <div className="card-content">
                <div className="avatar"></div>
                <div className="floating-elements">
                  <div className="element element-1">⚡</div>
                  <div className="element element-2">🚀</div>
                  <div className="element element-3">💻</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
