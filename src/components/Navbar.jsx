import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <a href="/" className="nav-logo">
        Ahmado <span>Photography</span>
      </a>

      <button
        className={`menu-icon${isOpen ? " active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-links${isOpen ? " show" : ""}`}>
        <li><a href="/" onClick={closeMenu}>Home</a></li>
        <li><a href="#portfolio" onClick={closeMenu}>Portfolio</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
