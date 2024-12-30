import React, { useState, useEffect } from "react";
import "./Gallary.css";
import images from "../../assets/gallary.json";

const Gallary = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  // Automatically change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalImages]);

  // Handle manual navigation
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  return (
    <div className="carousel">
        <h1 style={{textAlign: "center"}}>Gallery</h1>
      <div
        className="carousel-inner"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 0.5s ease-in-out",
          display: "flex",
        }}
      >
        {images.map((image) => (
          <div
            key={image.id}
            className="carousel-item"
            style={{ flex: "0 0 100%" }}
          >
            <img src={image.imagePath} alt={`Image ${image.id}`} />
          </div>
        ))}
      </div>
      <button className="prev" onClick={goToPrevious}>
        &#10094;
      </button>
      <button className="next" onClick={goToNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Gallary;
