import React from "react";
// import ahli from "../img/AlAhly.jpg";
import Hil from "../img/Hil.png";
import Meshreq from "../img/mash.png";
import Dak from "../img/Dak.png";
import tele from "../img/tele.png";
import talat from "../img/talat.png";
import kin from "../img/kin.png";

const Customers2 = () => {
  return (
    <>
      <div className="container brands">
        <h1 className="text-center m-5">customers</h1>

        <div className="row conOfAllCustomers">
          <div className="col-lg-3 col-md-4 col-sm-6 ">
            <div className="customersImgCon">
              <img src={Meshreq} alt="ahli" />
            </div>
            {/* <h2 className="customerspCon">Bank </h2> */}
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 ">
            <div className="customersImgCon">
              <img src={Hil} alt="ahli" />
            </div>
            {/* <h2 className="customerspCon">Bank </h2> */}
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 ">
            <div className="customersImgCon">
              <img src={Dak} alt="ahli" />
            </div>
            {/* <h2 className="c/ustomerspCon">Bank </h2> */}
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 ">
            <div className="customersImgCon">
              <img src={tele} alt="ahli" />
            </div>
            {/* <h2 className="customerspCon">Bank </h2> */}
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 ">
            <div className="customersImgCon">
              <img src={talat} alt="ahli" />
            </div>
            {/* <h2 className="customerspCon">Bank </h2> */}
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 ">
            <div className="customersImgCon">
              <img src={kin} alt="ahli" />
            </div>
            {/* <h2 className="customerspCon">Bank </h2> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Customers2;
