import React from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-title">
      <h2>Portfolio</h2>
      </div>
      <div className="albums">
        <Link to="/plaza_25_01_25" className="album">
        <h3>Plaza 25 01 2025</h3>
          <p>
            Nightlife | People
          </p>
          <img
            src="plaza_25_01_25/JPEG/20250126-IMG_5260-2.jpg"
            alt="Plaza 25 01 2025"
          />
         
        </Link>
        <Link to="/umea_31_12_24" className="album">
        <h3>Umea Simon Miles</h3>
          <p>Nightlife | DJ</p>
          <img src="unite_31_12_24/JPEG/SWI-30.jpg" alt="Unite" />
          
        </Link>
        
        <Link to="/utope_21_12_24" className="album">
        <h3>Utope Kaufleuten</h3>
          <p>Nightlife | DJ</p>
          <img src="utope_21_12_24/JPEG/Foto 21.12.24, 23 47 31.jpg" alt="Utope" />
          
        </Link>

        <Link to="/kaufleuten_21_12_24" className="album">
        <h3>Kaufleuten</h3>
          <p>Nightlife | DJ</p>
          <img src="kaufleuten_21_12_24/JPEG/SWI-26.jpg" alt="Utope" />
          
        </Link>

        <Link to="/praisecamp" className="album">
        <h3>Praisecamp</h3>
          <p>Nightlife | Artists</p>
          <img src="praisecamp/JPEG/Foto 28.12.24, 23 23 38.jpg" alt="Utope" />
          
        </Link>

        <Link to="/primeside-festival" className="album">
        <h3>Primeside Festival</h3>
          <p>Nightlife | DJ | People</p>
          <img src="primeside/JPEG/SWI-28.jpg" alt="Utope" />
          
        </Link>
      </div>
    </section>
  );
};

export default Portfolio;
