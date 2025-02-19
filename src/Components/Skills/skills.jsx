import React from "react";
import "./skills.css";
import skilldata from "./Skills_data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const CIRCLE_RADIUS = 40;
const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title text-cs">Skills</h2>
      <p className="section-subtitle">
        My talents include but are not limited to:
      </p>

      <Carousel
        responsive={responsive}
        infinite
        keyBoardControl
        itemClass="carousel-item-spacing"
      >
        {skilldata.map(({ id, name, percentage, description }) => (
          <article className="skills-item" key={id}>
            <div className="skills-card">
              <div className="skills-front">
                <svg className="skills-circle" viewBox="0 0 100 120">
                  <circle
                    cx="50"
                    cy="50"
                    r={CIRCLE_RADIUS}
                    stroke="var(--main-blue-bg)"
                    strokeWidth="10"
                    fill="transparent"
                    strokeLinecap="round"
                  />
                  <circle
                    className="skills-percentage"
                    cx="50"
                    cy="50"
                    r={CIRCLE_RADIUS}
                    stroke="var(--main-blue)"
                    strokeWidth="10"
                    fill="transparent"
                    strokeLinecap="round"
                    strokeDasharray={CIRCLE_CIRCUMFERENCE}
                    strokeDashoffset={CIRCLE_CIRCUMFERENCE * (1 - 92 / 100)}
                    transform="rotate(-40 50 50)"
                  />
                  <text
                    x="50"
                    y="55"
                    textAnchor="middle"
                    className="skills-percentage-text"
                  >
                    {percentage}%
                  </text>
                  <text
                    x="50"
                    y="110"
                    textAnchor="middle"
                    className="skills-text"
                  >
                    {name}
                  </text>
                </svg>
              </div>
              <div className="skills-back">
                <p className="skills-description">{description}</p>
              </div>
            </div>
          </article>
        ))}
      </Carousel>
    </section>
  );
};

export default Skills;
