import React from "react";

const Social = () => {
  return (
    <section className="home-social">
      <a
        href="https://github.com/Sihle-Mazibuko"
        className="home-social-icon"
        target="_blank"
      >
        {" "}
        <i className="uil uil-github"></i>
      </a>{" "}
      <a
        href="https://www.instagram.com/sihle.jpeg"
        className="home-social-icon"
        target="_blank"
      >
        <i className="uil uil-instagram"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/sihle-mazibuko-3bb231215/"
        className="home-social-icon"
        target="_blank"
      >
        {" "}
        <i className="uil uil-linkedin"></i>
      </a>
    </section>
  );
};

export default Social;
