import React from 'react';

const HackathonCard = ({ title, image, animation, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="article-container">
        <img className="article-image" src={image} draggable="false" alt={title} />
        <div className="overlay">
          <div className="text">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default HackathonCard;
