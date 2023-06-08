import React from "react";
import { Link } from "react-router-dom";
// import logo from "../img/Advent_Logo.png";
import logo11 from "../img/logo_3d.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSun } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  const [Navbarchange, setNavbarchange] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 400) {
      setNavbarchange(true);
    } else {
      setNavbarchange(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <nav
        className={
          Navbarchange
            ? `navbar navbar-expand-lg navbar-light allNavChange`
            : `navbar navbar-expand-lg navbar-light allNav`
        }
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {/* <img src={logo} alt="logo" className="logostyling" /> */}
            <img src={logo11} alt="logo" className="logostyling" />
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
                  to="/brandes"
                >
                  Brandes
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link licolor licolor"
                  aria-current="page"
                  to="/customers"
                >
                  Customers
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
              <li className="nav-item">
                <Link
                  className="nav-link licolor licolor"
                  aria-current="page"
                  to="/"
                >
                  <FontAwesomeIcon icon={faSearch} />
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link licolor licolor"
                  aria-current="page"
                  to="/"
                >
                  <FontAwesomeIcon icon={faSun} />
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
