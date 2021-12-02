import React from "react";
import "./Contact.css";
/* cc205e */
const Contact = () => {
  return (
    <div className="aboutme">
      <div className="container">
        <div>
          <h1
            className="heading"
            data-aos="fade-down"
            data-aos-duration="2000"
            style={{
              color: "#c71c58",
              fontFamily: "Cinzel Decorative",
              fontFamily: "DM Sans",
              fontFamily: "Quantico",
              paddingBottom: "15px",
            }}
          >
            Co<span style={{ borderBottom: "2px solid #c71c58" }}>nta</span>ct
          </h1>
        </div>
        <div>
          <h5
            data-aos="fade-up"
            data-aos-duration="2000"
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
              className="form-control contact"
              placeholder="Your name"
              aria-label="Your name"
              required
            />
          </div>
          <div className="mb-3 mt-3">
            <input
              type="email"
              className="form-control contact"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              required
            />
          </div>
          <div className="mb-3 mt-4">
            <textarea
              className="form-control  contact"
              id="exampleFormControlTextarea1"
              placeholder="Send me massage"
              rows="5"
            ></textarea>
          </div>
          <div
            className=""
            style={{ color: "#f50057", backgroundColor: "#100D19" }}
          >
            <button className="btn-2">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
