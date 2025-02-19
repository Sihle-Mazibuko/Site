import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-contain contain">
        <ul className="footer-list">
          <li>
            <a href="#porfolio" className="footer-link">
              Projects
            </a>
          </li>

          <li>
            <a href="#services" className="footer-link">
              Services
            </a>
          </li>

          <li>
            <a href="#experience" className="footer-link">
              Experience
            </a>
          </li>
        </ul>

        <div className="footer-social">
          <a
            href="https://www.linkedin.com/in/sihle-mazibuko-3bb231215/"
            className="footer-social-link"
            target="_blank"
          >
            <i className="uil uil-linkedin"></i>
          </a>
          <a
            href="mailto:sihlemazii@gmail.com"
            className="footer-social-link"
            target="_blank"
          >
            <i className="uil uil-envelope"></i>
          </a>
          <a
            href="https://www.instagram.com/sihle.jpeg"
            className="footer-social-link"
            target="_blank"
          >
            <i className="uil uil-instagram"></i>
          </a>
        </div>

        <span className="footer-copy">
          &#169; {currentYear} Sihle Mazibuko. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
