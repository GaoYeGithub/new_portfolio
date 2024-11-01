import React from 'react';

const SocialLinks = () => {
  const socialLinks = [
    { icon: "fab fa-instagram", url: "hhttps://www.instagram.com/edify_fool/" },
    { icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/thesolominded-gao-92824931b/" },
    { icon: "fab fa-github", url: "https://github.com/GaoYeGithub/" },
    { icon: "far fa-envelope", url: "mailto:ye.gao@student.tdsb.on.ca" }
  ];

  return (
    <div className="social-links">
      {socialLinks.map((link, index) => (
        <a 
          key={index} 
          href={link.url} 
          target={link.url.startsWith('mailto') ? '_self' : '_blank'}
          rel="noopener noreferrer"
        >
          <i className={link.icon}></i>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;