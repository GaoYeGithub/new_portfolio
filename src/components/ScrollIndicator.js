import React, { useEffect } from 'react';

const ScrollIndicator = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".scroll-indicator a");

    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === current) {
          link.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-indicator">
      <a href="#header-wrapper" aria-label="Go to header"></a>
      <a href="#about-me" aria-label="Go to about me section"></a>
      <a href="#portfolio" aria-label="Go to portfolio section"></a>
      <a href="#my-games" aria-label="Go to my games section"></a>
      <a href="#hackathon" aria-label="Go to hackathon section"></a>
    </div>
  );
};

export default ScrollIndicator;
