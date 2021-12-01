import React from "react";
import AboutMe from "../AboutMe/AboutMe";

import Blogss from "../Blogss/Blogss";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import ParticleBackground from "../ParticleBackground/ParticleBackground";

const Home = () => {
  return (
    <div>
      <ParticleBackground></ParticleBackground>
      <AboutMe></AboutMe>
      <Blogss></Blogss>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
