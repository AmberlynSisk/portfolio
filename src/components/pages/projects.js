import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import CEIS101 from "../images/CEIS101-Final.png";
import CEIS106 from "../images/CEIS106-Final.png";
import CEIS101PPTX from "../downloads/CEIS101.pptx";
import CEIS106PPTX from "../downloads/CEIS106.pptx";

const Projects = () => {
  return (
    <div className="ProjectsContainer" id="projects">
      <div className="ProjectsTitle">
        <h4>TECH CORE PROJECTS</h4>
        <p>DeVry University</p>
      </div>
      <div className="ProjectsGrid">
        <div className="ProjectWrapper">
          <div className="ProjectImage">
            <img src={CEIS101} alt="CEIS101" />
          </div>
          <div className="ProjectTitle">CEIS101 Final Project</div>
          <div className="ProjectLink">
            <a href={CEIS101PPTX} download>
              Download Powerpoint <MdOutlineFileDownload />
            </a>
          </div>
        </div>
        <div className="ProjectWrapper">
          <div className="ProjectImage">
            <img src={CEIS106} alt="CEIS106" />
          </div>
          <div className="ProjectTitle">CEIS106 Final Project</div>
          <div className="ProjectLink">
            <a href={CEIS106PPTX} download>
              Download Powerpoint <MdOutlineFileDownload />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
