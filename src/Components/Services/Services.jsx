import React, { useState } from "react";
import "./Services.css";
import servicesData from "./myservices.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faPaintBrush,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  // Map icon names from JSON to actual Font Awesome icons
  const iconMap = {
    "fa-solid fa-code": faCode,
    "fa-solid fa-paint-brush": faPaintBrush,
    "fa-solid fa-palette": faPalette,
  };

  return (
    <section className="services section" id="services">
      <h2 className="section-title">Services</h2>
      <span className="section-subtitle">What I offer</span>

      <section className="service-contain container grid">
        {servicesData.map((service) => (
          <article className="services-content" key={service.id}>
            <div>
              <FontAwesomeIcon
                icon={iconMap[service.icon]}
                className="services-icon"
              />
              <h3 className="services-title">{service.title}</h3>
            </div>
            <span
              className="services-button"
              onClick={() => toggleTab(service.id)}
            >
              View More{" "}
              <i className="uil uil-arrow-right services-button-icon"></i>
            </span>
            <div
              className={
                toggleState === service.id
                  ? "services-modal active-modal"
                  : "services-modal"
              }
            >
              <div className="services-modal-content">
                <i
                  className="uil uil-times services-modal-close"
                  onClick={() => toggleTab(0)}
                ></i>
                <h3 className="services-modal-title">{service.title}</h3>
                <p className="services-modal-description">
                  {service.description}
                </p>
                <ul className="services-modal-services grid">
                  {service.services.map((item, index) => (
                    <li className="services-modal-service" key={index}>
                      <i className="uil uil-check-circle services-modal-icon"></i>
                      <p className="services-modal-info">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
};

export default Services;
