import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/Advent_Logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light allNav">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" className="logostyling" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse navFix"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link licolor" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link licolor"
                  aria-current="page"
                  to="/aboutus"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link licolor"
                  aria-current="page"
                  to="/news"
                >
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link licolor licolor"
                  aria-current="page"
                  to="/customers"
                >
                  customers
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link licolor licolor"
                  aria-current="page"
                  to="/contactus"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
