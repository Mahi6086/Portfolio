import React from "react";

const Contact = () => {
  return (
    <div className="aboutme">
      <div className="container">
        <div data-aos="fade-down" data-aos-duration="2000">
          <h1
            style={{
              color: "#c71c58",
              fontFamily: "Cinzel Decorative",
              fontFamily: "DM Sans",
              fontFamily: "Quantico",
              fontSize: "3rem",
              fontWeight: "bolder",
              paddingBottom: "15px",
            }}
          >
            Co<span style={{ borderBottom: "2px solid #c71c58" }}>nta</span>ct
          </h1>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
          <h5
            style={{
              color: "#c71c58",
              fontFamily: "Cinzel Decorative",
              fontFamily: "DM Sans",
              fontFamily: "Quantico",
              fontWeight: "bolder",
              paddingBottom: "15px",
            }}
          >
            Have a question or want to work together
          </h5>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
          <div className="mb-3">
            <input
              type="text"
              className="form-control w-50 mx-auto"
              placeholder="Your name"
              aria-label="Your name"
              required
            />
          </div>
          <div className="mb-3 mt-3">
            <input
              type="email"
              className="form-control w-50 mx-auto"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              required
            />
          </div>
          <div className="mb-3 mt-4">
            <textarea
              className="form-control w-50 mx-auto"
              id="exampleFormControlTextarea1"
              placeholder="Send me massage"
              rows="5"
            ></textarea>
          </div>
          <div className="">
            <button
              type="button"
              className="btn btn-outline-danger  resume ps-4 pe-4"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
