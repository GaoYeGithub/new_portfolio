import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import MyGames from './components/MyGames';
import Hackathon from './components/Hackathon';
import ScrollIndicator from './components/ScrollIndicator';
import Cursor from './components/Cursor';
import ParticlesBackground from './components/ParticlesBackground';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      mirror: true,
    });
    document.body.classList.add('dark');
  }, []);

  return (
    <>
      <ParticlesBackground />
      <div id="header-wrapper">
        <Header />
      </div>
      <ScrollIndicator />
      <AboutMe />
      <Portfolio />
      <MyGames />
      <Hackathon />
      <Cursor />
    </>
  );
};

export default App;