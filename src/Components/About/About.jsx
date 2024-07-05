import React from "react";
import "./About.css";
import Face from "./profile.png";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About</h2>
      <span className="section-subtitle">An introduction to me</span>

      <div className="about-contain contain">
        {" "}
        <div className="about-skills grid">
          <div className="a-skills-data">
            <div className="a-skills-title">
              <h3 className="a-skills-name">Development</h3>
              <span className="a-skills-number ">60%</span>
            </div>

            <div className="a-skills-bar">
              <span className="a-skills-percentage dev"></span>
            </div>
          </div>

          <div className="a-skills-data">
            <div className="a-skills-title">
              <h3 className="a-skills-name">UI/UX</h3>
              <span className="a-skills-number  ">85%</span>
            </div>

            <div className="a-skills-bar">
              <span className="a-skills-percentage ui"></span>
            </div>
          </div>

          <div className="a-skills-data">
            <div className="a-skills-title">
              <h3 className="a-skills-name">Design</h3>
              <span className="a-skills-number">80%</span>
            </div>

            <div className="a-skills-bar">
              <span className="a-skills-percentage des"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
