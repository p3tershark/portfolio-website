import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark text-white pt-0 pb-0">
      <button
        className="navbar-toggler float-left"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div>
        <div
          className="collapse navbar-collapse user-select-none"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link">
                <small>
                  <i className="fas fa-home"></i> Home
                </small>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                <small>
                  <i className="fas fa-file-alt"></i> About
                </small>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/tools" className="nav-link">
                <small>
                  <i className="fas fa-toolbox"></i> Tools
                </small>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/channel" className="nav-link">
                <small>
                  <i className="fas fa-wifi"></i> Channel
                </small>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="user-select-none float-right mylogo">
        p<strong className="text-danger">3</strong>tershark
      </div>
    </nav>
  );
};

export default Navbar;
