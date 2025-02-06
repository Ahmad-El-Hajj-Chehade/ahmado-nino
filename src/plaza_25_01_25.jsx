import React, { useState } from "react";

const imageFilenames = [
  "20250126-IMG_5201-2.jpg",
  "20250126-IMG_5260-2.jpg",
  "20250126-IMG_5269-2.jpg",
  "20250126-IMG_5273-2.jpg",
  "20250126-IMG_5279-2.jpg",
  "20250126-IMG_5309-2.jpg",
  "20250126-IMG_5514-2.jpg",
  "Foto 25.01.25, 23 55 39.jpg",
  "Foto 26.01.25, 00 27 51.jpg",
  "Foto 26.01.25, 00 29 33.jpg",
];

const PlazaAlbum = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (src) => {
    setLightboxImage(src);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="album-detail">
      <h1>Plaza Lemon Party</h1>
      <div className="album-grid">
        {imageFilenames.map((filename, index) => {
          const imagePath = `/plaza_25_01_25/JPEG/${filename}`;
          return (
            <div key={index} className="album-item" onClick={() => openLightbox(imagePath)}>
              <img src={imagePath} alt={`Plaza ${index + 1}`} />
            </div>
          );
        })}
      </div>

      {lightboxImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="close-btn">&times;</span>
          <img className="lightbox-img" src={lightboxImage} alt="Enlarged" />
        </div>
      )}
    </section>
  );
};

export default PlazaAlbum;
