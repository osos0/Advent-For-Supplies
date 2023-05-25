import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faList,
  faLocationPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Biglogo from "../img/Advent _Logo_Big.jpg";
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
      <div className="container">
        <div className=" footerCon text-sm-center">
          <div className="row">
            <div className="col-md-4 col-sm-6 bigLogoCon">
              <img src={Biglogo} alt="logo" className="bigLogo" />
            </div>
            <div className="col-md-4 col-sm-6 rightFooter">
              <h3>Quick Links</h3>
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
            <div className="col-md-4 col-sm-12 rightFooter">
              <h3>Our Infrmatio</h3>
              <hr />
              <div className="smallConFont">
                <FontAwesomeIcon icon={faPhone} />
                <p>+20 01210008710</p>
              </div>
              <div className="smallConFont">
                <FontAwesomeIcon icon={faLocationPin} />
                <p>58 (A) El-Zaytoun Station Street</p>
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
    </>
  );
};

export default Footer;
