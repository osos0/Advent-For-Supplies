import {
  faFacebook,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBridge,
  faBusinessTime,
  faEnvelope,
  faMapMarker,
  faPhone,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// import { Link } from "react-router-dom";
// import Email from "../img/Email.png";
// import whatsapp from "../img/whatsapp.png";
// import messenger from "../img/message.png";

const Contact = () => {
  return (
    <>
      <div className="container contactCon">
        <h2>TAKE THE OFFICE TOUR</h2>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6 foCon">
                <FontAwesomeIcon icon={faMapMarker} />
              </div>
              <div className="col-lg-9 col-md-9 col-sm-6">
                <h3>ADVENT</h3>
                <p>58 (A) El-Zaytoun Station Street Cairo Egypt</p>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6 foCon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="col-lg-9 col-md-9 col-sm-6">
                <h3>Phone</h3>
                <p>+20 01210008710</p>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6 foCon">
                <FontAwesomeIcon icon={faWhatsapp} />
              </div>
              <div className="col-lg-9 col-md-9 col-sm-6">
                <h3>whatsapp</h3>
                <p>+20 01210008710</p>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6 foCon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="col-lg-9 col-md-9 col-sm-6">
                <h3>Email</h3>
                <p>info@adventaeg.com</p>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6 foCon">
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
              <div className="col-lg-9 col-md-9 col-sm-6">
                <h3>Linkedin</h3>
                <p>0000</p>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6 foCon">
                <FontAwesomeIcon icon={faFacebook} />
              </div>
              <div className="col-lg-9 col-md-9 col-sm-6">
                <h3>Facebook</h3>
                <p>0000</p>
              </div>
            </div>
          </div>

          {/* input */}
          <div className="col-lg-12 col-md-12 col-sm-12 ">
            <h2>GET A FREE CONSULTATION</h2>
            <div className="row contactusCon">
              <div className="col-md-8 col-sm-12 mesconright">
                <div className="conIn1">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required="required"
                  />
                </div>
                <div className="conAllIn">
                  <input
                    type="text"
                    name="name"
                    placeholder="Mobile"
                    required="required"
                  />
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required="required"
                  />
                </div>
                <div className="conAllIn">
                  <input
                    type="text"
                    name="name"
                    placeholder="Email"
                    required="required"
                  />
                  <input
                    type="text"
                    name="name"
                    placeholder="Address"
                    required="required"
                  />
                </div>

                <textarea
                  rows="6"
                  name="message"
                  placeholder="Your Message"
                  required="required"
                ></textarea>
                <button className="btnReverse" type="">
                  Submit
                </button>
              </div>
            </div>
          </div>
          {/* or contact */}
          <div className="col-lg-12 col-md-12 col-sm-12 orContactCon">
            <div className="row">
              <h2>OR CONTACT A DEPARTMENT DIRECTLY</h2>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <FontAwesomeIcon icon={faBusinessTime} />
                <h3>SALES</h3>
                <p>
                  Speak with Interact sales representative about our products or
                  services.
                </p>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <FontAwesomeIcon icon={faBridge} />
                <h3>CUSTOMER SUPPORT</h3>
                <p>
                  We’re here to help with inquiries about account support,
                  product support and more.
                </p>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <FontAwesomeIcon icon={faQuestion} />
                <h3>OTHER INQUIRIES</h3>
                <p>
                  We’d be happy to address your questions about employee
                  verification or anything else on your mind.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
