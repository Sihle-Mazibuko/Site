import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work-card" key={item.id}>
      <img src={item.image} alt="Screenshot of work" className="work-img" />
      <h3 className="work-title">{item.title}</h3>
      <a
        href={item.github}
        className="work-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Github File{" "}
        <i className="uil uil-arrow-right work-button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;
