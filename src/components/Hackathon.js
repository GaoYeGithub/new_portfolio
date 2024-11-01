import React, { useState } from 'react';
import HackathonCard from './HackathonCard';
import Modal from './Modal';

const Hackathon = () => {
  const [videoSrc, setVideoSrc] = useState(null);

  const hackathonData = [
    {
      title: "WanderWise",
      videoSrc: "https://www.youtube.com/embed/7AOV1ljGYtA?si=TmW5_w5-OhcRAFVP",
      image: "Peddie-Preview.png",
    },
    {
      title: "Serene Shelves",
      videoSrc: "https://www.youtube.com/embed/__p5dbe5F4g?si=OW2E7Aa_M0gf3DF9",
      image: "Serene-Shelves.png",
    },
  ];

  const openModal = (src) => setVideoSrc(src);
  const closeModal = () => setVideoSrc(null);

  return (
    <section id="hackathon" data-aos="zoom-in">
      <h2>Hackathon</h2>
      <div className="cards">
        {hackathonData.map((article, index) => (
          <HackathonCard
            key={index}
            title={article.title}
            image={article.image}
            animation={
              index === 0 ? "fade-right" :
              index === 1 ? "fade-up" :
              index === 2 ? "fade-down" :
              "fade-left"
            }
            onClick={() => openModal(article.videoSrc)}
          />
        ))}
      </div>
      <Modal videoSrc={videoSrc} onClose={closeModal} />
    </section>
  );
};

export default Hackathon;
