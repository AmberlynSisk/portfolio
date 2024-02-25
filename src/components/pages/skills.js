import React from "react";

const Skills = () => {
  return (
    <div className="SkillsContainer" id="skills">
      <div className="SkillsTitle">
        <h5>SKILLS</h5>
      </div>
      <div className="SkillsHero">
        <ul className="SkillsCol">
          <div className="Skill">HTML5</div>
          <div className="Skill">CSS/SCSS</div>
          <div className="Skill">JavaScript</div>
          <div className="Skill">ReactJS</div>
          <div className="Skill">React Redux</div>
        </ul>
        <ul className="SkillsCol">
          <div className="Skill">Python3</div>
          <div className="Skill">Flask</div>
          <div className="Skill">PHP</div>
          <div className="Skill">MongoDB</div>
          <div className="Skill">SQL Database</div>
        </ul>
        <ul className="SkillsCol">
          <div className="Skill">UML</div>
          <div className="Skill">UI/UX</div>
          <div className="Skill">Git</div>
          <div className="Skill">JSON</div>
          <div className="Skill">Docker</div>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
