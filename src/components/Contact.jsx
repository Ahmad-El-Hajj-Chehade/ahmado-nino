import React from "react";
import "./Contact.css";

const Contact = () => (
  <section id="contact" className="contact-section">
    <div className="contact-inner">
      <div className="section-title">
        <h2>Let's Connect</h2>
      </div>
      <p className="contact-subtitle">
        Interested in working together? Reach out and let's create something memorable.
      </p>

      <div className="contact-cards">
        <a
          href="https://www.instagram.com/ahmado.photography/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <div className="contact-card-icon">
            <i className="fab fa-instagram"></i>
          </div>
          <div className="contact-card-text">
            <span className="contact-card-label">Instagram</span>
            <span className="contact-card-value">@ahmado.photography</span>
          </div>
          <i className="fas fa-arrow-right contact-arrow"></i>
        </a>
      </div>

      <footer className="contact-footer">
        <p>&copy; {new Date().getFullYear()} Ahmado Photography &middot; All rights reserved</p>
      </footer>
    </div>
  </section>
);

export default Contact;
