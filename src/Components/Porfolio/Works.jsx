import React, { useEffect, useState } from "react";
import { projectsNav, PortfolioData } from "./Porfolio_Data";
import WorkItems from "./WorkItems";

const Works = () => {
  const [item, setItem] = useState();
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(PortfolioData);
    } else {
      const newProjects = PortfolioData.filter((project) => {
        return project.category === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };

  return (
    <>
      <div className="work-filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${active === index ? "active-work" : ""} work-item`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work-contain contain grid">
        {projects.map((item) => {
          return <WorkItems item={item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default Works;
