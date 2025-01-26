import React from "react";
import "./skills.css";
import skilldata from "./Skills_data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Container, Row, Col} from "react-bootstrap";

const Skills = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
  return (
    // <section className="skills section" id="skills">
    //   <h2 className="section-title text-cs">Skills</h2>
    //   <p className="section-subtitle">My talents</p>

    //   <section className="skills-contain contain grid">
    //     {skilldata.map(({ name, percentage, description }, index) => {
    //       return (
    //         <article className="skills-item">
    //           <div className="skills-titles">
    //             <h3 className="skills-name">{name}</h3>
    //             <span className="skills-number">
    //               {percentage} <span>%</span>
    //             </span>
    //           </div>

    //           <p className="skills-description">{description}</p>

    //           <div className="skills-bar">
    //             <span
    //               className="skills-percentage"
    //               style={{ width: `${percentage}%` }}
    //             >
    //               <span></span>
    //             </span>
    //           </div>
    //         </article>
    //       );
    //     })}
    //   </section>
    // </section>

    <section className="skill section" id="skills">

    </section>

    

    
  );

  
};

export default Skills;
