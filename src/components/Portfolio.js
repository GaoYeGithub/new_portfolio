import React from 'react';
import ProjectVideoCarousel from './ProjectVideoCarousel';

const Portfolio = () => {
  const projects = [
    {
      title: "3D Development",
      media: [
        { type: "video", src: "3D (2).mp4", description: "3D Development Video 1" },
        { type: "video", src: "3D.mp4", description: "3D Development Video 2" },
        { type: "image", src: "3DTest.png", description: "3D Test Image" },
      ],
    },
    {
      title: "Web Development",
      media: [
        { type: "video", src: "Web.mp4", description: "Cool Parallax effect" },
        { type: "video", src: "Web2.mp4", description: "Cool Parallax effect" },
        { type: "video", src: "CSS.mp4", description: "Cool CSS Affect" },
      ],
    },
    {
      title: "Discord Bot Development",
      media: [
        { type: "image", src: "Discord1.png", description: "Discord Bot Image 1" },
        { type: "image", src: "Discord2.png", description: "Discord Bot Image 2" },
        { type: "image", src: "DiscordDice.png", description: "Discord Dice Bot" },
        { type: "image", src: "DiscordPoke.png", description: "Discord Poke Bot" },
      ],
    },
    {
      title: "Hardware Development",
      media: [
        { type: "video", src: "Wokwi.mp4", description: "Hardware Simulation Video 1" },
        { type: "video", src: "Wokwi1.mp4", description: "Hardware Simulation Video 2" },
        { type: "image", src: "PCB.png", description: "Hardware Simulation Video 2" },
      ],
    },
  ];

  return (
    <section id="portfolio">
      <h2>My Projects</h2>
      <div className="cards">
        {projects.map((project, index) => (
          <div key={index}>
            <h3>{project.title}</h3>
            <ProjectVideoCarousel media={project.media} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
