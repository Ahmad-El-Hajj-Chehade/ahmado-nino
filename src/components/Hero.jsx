import React from "react";
import "./Hero.css";

const Hero = () => (
  <section
    id="home"
    className="hero"
    style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/background.jpg)` }}
  >
    <div className="hero-overlay"></div>
    <div className="hero-content">
      <p className="hero-eyebrow">Event Photography &middot; Switzerland</p>
      <h1>Ahmado<br />Photography</h1>
      <p className="hero-sub">Capturing the emotions and energy of your event</p>
      <div className="hero-cta">
        <a href="#portfolio" className="btn-primary">View My Work</a>
        <a href="#contact" className="btn-ghost">Get in Touch</a>
      </div>
    </div>
    <div className="hero-scroll" aria-hidden="true">
      <span>Scroll</span>
      <div className="scroll-line"></div>
    </div>
  </section>
);

export default Hero;
