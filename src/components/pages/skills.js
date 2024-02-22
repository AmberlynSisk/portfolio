import React from "react";
import { Zoom } from "react-awesome-reveal";

const Skills = () => {
  return (
    <div className="SkillsContainer" id="skills">
      <div className="SkillsTitle">
        <h5>SKILLS</h5>
      </div>
      <div className="SkillsHero">
        <Zoom top cascade duration={500}>
          <ul className="SkillsCol">
            <div className="Skill">HTML5</div>
            <div className="Skill">CSS/SCSS</div>
            <div className="Skill">JavaScript</div>
            <div className="Skill">ReactJS</div>
            <div className="Skill">React Redux</div>
          </ul>
        </Zoom>
        <Zoom top cascade duration={500} delay={1000}>
          <ul className="SkillsCol">
            <div className="Skill">Python3</div>
            <div className="Skill">Flask</div>
            <div className="Skill">PHP</div>
            <div className="Skill">MongoDB</div>
            <div className="Skill">SQL Database</div>
          </ul>
        </Zoom>
        <Zoom top cascade duration={500} delay={2000}>
          <ul className="SkillsCol">
            <div className="Skill">UML</div>
            <div className="Skill">UI/UX</div>
            <div className="Skill">Git</div>
            <div className="Skill">JSON</div>
            <div className="Skill">Docker</div>
          </ul>
        </Zoom>
      </div>
    </div>
  );
};

export default Skills;
