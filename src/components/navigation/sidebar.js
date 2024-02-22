import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import NameLogo from "../images/sisk_logo.png";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <aside
      className="SidebarContainer"
      isOpen={isOpen}
      onClick={toggle}
      style={{ top: isOpen ? "0" : "-100%" }}
    >
      <div className="Icon" onClick={toggle}>
        <FaTimes />
      </div>
      <div className="SidebarWrapper">
        <ul className="SidebarMenu">
          <Link className="SidebarLink" to="home" onClick={toggle} offset={-80}>
            <img src={NameLogo} alt="" />
          </Link>
          <Link
            className="SidebarLink"
            to="about"
            onClick={toggle}
            offset={-80}
          >
            ABOUT
          </Link>
          <Link
            className="SidebarLink"
            to="experience"
            onClick={toggle}
            offset={-80}
          >
            EXPERIENCE
          </Link>
          <Link
            className="SidebarLink"
            to="education"
            onClick={toggle}
            offset={-80}
          >
            EDUCATION
          </Link>
          <Link
            className="SidebarLink"
            to="skills"
            onClick={toggle}
            offset={-80}
          >
            SKILLS
          </Link>
          <Link
            className="SidebarLink"
            to="projects"
            onClick={toggle}
            offset={-80}
          >
            TECH CORE PROJECTS
          </Link>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
