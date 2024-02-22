import React from "react";
import headshot from "../images/headshot.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="HeroContainer" id="home">
      <div className="HeroContentGrid">
        <div className="HeroLeft">
          <img src={headshot} alt="headshot" />
        </div>
        <div className="HeroRight">
          <div className="HeroTitle">
            <h1>Amberlyn Sisk</h1>
            <h5>FULL STACK DEVELOPER</h5>
          </div>
          <div className="HeroInfo">
            <p className="title">Phone:</p>
            <a href="tel:PHONE_NUM">734-788-0482</a>
          </div>
          <div className="HeroInfo">
            <p className="title">Email:</p>
            <a href="mailto:asiskdev@gmail.com">asiskdev@gmail.com</a>
          </div>
          <div className="HeroInfo">
            <p className="title">Location:</p>
            <p>Dundee, MI</p>
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
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
