import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and MongoDB",
      image: "/api/placeholder/400/250",
      tags: ["React", "Node.js", "MongoDB"],
      liveLink: "#",
      codeLink: "#",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates",
      image: "/api/placeholder/400/250",
      tags: ["React", "Firebase", "Material-UI"],
      liveLink: "#",
      codeLink: "#",
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather dashboard with location-based forecasts",
      image: "/api/placeholder/400/250",
      tags: ["JavaScript", "API", "CSS"],
      liveLink: "#",
      codeLink: "#",
    },
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveLink} className="project-link">
                      Live Demo
                    </a>
                    <a href={project.codeLink} className="project-link">
                      View Code
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
