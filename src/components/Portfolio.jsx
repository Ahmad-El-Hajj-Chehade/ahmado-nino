import React, { useEffect } from "react";
import "./Portfolio.css";

const Portfolio = () => {
  useEffect(() => {
    const scripts = [
      "https://www.tiktok.com/embed.js",
      "https://www.instagram.com/embed.js"
    ];

    scripts.forEach(src => {
      if (!document.querySelector(`script[src="${src}"]`)) {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        document.body.appendChild(script);
      }
    });

    if (window.instgrm) {
      window.instgrm.Embeds.process(); 
    }
  }, []);

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-grid">
          
          {/* Reihe 1: Fokus liegt auf dem ersten Artist */}
          <div className="grid-item item-wide">
            <img src="noelHoller_241225-18.jpg" alt="Noel Holler" />
          </div>

          {/* Reihe 2: Mix aus Hochformaten */}
          <div className="grid-item item-tall">
            <img src="SM_KF200925-09.jpg" alt="Crowd" />
          </div>
          <div className="grid-item item-tall">
            <img src="111025sueri-20.jpg" alt="DJ" />
          </div>

          {/* Reihe 3: Grosses Querformat für Atmosphäre */}
          <div className="grid-item item-wide">
            <img src="211125_kaufleuten-5.jpg" alt="Main Stage" />
          </div>

          {/* Reihe 4: Social Media Integration */}
          <div className="grid-item item-tall video-container">
            <blockquote 
              className="instagram-media" 
              data-instgrm-permalink="https://www.instagram.com/reel/DRSZ0mfjVwY/" 
              data-instgrm-version="14"
            >
              <a href="https://www.instagram.com/reel/DRSZ0mfjVwY/"></a>
            </blockquote>
          </div>
          <div className="grid-item item-tall video-container">
            <blockquote 
              className="instagram-media" 
              data-instgrm-permalink="https://www.instagram.com/reel/DOZF4rWjflu" 
              data-instgrm-version="14"
            >
              <a href="https://www.instagram.com/reel/DOZF4rWjflu"></a>
            </blockquote>
          </div>
          {/* Reihe 5: Weitere Event-Highlights */}
          <div className="grid-item item-wide">
            <img src="DSC09246.jpg" alt="Main Stage Zoom" />
          </div>

           <div className="grid-item item-tall">
            <img src="noelHoller_241225-17.jpg" alt="Noel Holler" />
          </div>
          <div className="grid-item item-tall">
            <img src="311025_vollgas-10.jpg" alt="Vollgas Party 2" />
          </div>

          {/* Reihe 6: YouTube Abschluss */}
          <div className="grid-item item-wide">
            <iframe 
              src="https://www.youtube.com/embed/UiqWvjiSdq4" 
              title="YouTube 1" 
              allowFullScreen
            ></iframe>
          </div>
          
        </div>
      </div>
    </section>
    
           
  );
};

export default Portfolio;