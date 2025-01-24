import React from "react";

const AboutInfo = () => {
  return (
    <div className="about-info grid ">
      <div className="a-skills-data">
        <div className="a-skills-title">
          <h3 className="a-skills-name">Development</h3>
          <span className="a-skills-number ">70%</span>
        </div>

        <div className="a-skills-bar">
          <span className="a-skills-percentage dev"></span>
        </div>
      </div>

      <div className="a-skills-data">
        <div className="a-skills-title">
          <h3 className="a-skills-name">UI/UX</h3>
          <span className="a-skills-number  ">90%</span>
        </div>

        <div className="a-skills-bar">
          <span className="a-skills-percentage ui"></span>
        </div>
      </div>

      <div className="a-skills-data">
        <div className="a-skills-title">
          <h3 className="a-skills-name">Design</h3>
          <span className="a-skills-number">90%</span>
        </div>

        <div className="a-skills-bar">
          <span className="a-skills-percentage des"></span>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
