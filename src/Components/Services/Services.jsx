import React, { useState } from "react";
import "./Services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section-title">Services</h2>
      <span className="section-subtitle">What I offer</span>

      <section className="service-contain container grid">
        <article className="services-content">
          <div>
            <i
              className="uil uil-web-grid
           services-icon"
            ></i>{" "}
            <h3 className="services-title">
              Product <br /> Development
            </h3>
          </div>
          <span className="services-button" onClick={() => toggleTab(1)}>
            View More{" "}
            <i className="uil uil-arrow-right serivces-button-icon"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services-modal active-modal"
                : "services-modal"
            }
          >
            <div className="services-modal-content">
              <i
                className="uil uil-times services-modal-close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="services-modal-title">Product Development</h3>
              <p className="services-modal-description">
                Providing you with quality and functional work
              </p>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>{" "}
                  <p className="services-modal-info">
                    Creating innovative systems and products relevant to the
                    needs of the modern world using modern ideologies{" "}
                  </p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>{" "}
                  <p className="services-modal-info">
                    Website, webapp and application design and development
                  </p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>{" "}
                  <p className="services-modal-info">
                    3D and 2D modelling and animation of assets for game
                    development
                  </p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>{" "}
                  <p className="services-modal-info">
                    Designing and developing 2D and 3D games
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </article>

        <article className="services-content">
          <div>
            <i
              className="uil uil-arrow
           services-icon"
            ></i>{" "}
            <h3 className="services-title">UI/UX</h3>
          </div>
          <span className="services-button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right serivces-button-icon"></i>
          </span>
          <div
            className={
              toggleState === 2
                ? "services-modal active-modal"
                : "services-modal"
            }
          >
            <div className="services-modal-content">
              <i
                className="uil uil-times services-modal-close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="services-modal-title">UI/UX Designer</h3>
              <p className="services-modal-description">
                Creating interfaces that prioritize users needs and preferences
              </p>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>{" "}
                  <p className="services-modal-info">
                    Developing the user interface (UI) and Providing a quality
                    user experience (UX)
                  </p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>{" "}
                  <p className="services-modal-info">
                    Ensuring seamless and attractive user experiences through
                    responsive design
                  </p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>{" "}
                  <p className="services-modal-info">
                    Making engaging and interactive elements to enhance user
                    engagement and satisfaction{" "}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </article>

        <article className="services-content">
          <div>
            <i
              className="uil uil-edit
           services-icon"
            ></i>{" "}
            <h3 className="services-title">
              Visual <br /> Design
            </h3>
          </div>

          <span className="services-button" onClick={() => toggleTab(3)}>
            View More{" "}
            <i className="uil uil-arrow-right serivces-button-icon"></i>
          </span>
          <div
            className={
              toggleState === 3
                ? "services-modal active-modal"
                : "services-modal"
            }
          >
            <div className="services-modal-content">
              <i
                className="uil uil-times services-modal-close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="services-modal-title">Visual Designer</h3>
              <p className="services-modal-description">
                Making aesthetically pleasing works
              </p>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>{" "}
                  <p className="services-modal-info">
                    Graphic design through making logos, branding materials and
                    promotional content
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </section>
    </section>
  );
};

export default Services;
