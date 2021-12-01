import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./img1.svg";
const Menubar = () => {
  return (
    <div style={{ backgroundColor: "#212529" }}>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <NavLink to="/home" className="nav-link">
              <div className="" style={{ width: "40px" }}>
                <img className="img-fluid " src={logo} alt="" />
              </div>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto fs-6 ">
                <NavLink
                  to="/products"
                  className="nav-link text-white-50  fw-bolder"
                >
                  PROJETCS
                </NavLink>
                <NavLink
                  to="/home/blog"
                  className="nav-link text-white-50  fw-bolder me-2"
                >
                  BLOG
                </NavLink>
                <NavLink
                  to="/home/about"
                  className="nav-link text-white-50 fw-bolder"
                >
                  ABOUT
                </NavLink>

                <NavLink
                  to="home/contact"
                  className="nav-link text-white-50 fw-bolder "
                >
                  CONTACT
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Menubar;
