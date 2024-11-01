import React from 'react';
import DarkModeToggle from './DarkModeToggle';
import Navigation from './Navigation';
import SocialLinks from './SocialLinks';

const Header = () => {
  return (
    <header>
      <DarkModeToggle />
      <Navigation />
      <img src="/profile.jpg" alt="test" className="profile-pic" />
      <h1>Ye Gao</h1>
      <p className="description">Tech Enthusiast; Aspiring Tech VP</p>
      <SocialLinks />
      <div className="scroll-down">
        <a href="#about-me">
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;