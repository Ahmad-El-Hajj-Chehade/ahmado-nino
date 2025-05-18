import React, { useState, useEffect, useCallback } from "react";
import "./Albumstyling.css";

const DisneyAlbum = () => {
  const [imageFilenames, setImageFilenames] = useState([]);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(null);

  useEffect(() => {
    // Fetch the JSON file
    fetch(`${process.env.PUBLIC_URL}/kanzlei_17_05_2025/imageList.json`)
        .then((response) => response.json())
        .then((data) => setImageFilenames(data))
        .catch((error) => console.error("Error loading images:", error));
  }, []);

  // Open lightbox with specific index
  const openLightbox = (index) => {
    setLightboxImageIndex(index);
    document.body.style.overflow = "hidden"; // Prevent scrolling when lightbox is open
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxImageIndex(null);
    document.body.style.overflow = "auto";
  };

  // Navigate images left/right
  const goNext = () => {
    setLightboxImageIndex((prev) => (prev + 1) % imageFilenames.length);
  };

  const goPrev = () => {
    setLightboxImageIndex((prev) =>
        prev === 0 ? imageFilenames.length - 1 : prev - 1
    );
  };

  // Handle keyboard navigation (left/right arrows)
  const handleKeyDown = useCallback(
      (event) => {
        if (lightboxImageIndex !== null) {
          if (event.key === "ArrowRight") goNext();
          if (event.key === "ArrowLeft") goPrev();
          if (event.key === "Escape") closeLightbox();
        }
      },
      [lightboxImageIndex]
  );

  // Add/remove event listeners for keyboard navigation
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Handle swipe gestures for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) goNext(); // Swipe left → next image
    if (touchStartX - touchEndX < -50) goPrev(); // Swipe right → previous image
  };

  return (
      <section className="album-detail">
        <h1>Disney Party</h1>
        <div className="album-grid">
          {imageFilenames.map((filename, index) => {
            const imagePath = `${process.env.PUBLIC_URL}/kanzlei_17_05_25/JPEG/${filename}`;
            return (
                <div key={index} className="album-item" onClick={() => openLightbox(index)}>
                  <img src={imagePath} alt={`Disney ${index + 1}`} loading="lazy" />
                </div>
            );
          })}
        </div>

        {lightboxImageIndex !== null && (
            <div
                className="lightbox show"
                onClick={closeLightbox}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
              <span className="close-btn" onClick={closeLightbox}>&times;</span>
              <img
                  className="lightbox-img"
                  src={`${process.env.PUBLIC_URL}/kanzlei_17_05_25/JPEG/${imageFilenames[lightboxImageIndex]}`}
                  alt="Enlarged"
              />
              <button className="prev-btn" onClick={(e) => { e.stopPropagation(); goPrev(); }}>&#10094;</button>
              <button className="next-btn" onClick={(e) => { e.stopPropagation(); goNext(); }}>&#10095;</button>
            </div>
        )}
      </section>
  );
};

export default DisneyAlbum;
