import React, { useState } from "react";

import "./Navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="nav-header">
        <div className="nav-title">Ahmado Photography</div>
       
      </div>
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
      <ul className={isOpen ? "show" : ""}>
        <li><a href="/">Home</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

