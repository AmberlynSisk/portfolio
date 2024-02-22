import React from "react";

const Education = () => {
  return (
    <div className="ExperienceContainer" id="education">
      <div className="TitleWrapper">
        <h4>EDUCATION</h4>
      </div>
      <div className="ExperienceGrid">
        <div className="LeftSide">
          <div className="JobWrapper">
            <div className="dates">2023-Present</div>
            <div className="JobTitle">Bachelor's Degree</div>
          </div>
          <div className="JobWrapper">
            <div className="dates">2021-2022</div>
            <div className="JobTitle">Full-Stack Development Certificate</div>
          </div>
          <div className="JobWrapper">
            <div className="dates">2007-2011</div>
            <div className="JobTitle">High School Diploma</div>
          </div>
        </div>
        <div className="RightSide">
          <div className="JobWrapper">
            <div className="Employer">DEVRY UNIVERSITY</div>
            <div className="JobDescription">
              Currently working on obtaining my Bachelor's degree with a major
              in Information Technology and networking and a minor in
              Information Systems and programming. Successfdivly maintaining a
              4.0 grade point average.
            </div>
          </div>
          <div className="JobWrapper">
            <div className="Employer">BOTTEGA UNIVERSITY</div>
            <div className="JobDescription">
              Graduated top of my class with a certificate in fdivl-stack
              development. Continued working with Bottega University
              post-graduation as an instructor and mentor to new students
              entering the program.
            </div>
          </div>
          <div className="JobWrapper">
            <div className="Employer">JOHN GLENN HIGH SCHOOL</div>
            <div className="JobDescription">
              Graduated from John Glenn High School in Westland, MI with my High
              School Diploma on June 2nd 2011.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
