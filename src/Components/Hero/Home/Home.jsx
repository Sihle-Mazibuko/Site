import React from "react";
import "./Home.css";
import "./Social";
import Social from "./Social";
import HomeData from "./HomeData";

const Home = () => {
  return (
    <>
      <section className="home section" id="home">
        <article className="home-contain contain grid">
          <div className="home-content grid">
            <Social />

            <figure className="home-img"></figure>

            <HomeData />
          </div>
        </article>
      </section>
    </>
  );
};

export default Home;
