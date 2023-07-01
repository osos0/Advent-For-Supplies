import {
  faCertificate,
  faGamepad,
  faHandHoldingDroplet,
  faSuitcase,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import aboutimg from "../img/2header.png";

const About = () => {
  return (
    <>
      <div id="ABOUTUS" className="aboutus">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <h5>. ABOUT US .</h5>
              <h1>Trusted By Clients</h1>
              <h1>
                Since <span>2021</span>.
              </h1>
              <p>
                Services We Offer Lorem Ipsum Dolor Sit Amet Consectetur
                Adipisicing Elit Omnis Id Atque Dignissimos Repellat Quae Ullam.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 ">
              <div className="row leftAbout">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="boutChild">
                    <div>
                      <FontAwesomeIcon icon={faCertificate} />
                    </div>
                    <div>
                      <h4>First On Field</h4>
                      <p>
                        Lorem ipsum dolor sit amet consecltetur adipisicing
                        elit. Omnis.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="boutChild">
                    <div>
                      <FontAwesomeIcon icon={faGamepad} />
                    </div>
                    <div>
                      <h4>Easy To Reach</h4>
                      <p>
                        Lorem ipsum dolor sit amet consecltetur adipisicing
                        elit. Omnis.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="boutChild">
                    <div>
                      <FontAwesomeIcon icon={faSuitcase} />
                    </div>
                    <div>
                      <h4>Worldwide Services</h4>
                      <p>
                        Lorem ipsum dolor sit amet consecltetur adipisicing
                        elit. Omnis.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="boutChild">
                    <div>
                      <FontAwesomeIcon icon={faHandHoldingDroplet} />
                    </div>
                    <div>
                      <h4>24/7 Support</h4>
                      <p>
                        Lorem ipsum dolor sit amet consecltetur adipisicing
                        elit. Omnis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 rightAbout">
              <img src={aboutimg} alt="abimg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
