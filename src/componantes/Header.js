import React from "react";
import header from "../img/headerImg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
// import img11 from "../img/headder-full.jpg";
// import img22 from "../img/logo_3d.png";

const Header = () => {
  return (
    <>
      <div className="headerAll">
        <div className="container">
          {/* <div className=" text-sm-center headerCon"> */}
          <div className="row headerCon">
            <div className="col-md-6 col-md-6 col-sm-12 pt-2 leftCon">
              <div className="headerfonteawsomeIcones">
                <Link>
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
                <Link>
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
                <Link>
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link>
                  <FontAwesomeIcon icon={faTelegram} />
                </Link>
              </div>
              <h5>IT SOLUTIONS</h5>
              <h1>Providing The Best</h1>
              <h1>Services & IT</h1>
              <h1 className="blueH1"> SOLUTIONS</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatibus facere modi possimus dignissimos, aliquam nobis
                eaque? Voluptatem magnam quisquam rem.
              </p>
              <button type="">Start Now</button>
            </div>
            <div className="col-md-6 col-md-6 col-sm-12 pt-4 rightheader">
              <img src={header} alt="header" />
            </div>
          </div>
          {/* </div> */}
        </div>
        <div className="headerbg"></div>
      </div>
    </>
  );
};

export default Header;
