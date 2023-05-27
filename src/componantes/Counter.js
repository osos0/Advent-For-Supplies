import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Counters = () => {
  return (
    <>
      <div className="Counters">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="countersChild">
                <FontAwesomeIcon icon={faUserTie} />
                <h1>45+</h1>
                <h6>Our Customers</h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="countersChild">
                <FontAwesomeIcon icon={faUserTie} />
                <h1>45+</h1>
                <h6>Our Customers</h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="countersChild">
                <FontAwesomeIcon icon={faUserTie} />
                <h1>45+</h1>
                <h6>Our Customers</h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="countersChild">
                <FontAwesomeIcon icon={faUserTie} />
                <h1>45+</h1>
                <h6>Our Customers</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counters;
