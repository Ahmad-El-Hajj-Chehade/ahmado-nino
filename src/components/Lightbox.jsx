import React, { useEffect } from "react";
import "./Lightbox.css";

const Lightbox = ({ image, alt, closeLightbox, nextImage, prevImage }) => {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [closeLightbox, nextImage, prevImage]);

  return (
    <div className="lightbox" onClick={closeLightbox}>
      <button
        className="lightbox-close"
        onClick={closeLightbox}
        aria-label="Close lightbox"
      >
        <i className="fas fa-times"></i>
      </button>

      <button
        className="lightbox-nav lightbox-prev"
        onClick={(e) => { e.stopPropagation(); prevImage(); }}
        aria-label="Previous image"
      >
        <i className="fas fa-chevron-left"></i>
      </button>

      <img
        className="lightbox-img"
        src={image}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
      />

      <button
        className="lightbox-nav lightbox-next"
        onClick={(e) => { e.stopPropagation(); nextImage(); }}
        aria-label="Next image"
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Lightbox;
