import React from "react";
import skill1 from "./skillsimg/download.png";
import skill2 from "./skillsimg/css.5721a392.png";
import skill3 from "./skillsimg/download (1).png";
import skill4 from "./skillsimg/react.7aa3e743.png";
import skill5 from "./skillsimg/download (2).png";
import skill6 from "./skillsimg/download (6).png";
import skill7 from "./skillsimg/node.a4713ff2.png";
import skill8 from "./skillsimg/mongodb.a8889d62.png";
import skill9 from "./skillsimg/express.c5f39294.png";
import skill10 from "./skillsimg/firebase.8ee1bbf4.png";
import skill11 from "./skillsimg/download (4).png";
import skill12 from "./skillsimg/lV55uZMx.png";
import skill13 from "./skillsimg/download (3).png";
import skill14 from "./skillsimg/github.952d5bf9.png";
import skill15 from "./skillsimg/vs-code.02e4f4ae.png";

import "./Skills.css";
const Skills = () => {
  return (
    <div className="aboutme">
      <div className="container">
        <h1
          data-aos="fade-up"
          className="heading"
          /*  data-aos="fade-down"
            data-aos-duration="2000" */
          style={{
            color: "#c71c58",
            fontFamily: "Cinzel Decorative",
            fontFamily: "DM Sans",
            fontFamily: "Quantico",
            paddingBottom: "15px",
          }}
        >
          S<span style={{ borderBottom: "3px solid #c71c58" }}>kil</span>ls
        </h1>
        <div className="skills pt-5">
          <img
            data-aos="fade-right"
            className="skill-img"
            src={skill1}
            alt=""
            srcset=""
          />
          <img
            data-aos="fade-right"
            className="skill-img"
            src={skill2}
            alt=""
            srcset=""
          />
          <img
            data-aos="fade-right"
            className="skill-img"
            src={skill3}
            alt=""
            srcset=""
          />
          <img
            data-aos="fade-right"
            className="skill-img"
            src={skill4}
            alt=""
            srcset=""
          />
          <img
            data-aos="fade-right"
            className="skill-img"
            src={skill5}
            alt=""
            srcset=""
          />
          <img
            data-aos="fade-right"
            className="skill-img"
            src={skill6}
            alt=""
            srcset=""
          />
          <img
            data-aos="fade-left"
            className="skill-img"
            src={skill7}
            alt=""
            srcset=""
          />
          <img
            data-aos="fade-left"
            className="skill-img"
            src={skill8}
            alt=""
            srcset=""
          />
          <img
            data-aos="fade-left"
            className="skill-img"
            src={skill9}
            alt=""
            srcset=""
          />
          <img
            data-aos="fade-left"
            className="skill-img"
            src={skill10}
            alt=""
            srcset=""
          />
          <img
            data-aos="fade-left"
            className="skill-img"
            src={skill11}
            alt=""
            srcset=""
          />
          <img
            data-aos="fade-left"
            className="skill-img"
            src={skill12}
            alt=""
            srcset=""
          />
          <img
            data-aos="fade-right"
            className="skill-img"
            src={skill13}
            alt=""
            srcset=""
          />
          <img
            data-aos="fade-right"
            className="skill-img"
            src={skill14}
            alt=""
            srcset=""
          />
          <img
            data-aos="fade-right"
            className="skill-img"
            src={skill15}
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
