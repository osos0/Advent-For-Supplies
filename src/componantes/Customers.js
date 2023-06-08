import React from "react";
import mash from "../img/mashreq.jpg";
import masr from "../img/Banque_misr.jpg";
import ahli from "../img/AlAhly.jpg";

const Customers = () => {
  return (
    <>
      <div className="container brands">
        <h1 className="text-center m-5">customers</h1>

        <div className="row conOfAllCustomers">
          <div className="col-lg-3 col-md-4 col-sm-6 ">
            <div className="customersImgCon">
              <img src={ahli} alt="ahli" />
            </div>
            <h2 className="customerspCon">Bank </h2>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 ">
            <div className="customersImgCon">
              <img src={ahli} alt="ahli" />
            </div>
            <h2 className="customerspCon">Bank </h2>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 ">
            <div className="customersImgCon">
              <img src={ahli} alt="ahli" />
            </div>
            <h2 className="customerspCon">Bank </h2>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 ">
            <div className="customersImgCon">
              <img src={ahli} alt="ahli" />
            </div>
            <h2 className="customerspCon">Bank </h2>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 ">
            <div className="customersImgCon">
              <img src={ahli} alt="ahli" />
            </div>
            <h2 className="customerspCon">Bank </h2>
          </div>
        </div>
      </div>
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
