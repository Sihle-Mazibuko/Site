import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact</h2>
      <span className="section-subtitle">Get in touch with me</span>

      <div className="contact-contain contain grid">
        <div className="contact-content">
          <h3 className="contact-title">Talk to me</h3>

          <div className="contact-info">
            {/* email */}
            <div className="contact-card">
              <i className="bx uil- contact-card-icon"></i>

              <h3 className="contact-card-title">Email</h3>
              <span className="contact-card-data">sihlemazii@gmail.com</span>

              <a href="mailto:sihlemazii@gmail.com" className="contact-button">
                Write to me
                <i className="bx uil-arrow-right contact-button-icon"></i>
              </a>
            </div>
            {/* Whatsapp */}
            <div className="contact-card">
              <i className="bx uil- contact-card-icon"></i>

              <h3 className="contact-card-title">Whatsapp</h3>
              <span className="contact-card-data">(+27)-83-989-0907</span>

              <a href="" className="contact-button">
                Write to me
                <i className="bx uil-arrow-right contact-button-icon"></i>
              </a>
            </div>
            {/* instagram */}
            <div className="contact-card">
              <i className="bx uil- contact-card-icon"></i>

              <h3 className="contact-card-title">Instagram</h3>
              <span className="contact-card-data">sihle.jpeg</span>

              <a href="" className="contact-button">
                Write to me
                <i className="bx uil-arrow-right contact-button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-content">
          <h3 className="contact-title">Write me your project</h3>
        </div>
      </div>
    </section>
  );
};

export default Contact;
