import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <span>Portfolio</span>
          </div>

          <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
            <li>
              <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>

          <div
            className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
