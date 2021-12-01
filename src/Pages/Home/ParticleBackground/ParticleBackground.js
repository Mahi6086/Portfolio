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
          <h1
            className="customer-subTitle"
            style={{
              fontFamily: "Cinzel Decorative",
              fontFamily: "DM Sans",

              fontFamily: "Quantico",
              fontSize: "3.5rem",
              fontWeight: "bolder",
            }}
          >
            Hi,
          </h1>
          <h1
            className="customer-subTitle"
            style={{
              fontFamily: "Cinzel Decorative",
              fontFamily: "DM Sans",
              fontFamily: "Quantico",
              fontFamily: "Quantico",
              fontSize: "3.5rem",
              fontWeight: "bolder",
            }}
          >
            I'm{" "}
            <span
              style={{
                color: "#F50057",
              }}
            >
              Mahi Hasan
            </span>
          </h1>
          <div
            style={{
              fontFamily: "Cinzel Decorative",
              fontFamily: "DM Sans",
              fontFamily: "Quantico",
              fontFamily: "Quantico",
              fontSize: "2.5rem",
              fontWeight: "bolder",
              position: "fixed",
            }}
          >
            <Typewriter
              options={{
                strings: ["Frontend Developer", "React Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div
            className="d-flex align-items-center "
            style={{ marginTop: "70px" }}
          >
            <span style={{ fontSize: "30px" }}>
              <a
                style={{ color: "#F50057" }}
                href="https://www.facebook.com/mahin.mahi.142"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </span>
            <span style={{ fontSize: "30px" }}>
              <a
                style={{ color: "#F50057", marginLeft: "20px" }}
                href="https://github.com/Mahi6086"
              >
                <i className="fab fa-github"></i>
              </a>
            </span>
            <span style={{ fontSize: "30px" }}>
              <a
                style={{ color: "#F50057", marginLeft: "20px" }}
                href="https://twitter.com/Mahihas58002718"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </span>
            <span style={{ fontSize: "30px" }}>
              <a
                style={{ color: "#F50057", marginLeft: "20px" }}
                href="https://www.linkedin.com/in/mahi-hasan-3b8490216/"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </span>
          </div>
          <div>
            <button type="button" className="btn btn-outline-danger">
              <a
                className="resume"
                href="https://drive.google.com/file/d/1uim576JTjGW6KTe99XkLVnq0WPlADMGc/view?usp=sharing"
                download
              >
                Downloaded Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParticleBackground;
