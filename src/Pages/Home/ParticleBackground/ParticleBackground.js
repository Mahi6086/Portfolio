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
        <h1 className="customer-subTitle">Hey, I am Mahi</h1>
      </div>
    </div>
  );
}

export default ParticleBackground;
