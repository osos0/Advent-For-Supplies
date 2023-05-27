import {
  faArrowRight,
  faCode,
  faCoins,
  faComputer,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <div id="SERVICES">
        <div className="container">
          <h5>. SERVICES .</h5>
          <h1>Services We Offer</h1>
          <p>
            Services We Offer Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing
            Elit Omnis Id Atque Dignissimos Repellat Quae Ullam.
          </p>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 ">
              <div className="servChild">
                <FontAwesomeIcon icon={faComputer} /> <h2>It Supplies</h2>
                <p>
                  Lorem ipsum dolor sit amet consecltetur adipisicing elit.
                  Omnis tempore perfe rendis explicabo.
                </p>
                <Link>
                  Read More
                  <FontAwesomeIcon icon={faArrowRight} className="secondSvg" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 ">
              <div className="servChild">
                <FontAwesomeIcon icon={faCoins} />
                <h2>Financial Support</h2>
                <p>
                  Lorem ipsum dolor sit amet consecltetur adipisicing elit.
                  Omnis tempore perfe rendis explicabo.
                </p>
                <Link>
                  Read More
                  <FontAwesomeIcon icon={faArrowRight} className="secondSvg" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 ">
              <div className="servChild">
                <FontAwesomeIcon icon={faCode} />
                <h2>Web Development</h2>
                <p>
                  Lorem ipsum dolor sit amet consecltetur adipisicing elit.
                  Omnis tempore perfe rendis explicabo.
                </p>
                <Link>
                  Read More
                  <FontAwesomeIcon icon={faArrowRight} className="secondSvg" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 ">
              <div className="servChild">
                <FontAwesomeIcon icon={faComputer} /> <h2>It Supplies</h2>
                <p>
                  Lorem ipsum dolor sit amet consecltetur adipisicing elit.
                  Omnis tempore perfe rendis explicabo.
                </p>
                <Link>
                  Read More
                  <FontAwesomeIcon icon={faArrowRight} className="secondSvg" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 ">
              <div className="servChild">
                <FontAwesomeIcon icon={faCoins} />
                <h2>Financial Support</h2>
                <p>
                  Lorem ipsum dolor sit amet consecltetur adipisicing elit.
                  Omnis tempore perfe rendis explicabo.
                </p>
                <Link>
                  Read More
                  <FontAwesomeIcon icon={faArrowRight} className="secondSvg" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 ">
              <div className="servChild">
                <FontAwesomeIcon icon={faCode} />
                <h2>Web Development</h2>
                <p>
                  Lorem ipsum dolor sit amet consecltetur adipisicing elit.
                  Omnis tempore perfe rendis explicabo.
                </p>
                <Link>
                  Read More
                  <FontAwesomeIcon icon={faArrowRight} className="secondSvg" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
