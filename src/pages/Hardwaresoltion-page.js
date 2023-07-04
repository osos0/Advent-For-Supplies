import React from "react";
import Navbar from "../componantes/Navbar";
import Footer from "../componantes/Footer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import HardwraeSoltion from "../componantes/Hardware";

const HardwraeSoltionPage = () => {
  return (
    <>
      <div className="bgcolor">
        <Navbar />
        <section className="subMain">
          <h1>Hardware Solutions</h1>
          <div className="conOfLinks">
            <FontAwesomeIcon icon={faHome} />
            <Link to={"/"}> HOME /</Link>
            <Link> Hardware Solutions </Link>
          </div>
        </section>
        <HardwraeSoltion />
        <Footer />
      </div>
    </>
  );
};

export default HardwraeSoltionPage;
