import React from "react";
import "./Lightbox.css";

const Lightbox = ({ image, closeLightbox, nextImage, prevImage }) => {
  return (
    <div className="lightbox show" onClick={closeLightbox}>
      <span className="close-btn" onClick={closeLightbox}>&times;</span>
      <button className="prev-btn" onClick={(e) => { e.stopPropagation(); prevImage(); }}>&#10094;</button>
      <img className="lightbox-img" src={image} alt="Enlarged" onClick={(e) => e.stopPropagation()} />
      <button className="next-btn" onClick={(e) => { e.stopPropagation(); nextImage(); }}>&#10095;</button>
    </div>
  );
};

export default Lightbox;
