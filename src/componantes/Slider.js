import React from "react";
import img1 from "../img/Fortinet.png";
import img2 from "../img/dell.png";
import img3 from "../img/lenovo.png";

const Slider = () => {
  return (
    <>
      <div className="sliderBack">
        <h5>Brands</h5>
        <h1>Our company specializes</h1>
        <div className="sliderFrame">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <h5>Fortinet</h5>
                <img src={img1} className=" " alt="..." />

                <p>
                  lorem ipsum dolor sit amet consecltetur adipisicing elit.
                  Omnis tempore perfe rendis explicabo.
                </p>
              </div>
              <div className="carousel-item">
                <h5>Dell</h5>
                <img src={img2} className=" " alt="..." />
                <p>
                  lorem ipsum dolor sit amet consecltetur adipisicing elit.
                  Omnis tempore perfe rendis explicabo.
                </p>
              </div>
              <div className="carousel-item">
                <h5>Lenovo</h5>
                <img src={img3} className=" " alt="..." />
                <p>
                  lorem ipsum dolor sit amet consecltetur adipisicing elit.
                  Omnis tempore perfe rendis explicabo.
                </p>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
