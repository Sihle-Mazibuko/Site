import React from "react";
import "./Portfolio.css";
import PortfolioData from "./Porfolio_Data";
import Works from "./Works";

const Porfolio = () => {
  return (
    <>
      <section className="portfolio section " id="porfolio">
        <h2 className="section-title">Porfolio</h2>
        <span className="section-subtitle">View my proudest works</span>

        <Works />
      </section>
    </>
  );
};

export default Porfolio;
