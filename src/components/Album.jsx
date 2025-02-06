import React from "react";
import { Link } from "react-router-dom";

const Album = ({ title, link, images, openLightbox }) => (
  <div className="album">
    <h3><Link to={link}>{title}</Link></h3>
    <div className="grid">
      {images.map((src, index) => (
        <div key={index} className="grid-item" onClick={() => openLightbox(src)}>
          <img src={src} alt={title} />
        </div>
      ))}
    </div>
  </div>
);

export default Album;
