import React from "react";
import img11 from "../img/headder-full.jpg";

const Header = () => {
  return (
    <>
      <section className="headerCon">
        <img src={img11} className="d-block w-100" alt="img1" />

        <div className="container">
          <div className="row ">
            <div className="col-md-12 col-sm-12 boxFlow">
              <p>Hi There</p>
              <h1>Advent for supplies</h1>
              <p>
                loaren This is an edu meeting HTML CSS template provided by
                TemplateMo website. This is a Bootstrap v5.1.3 layout. The video
                background is taken from Pexels website, a group of young people
                by Pressmaster.
              </p>
              <button>contact us</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
