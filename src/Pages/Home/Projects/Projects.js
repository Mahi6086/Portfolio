import React from "react";
import watch from "./wristwatch-animate.svg";
import tour from "./dubai-animate.svg";
import healthcare from "./nursing-home-animate.svg";
import "./Projects.css";
const Projects = () => {
  return (
    <div className="aboutme" style={{ height: "100%" }}>
      <div data-aos="fade-up">
        <h1
          className="heading"
          style={{
            color: "#c71c58",
            fontFamily: "Cinzel Decorative",
            fontFamily: "DM Sans",
            fontFamily: "Quantico",

            paddingBottom: "60px",
          }}
        >
          Pr
          <span
            style={{ borderBottom: "3px solid #c71c58", paddingBottom: "5px" }}
          >
            oje
          </span>
          ts
        </h1>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4 projects">
        <div
          className="col"
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div className="card">
            <img src={watch} className="card-img" alt="..." />
            <div className="card-img-overlay">
              <h2 className="card-title text-start rounded rounded-pill ps-3 pb-2 pt-1 pe-3 dialz">
                Dialz
              </h2>
            </div>
          </div>
        </div>
        <div
          className="col"
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div className="card">
            <img src={tour} className="card-img" alt="..." />
            <div className="card-img-overlay">
              <h2 className="card-title text-start rounded rounded-pill ps-3 pb-2 pt-1 pe-2 tevily ">
                Tevily
              </h2>
            </div>
          </div>
        </div>
        <div
          className="col"
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div className="card">
            <img src={healthcare} className="card-img" alt="..." />
            <div className="card-img-overlay">
              <h2 className="card-title text-start rounded rounded-pill ps-3 pb-2 pt-1 pe-2 mediciva ">
                Mediciva
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
