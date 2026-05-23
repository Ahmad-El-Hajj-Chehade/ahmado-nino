import React from "react";
import "./About.css";

const About = () => (
  <section id="about" className="about-section">
    <div className="about-inner">
      <div className="section-title">
        <h2>About Me</h2>
      </div>

      <div className="about-layout">
        <div className="about-image-wrap">
          <img src="SWI-47.jpg" alt="Ahmad – Ahmado Photography" />
        </div>

        <div className="about-text-wrap">
          <p className="about-label">Who I am</p>
          <h3>Ahmad El Hajj Chehade</h3>
          <p className="about-location">
            <i className="fas fa-map-marker-alt"></i>
            Dottikon, Aargau &middot; Switzerland
          </p>

          <p className="about-bio">
            I'm Ahmad — a bachelor student, software developer, and event photographer based in
            Aargau. After the COVID lockdowns, my friends and I started organizing parties. In 2022,
            we founded <strong>dyoevents</strong>, the leading party label for 16+ events in Aarau
            and Basel.
          </p>
          <p className="about-bio">
            Photography was always part of how I experienced these nights — first with my phone,
            then with a professional camera. I've been fortunate to meet incredible people who
            trusted me to tell the story of their events. Let's connect and capture the energy
            of yours.
          </p>

          <div className="about-stats">
            <div className="stat">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Active</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Events Shot</span>
            </div>
            <div className="stat">
              <span className="stat-number">&#8734;</span>
              <span className="stat-label">Emotions Captured</span>
            </div>
          </div>

          <a href="#contact" className="btn-primary">Work Together</a>
        </div>
      </div>
    </div>
  </section>
);

export default About;
