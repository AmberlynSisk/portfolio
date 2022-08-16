import React from 'react';
import { Zoom } from "react-awesome-reveal";

const Skills = () => {
  return (
    <div className="SkillsContainer" id="skills">
        <div className="stars"></div>
        <div className="twinkling"></div>
        {/* <div className="SkillsTitlesWrapper">
            <h1 className="SkillsTitle">Frontend</h1>
            <h1 className="SkillsTitle">Backend</h1>
            <h1 className="SkillsTitle">Tools</h1>
        </div> */}
        <div className="SkillsHero">
            <Zoom top cascade duration={500}>
            <ul className="SkillsCol" style={{
                borderRight: "1px solid white"
            }}>
                <li className="Skill">HTML5</li>
                <li className="Skill">CSS/SCSS</li>
                <li className="Skill">JavaScript</li>
                <li className="Skill">ReactJS</li>
                <li className="Skill">React Redux</li>
            </ul>
            </Zoom>
            <Zoom top cascade duration={500} delay={1000}>
            <ul className="SkillsCol">
                <li className="Skill">Python3</li>
                <li className="Skill">Flask</li>
                <li className="Skill">PHP</li>
                <li className="Skill">MongoDB</li>
                <li className="Skill">SQL Database</li>
                <li className="Skill">Redis</li>
            </ul>
            </Zoom>
            <Zoom top cascade duration={500} delay={2000}>
            <ul className="SkillsCol" style={{
                borderLeft: "1px solid white"
            }}>
                <li className="Skill">UML</li>
                <li className="Skill">UI/UX</li>
                <li className="Skill">Git</li>
                <li className="Skill">JSON</li>
                <li className="Skill">Docker</li>
            </ul>
            </Zoom>
        </div>
    </div>

  )
}

export default Skills