import React from "react";
import Navbar from "../componantes/Navbar";
import Footer from "../componantes/Footer";
import Customers from "../componantes/Customers";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
// import flow1 from "../img/graybalon.png";
// import flow2 from "../img/square-dots-orange.png";
// import flow3 from "../img/squareimg.png";
// import flow4 from "../img/twobalone.png";
// import flow5 from "../img/lines.png";
import Customers2 from "../componantes/Customers2";

const CustomersPage = () => {
  return (
    <>
      <div className="bgcolor">
        <Navbar />
        <section className="subMain">
          <h1>Customers</h1>
          <div className="conOfLinks">
            <FontAwesomeIcon icon={faHome} />
            <Link to={"/"}> HOME /</Link>
            <Link> CUSTOMERS </Link>
          </div>
          {/* <img src={flow1} alt="flow1" className="flow1" />
          <img src={flow2} alt="flow1" className="flow2" />
          <img src={flow3} alt="flow1" className="flow3" />
          <img src={flow4} alt="flow1" className="flow4" />
          <img src={flow5} alt="flow1" className="flow5" /> */}
        </section>
        <Customers2 />
        <Customers />
        <Footer />
      </div>
    </>
  );
};

export default CustomersPage;
