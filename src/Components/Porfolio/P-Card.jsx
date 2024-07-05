import React, { useState } from "react";

const PCard = (props) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <section className="box btn-shadow">
        <figure className="imag">
          <img
            src={props.image}
            alt="project screenshot"
            onClick={toggleModal}
          />
        </figure>

        <article className="category d-flex">
          <span onClick={toggleModal}>{props.category}</span>
          <label>
            <i className="far uil-heart">
              {" "}
              <span>{props.likes}</span>
            </i>
          </label>
        </article>

        <article className="title">
          <h2 onClick={toggleModal}>
            <span>{props.title}</span>{" "}
            <a href="#popup" className="arrow">
              <i className="far uil-arrow-right"></i>
            </a>
          </h2>{" "}
        </article>
      </section>

      {modal && (
        <section className="modal">
          <article onClick={toggleModal} className="overlay">
            <section className="modal-content d-flex">
              <article className="modal-img left">
                <img src={props.image} alt="Project screenshot" />
              </article>

              <article className="modal-text right">
                <span>Featured - Design</span>
                <h2>{props.title}</h2>
                <p>{props.i}</p>
                <figure className="button f-flex mtop">
                  <button className="btn-shadow">
                    Like <i className="far uil-thumbs-up"></i>
                  </button>
                  <button className="btn-shadow">
                    View Project <i className="uil uil-arrow-right"></i>
                  </button>
                </figure>
                <button
                  className="close-modal btn-shadow"
                  onClick={toggleModal}
                >
                  <i className="uil-times"></i>
                </button>
              </article>
            </section>
          </article>
        </section>
      )}
    </>
  );
};

export default PCard;
