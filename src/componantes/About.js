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
                      <h4>Vision</h4>
                      <p>
                        ADVENT is developing and marketing a wide range of
                        products and services catering to the varied and
                        specific needs of the growing technology businesses
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
                      <h4>Strategy</h4>
                      <p>
                        Lead the transformation of business through Digital, IT,
                        Security and enable customers to operate their
                        businesses with simpler, more cost-effective networks
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
                      <h4>Mission</h4>
                      <p>
                        Transforming the business lane to an essential
                        infrastructure company that provides a safe, secure,
                        intelligent, and flexible network infrastructure to
                        deliver an immersive digital experience
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
                      <h4>Purpose</h4>
                      <p>
                        Creating a new prestige of work that lets our previous
                        clients improve their business with us, and our new
                        clients to have the confidence and receive the best
                        service and solutions, Connecting technologies that
                        drive human progress
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
