import React, { useState } from "react";
import "./NavBar.css";
import SiteLogo from "./sm-logo.png";

const NavBar = () => {
  const [Toggle, showMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="mav-logo">
          {/* <img src={SiteLogo} alt="Website Logo"></img> */}Logo
        </a>

        <div className={Toggle ? "nav-menu show-menu" : "nav-menu"}>
          <ul className="nav-list grid">
            <li className="nav-item">
              <a href="#home" className="nav-link active-link">
                <i className="uil uil-estate nav-icon"></i>Home
              </a>
            </li>

            <li className="nav-item">
              <a href="#about" className="nav-link">
                <i className="uil uil-user nav-icon"></i>About
              </a>
            </li>

            <li className="nav-item">
              <a href="#skills" className="nav-link">
                <i className="uil uil-file-alt nav-icon"></i>Skills
              </a>
            </li>

            <li className="nav-item">
              <a href="#services" className="nav-link">
                <i className="uil uil-bag nav-icon"></i>Services
              </a>
            </li>

            <li className="nav-item">
              <a href="#porfolio" className="nav-link">
                <i className="uil uil-scenery nav-icon"></i>Portfolio
              </a>
            </li>

            <li className="nav-item">
              <a href="#message" className="nav-link">
                <i className="uil uil-message nav-icon"> </i>Contact
              </a>
            </li>
          </ul>

          <i
            class="uil uil-times nav-close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav-toggle" onClick={() => showMenu(!Toggle)}>
          <i class="uil uil-ellipsis-h"></i>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
