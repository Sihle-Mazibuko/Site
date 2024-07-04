import React, { useState } from "react";
import "./Qualifications.css";
import data from "./info.json"; // Adjust the path as needed

const Qualifications = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const renderResumeData = (items) => {
    return items.map((item, index) => (
      <div className="resume-data" key={index}>
        {index % 2 !== 0 ? (
          <>
            <div></div>
            <figure>
              <span className="resume-rounder"></span>
              <span className="resume-line"></span>
            </figure>
            <div>
              <h3 className="resume-title">{item.title}</h3>
              <span className="resume-subtitle">{item.subtitle}</span>
              <div className="resume-calendar">
                <i className="uil uil-calendar-alt"></i>
                {item.calendar}
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              <h3 className="resume-title">{item.title}</h3>
              <span className="resume-subtitle">{item.subtitle}</span>
              <div className="resume-calendar">
                <i className="uil uil-calendar-alt"></i>
                {item.calendar}
              </div>
            </div>
            <figure>
              <span className="resume-rounder"></span>
              <span className="resume-line"></span>
            </figure>
          </>
        )}
      </div>
    ));
  };

  return (
    <section className="resume section ">
      <h2 className="section-title">Resume</h2>
      <span className="section-subtitle">My journey</span>

      <section className="resume-contain contain">
        <article className="resume-tabs">
          <div
            className={
              toggleState === 1
                ? "resume-button resume-active button-flex"
                : "resume-button button-flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap resume-icon"></i>Education
          </div>

          <div
            className={
              toggleState === 2
                ? "resume-button resume-active button-flex"
                : "resume-button button-flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase resume-icon"></i>Experience
          </div>
        </article>

        <section className="resume-sections">
          <article
            className={
              toggleState === 1
                ? "resume-content resume-content-active"
                : "resume-content"
            }
          >
            {renderResumeData(data.education)}
          </article>

          <article
            className={
              toggleState === 2
                ? "resume-content resume-content-active"
                : "resume-content"
            }
          >
            {renderResumeData(data.experience)}
          </article>
        </section>
      </section>
    </section>
  );
};

export default Qualifications;
