import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import Particles from "react-tsparticles";
import Blogss from "../Blogss/Blogss";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import ParticleBackground from "../ParticleBackground/ParticleBackground";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const Home = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div>
      <ParticleBackground></ParticleBackground>
      <div>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            /*  background: {
              color: {
                value: "#0d47a1",
              },
            }, */
            fpsLimit: 100,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 100,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 2,
                },
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#c71c58",
              },
              links: {
                color: "#c71c58",
                distance: 100,
                enable: true,
                opacity: 0.5,
                width: 0.5,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: true,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 50,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
        <AboutMe></AboutMe>
        <Skills></Skills>
        <Projects></Projects>
        <Blogss></Blogss>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
