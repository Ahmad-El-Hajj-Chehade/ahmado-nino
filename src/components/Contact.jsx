import React from "react";
import "./Contact.css";

const Contact = () => (
  <section id="contact" className="contact-section">
    <div className="contact-container">
      <h2>Contact</h2>
      <div className="contact-info">
        {/* Email */}
        <div className="contact-item">
         
          <a href="mailto:booking@ahmado-nino.com">booking@ahmado-ninoraw.com </a>
          <i className="fas fa-envelope"></i>
        </div>

        {/* Instagram - Ahmado */}
        <div className="contact-item">
         
          <a
            href="https://www.instagram.com/ahmado.photography/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>ahmado.photography </span>
          </a>
          <i className="fab fa-instagram"></i>
        </div>

        {/* Instagram - Nino */}
        <div className="contact-item">
          
          <a
            href="https://www.instagram.com/ninofotografie/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>ninofotografie </span>
          </a>
          <i className="fab fa-instagram"></i>
        </div>

        {/* Phone */}
        <div className="contact-item">
        
          <a href="tel:+41775052375">+41 77 505 23 75 </a>
          <i className="fas fa-phone"></i>
        </div>
      </div>

      <div className="credits">
        <p>Ahmado & Nino Photography</p>
      </div>
    </div>
  </section>
);

export default Contact;
