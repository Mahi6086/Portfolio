import React from "react";
import Particles from "react-particles-js";

import Typewriter from "typewriter-effect";
import "./ParticleBackground.css";
const ParticleBackground = () => {
  return (
    <div style={{ backgroundColor: "#000000", color: "#F50057" }}>
      <Particles
        params={{
          particles: {
            number: {
              value: 210,
            },
            size: {
              value: 1,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
      <CenterTitle></CenterTitle>
    </div>
  );
};

function CenterTitle() {
  return (
    <div id="text_div center_all">
      <div className="center_all">
        <div className="text-start">
          <h1 data-aos="fade-up-right" className="Title">
            Hi ,
          </h1>
          <h1 data-aos="fade-up-left" className="Title">
            I'm{" "}
            <span
              style={{
                color: "#F50057",
              }}
            >
              Mahi Hasan
            </span>
          </h1>
          <div className="Sub-Title">
            <Typewriter
              options={{
                strings: ["Frontend Developer", "React Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className="d-flex align-items-center pb-2 social-media">
            <span className="facebook">
              <a
                style={{ color: "#F50057" }}
                href="https://www.facebook.com/mahin.mahi.142"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </span>
            <span className="github">
              <a
                style={{ color: "#F50057", marginLeft: "20px" }}
                href="https://github.com/Mahi6086"
              >
                <i className="fab fa-github"></i>
              </a>
            </span>
            <span className="twitter">
              <a
                style={{ color: "#F50057", marginLeft: "20px" }}
                href="https://twitter.com/Mahihas58002718"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </span>
            <span className="linkedin">
              <a
                style={{ color: "#F50057", marginLeft: "20px" }}
                href="https://www.linkedin.com/in/mahi-hasan-3b8490216/"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </span>
          </div>
          <div>
            <button className="btn-2" style={{ marginRight: "20px" }}>
              <a
                className="btn-3"
                href="https://drive.google.com/file/d/1uim576JTjGW6KTe99XkLVnq0WPlADMGc/view?usp=sharing"
                download
              >
                Download Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParticleBackground;
