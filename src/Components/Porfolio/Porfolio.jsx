import React from "react";
import "./Portfolio.css";
import PCard from "./P-Card";
import PortfolioData from "./Porfolio_Data";

const Porfolio = () => {
  return (
    <section className="portfolio top" id="portfolio">
      <section className="container">
        <article className="heading text-center">
          <h2>Porfolio</h2>
          <h3>View my proudest works</h3>
        </article>

        <article className="content grid">
          {PortfolioData.map((value, index) => {
            console.log(value.image);

            return (
              <PCard
                key={index}
                image={value.image}
                category={value.category}
                likes={value.Likes}
                title={value.title}
                i={value.description}
              />
            );
          })}
        </article>
      </section>
    </section>
  );
};

export default Porfolio;
