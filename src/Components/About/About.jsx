import React from "react";
import "./About.css";
import Face from "./profile.png";
import CV from "./CV.pdf";
import AboutInfo from "./AboutInfo";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About</h2>
      <span className="section-subtitle">An introduction to me</span>

      <div className="about-contain contain grid">
        <div className="about-data">
          <AboutInfo />
          <p className="about-description">
            I am a frontend developer based in Johannesburg, South Africa. I
            create functional websites, web applications, games and useful
            software applications while adhering to UI/UX standards to ensure
            the best products.
          </p>

          <a download="" href={CV} className="button button-flex">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
