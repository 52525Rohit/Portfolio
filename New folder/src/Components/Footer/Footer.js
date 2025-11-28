import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2024 John Doe. All rights reserved.</p>
          <div className="social-links">
            <a href="#" aria-label="GitHub">
              GitHub
            </a>
            <a href="#" aria-label="LinkedIn">
              LinkedIn
            </a>
            <a href="#" aria-label="Twitter">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
