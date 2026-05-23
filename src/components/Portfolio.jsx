import React, { useEffect, useState } from "react";
import "./Portfolio.css";
import Lightbox from "./Lightbox";

const photos = [
  { src: "noelHoller_241225-18.jpg", alt: "Noel Holler" },
  { src: "SM_KF200925-09.jpg", alt: "Crowd" },
  { src: "111025sueri-20.jpg", alt: "DJ" },
  { src: "211125_kaufleuten-5.jpg", alt: "Main Stage" },
  { src: "DSC09246.jpg", alt: "Main Stage Zoom" },
  { src: "noelHoller_241225-17.jpg", alt: "Noel Holler" },
  { src: "311025_vollgas-10.jpg", alt: "Vollgas Party" },
];

const Portfolio = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    const scripts = [
      "https://www.tiktok.com/embed.js",
      "https://www.instagram.com/embed.js",
    ];
    scripts.forEach((src) => {
      if (!document.querySelector(`script[src="${src}"]`)) {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        document.body.appendChild(script);
      }
    });
    if (window.instgrm) window.instgrm.Embeds.process();
  }, []);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () => setLightboxIndex((lightboxIndex + 1) % photos.length);
  const prevImage = () =>
    setLightboxIndex((lightboxIndex - 1 + photos.length) % photos.length);

  const PhotoItem = ({ index, className }) => (
    <div
      className={`grid-item ${className}`}
      onClick={() => openLightbox(index)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && openLightbox(index)}
      aria-label={`Open ${photos[index].alt}`}
    >
      <img src={photos[index].src} alt={photos[index].alt} loading="lazy" />
      <div className="grid-overlay">
        <i className="fas fa-expand-alt"></i>
      </div>
    </div>
  );

  return (
    <section id="portfolio" className="portfolio">
      <div className="section-title">
        <h2>Portfolio</h2>
      </div>

      <div className="portfolio-container">
        <div className="portfolio-grid">
          {/* Row 1 – wide hero shot */}
          <PhotoItem index={0} className="item-wide" />

          {/* Row 2 – two portrait shots */}
          <PhotoItem index={1} className="item-tall" />
          <PhotoItem index={2} className="item-tall" />

          {/* Row 3 – wide stage shot */}
          <PhotoItem index={3} className="item-wide" />

          {/* Row 4 – Instagram reels */}
          <div className="grid-item item-tall video-container">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/reel/DRSZ0mfjVwY/"
              data-instgrm-version="14"
            >
              <a href="https://www.instagram.com/reel/DRSZ0mfjVwY/" aria-label="View Instagram Reel">Instagram Reel</a>
            </blockquote>
          </div>
          <div className="grid-item item-tall video-container">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/reel/DOZF4rWjflu"
              data-instgrm-version="14"
            >
              <a href="https://www.instagram.com/reel/DOZF4rWjflu" aria-label="View Instagram Reel">Instagram Reel</a>
            </blockquote>
          </div>

          {/* Row 5 – wide crowd shot */}
          <PhotoItem index={4} className="item-wide" />

          {/* Row 6 – two portrait shots */}
          <PhotoItem index={5} className="item-tall" />
          <PhotoItem index={6} className="item-tall" />

          {/* Row 7 – YouTube embed */}
          <div className="grid-item item-wide video-container">
            <iframe
              src="https://www.youtube.com/embed/UiqWvjiSdq4"
              title="Event Highlights"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          image={photos[lightboxIndex].src}
          alt={photos[lightboxIndex].alt}
          closeLightbox={closeLightbox}
          nextImage={nextImage}
          prevImage={prevImage}
        />
      )}
    </section>
  );
};

export default Portfolio;
