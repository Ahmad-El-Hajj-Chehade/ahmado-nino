import React, { useState, useEffect } from "react";
import "./PlazaAlbum.css";

const PlazaAlbum = () => {
  const [imageFilenames, setImageFilenames] = useState([]);
  const [lightboxImage, setLightboxImage] = useState(null);

  // Fetch the JSON file when the component mounts
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/praisecamp/imageList.json`)
      .then((response) => response.json())
      .then((data) => setImageFilenames(data))
      .catch((error) => console.error("Error loading images:", error));
  }, []);

  const openLightbox = (image) => {
    setLightboxImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="album-detail">
      <h1>Praisecamp</h1>
      <div className="album-grid">
        {imageFilenames.map((filename, index) => {
          const imagePath = `${process.env.PUBLIC_URL}/praisecamp/JPEG/${filename}`;
          return (
            <div key={index} className="album-item" onClick={() => openLightbox(imagePath)}>
              <img src={imagePath} alt={`Plaza ${index + 1}`} />
            </div>
          );
        })}
      </div>

      {lightboxImage && (
        <div className="lightbox show" onClick={closeLightbox}>
          <span className="close-btn">&times;</span>
          <img className="lightbox-img" src={lightboxImage} alt="Enlarged" />
        </div>
      )}
    </section>
  );
};

export default PlazaAlbum;
