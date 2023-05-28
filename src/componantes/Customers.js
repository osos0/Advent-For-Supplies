import React from "react";
import mash from "../img/mashreq.jpg";
import masr from "../img/Banque_misr.jpg";
import ahli from "../img/AlAhly.jpg";

const Customers = () => {
  return (
    <>
      <div className="customersCon">
        <div className="container">
          <h2 className="trustcolor">
            Trusted By Over 500 Clients Around The World
          </h2>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <img src={mash} alt="mas" />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <img src={masr} alt="masr" />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <img src={ahli} alt="ahli" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customers;
