import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faEnvelope,
  faList,
  faLocationPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Biglogo from "../img/logo_3d.png";
import { Link } from "react-router-dom";
import {
  faLinkedin,
  faWhatsapp,
  faFacebookMessenger,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="footerAll">
        <div className="container">
          <div className=" footerCon text-sm-center">
            <div className="row">
              <div className="col-md-5 col-md-5 col-sm-12 pt-2 bigLogoCon">
                <img src={Biglogo} alt="logo" className="bigLogo" />
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptatibus facere modi possimus dignissimos, aliquam nobis
                  eaque? Voluptatem magnam quisquam rem.
                </p>
                <div className="conOfSubscripe">
                  <label htmlFor="emailInput">
                    Subscribe To Our News Letter
                  </label>
                  <div className="conOfinput">
                    <input
                      id="emailInput"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                    />
                    <button>Subscribe</button>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-md-3 col-sm-6 pt-4 rightFooter">
                <h5>Useful Links</h5>
                <hr />
                <a href="#About" className="text-center">
                  Home
                </a>
                <a href="#Skils" className="text-center">
                  About Us
                </a>
                <a href="#Contact" className="text-center">
                  News
                </a>
                <a href="#Portfolio" className="text-center">
                  Customers
                </a>
                <a href="#Contact" className="text-center">
                  Contact Us
                </a>
                {/* <a href="#freelancer">freelancer</a> */}
              </div>

              <div className="col-md-4 col-md-4 col-sm-6 pt-4 rightFooter">
                <h5>Contact Information</h5>
                <hr />
                <div className="smallConFont">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <p>info@adventaeg.com</p>
                </div>
                <div className="smallConFont">
                  <FontAwesomeIcon icon={faLocationPin} />
                  <p>58 (A) El-Zaytoun Station Street</p>
                </div>

                <div className="smallConFont">
                  <FontAwesomeIcon icon={faPhone} />
                  <p>+20 01210008710</p>
                </div>

                <div className="smallConFont">
                  <FontAwesomeIcon icon={faBook} />
                  <p>Tax Identification No : 648-537-404</p>
                </div>
                <div className="smallConFont">
                  <FontAwesomeIcon icon={faList} />
                  <p> Commercial Registration No : 173238</p>
                </div>
                <div className="footerFontAwsomeCon">
                  <Link to="https://www.linkedin.com/in///" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </Link>
                  <Link to="/" target="_blank">
                    <FontAwesomeIcon icon={faSquareFacebook} />
                  </Link>
                  <Link
                    to="https://api.whatsapp.com/send?phone=201210008710"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </Link>
                  <Link to="http://m.me///" target="_blank">
                    <FontAwesomeIcon icon={faFacebookMessenger} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footerbg"></div>
      </div>
    </>
  );
};

export default Footer;
