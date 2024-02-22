import React from "react";
import NameLogo from "../images/sisk_logo_black.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <div className="FooterContainer">
      <div className="FooterLogo">
        <img src={NameLogo} alt="Amberlyn Sisk" />
      </div>
      <div className="Socials">
        <a
          href="https://www.linkedin.com/in/amberlyn-sisk"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/AmberlynSisk"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>
      <div className="CopyRight">&copy; {year}</div>
    </div>
  );
};

export default Footer;
