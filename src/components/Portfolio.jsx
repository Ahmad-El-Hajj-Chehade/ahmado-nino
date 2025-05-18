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
          <Link to="/disneyparty" className="album">
              <h3>Disneyparty by ipartypeople</h3>
              <p>
                  Nightlife | People
              </p>
              <img
                  src="kanzlei_17_05_25/JPEG/K_Disney-175.jpg"
                  alt="Disneyparty_Ahmad"
              />

          </Link>
          <Link to="/ptb13" className="album">
              <h3>13 Years PLAZE TO BE</h3>
              <p>
                  Nightlife | People
              </p>
              <img
                  src="plaza_29_03_25/JPEG/PTB13_Ahmado-12.jpg"
                  alt="PTB13_Ahmad"
              />

          </Link>
      <Link to="/muri-fasnacht" className="album">
        <h3>Muri Fasnacht</h3>
          <p>
            Nightlife | People
          </p>
          <img
            src="muri_08_02_2025/JPEG/08_02_muri-02.jpg"
            alt="Muri Fasnacht"
          />
         
        </Link>

        <Link to="/plaza_25_01_25" className="album">
        <h3>Plaza Lemon</h3>
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

      </div>
    </section>
  );
};

export default Portfolio;
