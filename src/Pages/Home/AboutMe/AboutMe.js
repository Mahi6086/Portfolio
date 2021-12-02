import React, { useEffect } from "react";
import img2 from "./profile-img.5179e446.png";
import "./Aboutme.css";
import AOS from "aos";
import "aos/dist/aos.css";
const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 2000,
      easing: "ease",
    });
  }, []);
  return (
    <div className="aboutme">
      <div id="about" className="container ">
        <div data-aos="fade-up">
          <h1
            id="about"
            className="intro"
            style={{
              color: "#c71c58",
              fontFamily: "Cinzel Decorative",
              fontFamily: "DM Sans",
              fontFamily: "Quantico",

              paddingBottom: "15px",
            }}
          >
            Let Me In
            <span
              style={{
                borderBottom: "3px solid #c71c58",
                paddingBottom: "5px",
              }}
            >
              trodu
            </span>
            ce Myself
          </h1>
        </div>
        <div className="row">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="col-12 col-md-6"
          >
            <img className="w-75" src={img2} alt="" />
          </div>

          <div data-aos="fade-left" className="col-12 col-md-6 introduce">
            <h1
              className="text-start"
              style={{
                color: "#c71c58",
                fontFamily: "Cinzel Decorative",
                fontFamily: "DM Sans",
                fontFamily: "Quantico",
              }}
            >
              I'm <strong>Mahi Hasan</strong>
            </h1>
            <h4
              className="text-start"
              style={{
                color: "#ECECED",
                fontFamily: "Cinzel Decorative",
                fontFamily: "DM Sans",
                fontFamily: "Quantico",
                fontFamily: "Spectral",
                lineHeight: "35px",
                textAlign: "justify",
              }}
            >
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️ My field of Interest's are building new Web
              Technologies and Products. A passionate
              <strong style={{ color: "#c71c58", fontStyle: "italic" }}>
                {" "}
                Front-end Web Developer
              </strong>
              🚀 I have an experience of building
              <strong style={{ color: "#c71c58", fontStyle: "italic" }}>
                Web applications <br />
              </strong>
              with
              <strong style={{ color: "#c71c58", fontStyle: "italic" }}>
                JavaScript, Reactjs, Nodejs, Expressjs, MongoDB
              </strong>{" "}
              and some other cool libraries.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
