import React from "react";
import { NavLink } from "react-router-dom";

const Menubar = () => {
  return (
    <div className="">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <NavLink to="/home" className="nav-link">
              <div className="">
                <img className="img-fluid w-75" src="" alt="" />
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
                  className="nav-link text-dark fw-bolder"
                  activeStyle={{
                    color: "#A99577",
                  }}
                >
                  SHOP
                </NavLink>

                <NavLink to="/about" className="nav-link text-dark fw-bolder">
                  ABOUT
                </NavLink>

                <NavLink
                  to="/contact"
                  className="nav-link text-dark fw-bolder "
                >
                  CONTACT
                </NavLink>

                <NavLink
                  to="/dashBoard"
                  className="nav-link text-dark fw-bolder  me-2"
                >
                  <span className="">
                    <i className="fas fa-user-shield me-1"></i>
                  </span>
                  DASHBOARD
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
