import React, { useState } from 'react';
import GameCard from './GameCard';
import BarGameCarousel from './BarGameCarousel';
import GameModal from './GameModal';

const MyGames = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const games = [
    {
      title: "Cat Game",
      link: "https://irtaza.xyz/My-Games/Catch",
      videoSrc: "CatGame.mp4",
      image: "/CatGamePreview.png",
      description: "Cat Game",
    },
    {
      title: "World Tree Game",
      link: "https://irtaza.xyz/My-Games/Math-Blitz",
      videoSrc: "WorldTreeGame.mp4",
      image: "/WorldTreePreview.png",
      description: "World Tree Game",
    },
    {
      title: "Bar Game",
      link: "https://example.com/game3",
      images: ["/BarGame1.png", "/BarGame2.png", "/BarGame3.png"],
      description: "Bar Game Description",
    },
  ];

  const handleCardClick = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <section id="my-games" data-aos="zoom-in">
      <h2>My Games</h2>
      <div className="cards">
        {games.map((game, index) => (
          game.title === "Bar Game" ? (
            <div key={index} onClick={() => handleCardClick(
              <BarGameCarousel images={game.images} />
            )}>
              <BarGameCarousel images={game.images} />
            </div>
          ) : (
            <GameCard
              key={index}
              {...game}
              animation={index === 0 ? "fade-right" : index === 1 ? "fade-up" : "fade-left"}
              onClick={() => handleCardClick(
                game.videoSrc ? (
                  <video src={game.videoSrc} controls autoPlay className="modal-video" />
                ) : (
                  <img src={game.image} alt={game.title} className="modal-image" />
                )
              )}
            />
          )
        ))}
      </div>
      <GameModal isOpen={isModalOpen} content={modalContent} onClose={handleCloseModal} />
    </section>
  );
};

export default MyGames;