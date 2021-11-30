import React from "react";
import Particles from "react-particles-js";

import Typewriter from "typewriter-effect";
import "./ParticleBackground.css";
const ParticleBackground = () => {
  return (
    <div style={{ backgroundColor: "#141414", color: "#F50057" }}>
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
        </div>
      </div>
    </div>
  );
}

export default ParticleBackground;
