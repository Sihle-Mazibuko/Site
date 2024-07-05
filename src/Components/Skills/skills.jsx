import React from "react";
import "./skills.css";
import skilldata from "./Skills_data";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title text-cs">Skills</h2>
      <p className="section-subtitle">My talents</p>

      <section className="skills-contain contain grid">
        {skilldata.map(({ name, percentage, description }, index) => {
          return (
            <article className="skills-item">
              <div className="skills-titles">
                <h3 className="skills-name">{name}</h3>
                <span className="skills-number">
                  {percentage} <span>%</span>
                </span>
              </div>

              <p className="skills-description">{description}</p>

              <div className="skills-bar">
                <span
                  className="skills-percentage"
                  style={{ width: `${percentage}%` }}
                >
                  <span></span>
                </span>
              </div>
            </article>
          );
        })}
      </section>
    </section>
  );
};

export default Skills;
