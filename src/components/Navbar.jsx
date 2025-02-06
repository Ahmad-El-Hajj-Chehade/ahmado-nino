import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="nav-title"onClick={() => setIsOpen(!isOpen)}>Ahmado & Nino Photography</div>
      
      <ul className={isOpen ? "show" : ""}>
        <li><a href="/#home">Home</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
