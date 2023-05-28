import React from "react";
import whyimg from "../img/3header.png";

const Whychooseus = () => {
  return (
    <>
      <div id="WhyChoose" className="WhyChoose">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12"> </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h5>. WHY CHOOSE US .</h5>
              <h1>Why Our Customers</h1>
              <h1>
                Choose<span> Working </span>With Us.
              </h1>
              <p>
                Services We Offer Lorem Ipsum Dolor Sit Amet Consectetur
                Adipisicing Elit Omnis Id Atque Dignissimos Repellat Quae Ullam.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 leftWhy">
              <img src={whyimg} alt="abimg" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 ">
              <div className="row leftAbout rightWhy">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="whyChild">
                    <div className="threenum">01.</div>
                    <div>
                      <h4>Latest Technologies</h4>
                      <p>
                        Lorem ipsum dolor sit amet consecltetur adipisicing
                        elit. Omnis.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="whyChild">
                    <div className="threenum">02.</div>
                    <div>
                      <h4>Uniqe Solutions</h4>
                      <p>
                        Lorem ipsum dolor sit amet consecltetur adipisicing
                        elit. Omnis.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="whyChild">
                    <div className="threenum">03.</div>
                    <div>
                      <h4>Powerful Strategies</h4>
                      <p>
                        Lorem ipsum dolor sit amet consecltetur adipisicing
                        elit. Omnis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Whychooseus;
