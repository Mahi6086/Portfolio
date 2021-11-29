import React from "react";
import Particles from "react-particles-js";
import "./ParticleBackground.css";
const ParticleBackground = () => {
  return (
    <div>
      <Particles
        params={{
          particles: {
            number: {
              value: 200,
            },
            size: {
              value: 3,
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
        </div>
      </div>
    </div>
  );
}

export default ParticleBackground;
