import React, { useState } from 'react';

const GameCard = ({ title, link, videoSrc, image, description, itchLink, animation, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div 
      className="relative w-full rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
      data-card 
      data-aos={animation}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="image-container cursor-pointer" onClick={handleCardClick}>
        <img 
          className="w-full h-64 object-cover transition-transform duration-300"
          src={image} 
          draggable="false" 
          alt={title} 
        />
        <div 
          className={`absolute inset-0 bg-black bg-opacity-75 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <p className="text-white text-center">{description}</p>
          </div>
        </div>
      </div>

      {itchLink && (
        <div className="card-footer flex justify-between items-center p-4 bg-gray-100">
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            <i className="fas fa-external-link-alt"></i>
          </a>
          <a 
            href={itchLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-red-600 hover:text-red-800 transition-colors"
          >
            <i className="fab fa-itch-io"></i>
          </a>
        </div>
      )}
    </div>
  );
};

export default GameCard;