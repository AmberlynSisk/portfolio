import React from "react";

const Experience = () => {
  return (
    <div className="ExperienceContainer" id="experience">
      <div className="TitleWrapper">
        <h4>EXPERIENCE</h4>
      </div>
      <div className="ExperienceGrid">
        <div className="LeftSide">
          <div className="JobWrapper">
            <div className="dates">2022-2023</div>
            <div className="JobTitle">Full-Stack Developer</div>
          </div>
          <div className="JobWrapper">
            <div className="dates">2022</div>
            <div className="JobTitle">Instructor</div>
          </div>
          <div className="JobWrapper">
            <div className="dates">2015-2021</div>
            <div className="JobTitle">AH-64 Apache Maintainer</div>
          </div>
        </div>
        <div className="RightSide">
          <div className="JobWrapper">
            <div className="Employer">VACATION CANDY</div>
            <div className="JobDescription">
              Worked with a full team of developers and QA specialists in an
              Agile workflow. Created new features for the company website,
              which is being completely re-written from a legacy codebase. The
              VacationCandy website is built with a React frontend which
              utilizes TypeScript and React Redux and a PHP backend that
              utilizes Laravel.
            </div>
          </div>
          <div className="JobWrapper">
            <div className="Employer">BOTTEGA UNIVERSITY</div>
            <div className="JobDescription">
              Assisted students in the full-stack development certificate
              program. Taught a class of thirty students to ensure retention of
              information. Worked with other instructors to make lesson plans
              for students and led multiple tutoring sessions as needed.
            </div>
          </div>
          <div className="JobWrapper">
            <div className="Employer">UNITED STATES ARMY</div>
            <div className="JobDescription">
              Quickly learned new skills and applied them to daily tasks,
              improving efficiency and productivity. Carried out day-to-day
              duties accurately and efficiently. Demonstrated respect,
              friendliness and willingness to help wherever needed.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
