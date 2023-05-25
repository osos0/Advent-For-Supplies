import React from "react";
import mash from "../img/mashreq.jpg";
import masr from "../img/Banque_misr.jpg";
import ahli from "../img/AlAhly.jpg";

const Customers = () => {
  return (
    <>
      <div className="container customersCon">
        <h1>Our Customers</h1>
        <div className="row">
          <div className="col-lg-4 col-md-3 col-sm-4 cusChildCon">
            <img src={mash} alt="" />
            {/* <h3>El mashreq</h3> */}
          </div>
          <div className="col-lg-4 col-md-3 col-sm-4 cusChildCon">
            <img src={masr} alt="" />
            {/* <h3>Masr</h3> */}
          </div>
          <div className="col-lg-4 col-md-3 col-sm-4 cusChildCon">
            <img src={ahli} alt="" />
            {/* <h3>El Ahli</h3> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Customers;
