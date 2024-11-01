import React, { useState } from 'react';

const BarGameCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="bar-game-carousel">
      <button onClick={handlePrev} className="carousel-button prev-button">❮</button>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="carousel-image"
        draggable="false"
      />
      <button onClick={handleNext} className="carousel-button next-button">❯</button>
    </div>
  );
};

export default BarGameCarousel;
