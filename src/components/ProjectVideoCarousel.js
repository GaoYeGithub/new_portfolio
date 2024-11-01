import React, { useState } from 'react';

const ProjectVideoCarousel = ({ media }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + media.length) % media.length);
  };

  return (
    <div className="project-video-carousel">
      <button onClick={handlePrev} className="carousel-button prev-button">❮</button>
      <div className="carousel-media">
        {media[currentIndex].type === 'video' ? (
          <video
            src={media[currentIndex].src}
            controls
            autoPlay
            className="carousel-video"
            draggable="false"
          />
        ) : (
          <img
            src={media[currentIndex].src}
            alt={media[currentIndex].description || `Slide ${currentIndex}`}
            className="carousel-image"
            draggable="false"
          />
        )}
        <p className="carousel-description">
          {media[currentIndex].description || ''}
        </p>
      </div>
      <button onClick={handleNext} className="carousel-button next-button">❯</button>
    </div>
  );
};

export default ProjectVideoCarousel;
