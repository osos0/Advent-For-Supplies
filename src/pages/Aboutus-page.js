import React from "react";
import Navbar from "../componantes/Navbar";
import Footer from "../componantes/Footer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
// import flow1 from "../img/graybalon.png";
// import flow2 from "../img/square-dots-orange.png";
// import flow3 from "../img/squareimg.png";
// import flow4 from "../img/twobalone.png";
// import flow5 from "../img/lines.png";
// import Services from "../componantes/Services";
// import About from "../componantes/About";
import Story from "../componantes/story";

const AboutusPage = () => {
  return (
    <>
      <div className="bgcolor">
        <Navbar />
        <section className="subMain">
          <h1>About Us</h1>
          <div className="conOfLinks">
            <FontAwesomeIcon icon={faHome} />
            <Link to={"/"}> HOME /</Link>
            <Link> ABOUT US </Link>
          </div>
          {/* <img src={flow1} alt="flow1" className="flow1" /> */}
          {/* <img src={flow2} alt="flow1" className="flow2" /> */}
          {/* <img src={flow3} alt="flow1" className="flow3" /> */}
          {/* <img src={flow4} alt="flow1" className="flow4" /> */}
          {/* <img src={flow5} alt="flow1" className="flow5" /> */}
        </section>
        <Story />
        {/* <Services /> */}
        {/* <About /> */}
        <Footer />
      </div>
    </>
  );
};

export default AboutusPage;
