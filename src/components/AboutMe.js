import React from 'react';

const AboutMe = () => {
  return (
    <section id="about-me" data-aos="zoom-in" data-aos-offset="200">
      <h2>About Me</h2>
      <div className="about-box">
        <p>
          Hello! My name is Ye Gao, and I am a Tech Enthusiast and
          Hobbyist Game/Web Developer. I am passionate about exploring and 
          creating immersive experiences and trying new technology. I enjoy
          reading books, AR/VR, Mechtronics, and swimming!
          I have a keen interest in technology and love discussing
          computers and technology. Welcome to my portfolio!
        </p>
        <h3>Skills, Methodologies, and Tools</h3>
        <SkillsList />
      </div>
    </section>
  );
};

const SkillsList = () => {
  const skills = [
    { title: 'Programming/Scripting Languages', content: 'Python, Java, HTML, CSS, C++, JavaScript' },
    { title: 'Web Development Frameworks', content: 'React' },
    { title: 'Frontend', content: 'HTML, CSS, JavaScript, React, Bootstrap' },
    { title: 'Backend', content: 'Flask, Express.js' },
    { title: 'DataBase', content: 'Firebase, Supabase, MongoDB' },
    { title: 'Game Development', content: 'PyGame' },
    { title: 'Source Code Management', content: 'GitHub, Git' },
    { title: 'Communication', content: 'Slack, Zoom, Webex' },
    { title: 'Misc (i.e. Cadding, PCB designer)', content: 'Fusion 360, Onshape, KiCad, EasyEda' }
  ];

  return (
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>
          <b>{skill.title}:</b> {skill.content}
        </li>
      ))}
    </ul>
  );
};

export default AboutMe;