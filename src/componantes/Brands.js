import React from "react";
import dell from "../img/Dell.webp";

const Brands = () => {
  return (
    <>
      <div className="container brands">
        <h1 className="text-center m-5">Brands</h1>

        <div className="row conOfAllBrands">
          <div className="col-lg-3 col-md-4 col-sm-6 ">
            <div className="brandsImgCon">
              <img src={dell} alt="dell" />
            </div>
            <h2 className="brandspCon">lenovo </h2>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 ">
            <div className="brandsImgCon">
              <img src={dell} alt="dell" />
            </div>
            <h2 className="brandspCon">lenovo </h2>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 ">
            <div className="brandsImgCon">
              <img src={dell} alt="dell" />
            </div>
            <h2 className="brandspCon">lenovo </h2>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 ">
            <div className="brandsImgCon">
              <img src={dell} alt="dell" />
            </div>
            <h2 className="brandspCon">lenovo </h2>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 ">
            <div className="brandsImgCon">
              <img src={dell} alt="dell" />
            </div>
            <h2 className="brandspCon">lenovo </h2>
          </div>
        </div>
      </div>
      <div className="container NewsAll">
        <h1 className="text-center m-5">Brands News</h1>
        <div className="row conofNews">
          <div className="col-lg-3 col-md-4 col-sm-12 newsImgCon">
            <img src={dell} alt="..." />
          </div>
          <div className="col-lg-9 col-md-8 col-sm-12 newspCon">
            <h2>Dell</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatibus facere modi possimus dignissimos, aliquam nobis
              eaque? Voluptatem magnam quisquam rem.
            </p>
          </div>
        </div>
        <div className="row conofNews">
          <div className="col-lg-9 col-md-8 col-sm-12 newspCon">
            <h2>Dell</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatibus facere modi possimus dignissimos, aliquam nobis
              eaque? Voluptatem magnam quisquam rem.
            </p>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12 newsImgCon">
            <img src={dell} alt="..." />
          </div>
        </div>
        <div className="row conofNews">
          <div className="col-lg-3 col-md-4 col-sm-12 newsImgCon">
            <img src={dell} alt="..." />
          </div>
          <div className="col-lg-9 col-md-8 col-sm-12 newspCon">
            <h2>Dell</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatibus facere modi possimus dignissimos, aliquam nobis
              eaque? Voluptatem magnam quisquam rem.
            </p>
          </div>
        </div>
        <div className="row conofNews">
          <div className="col-lg-9 col-md-8 col-sm-12 newspCon">
            <h2>Dell</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatibus facere modi possimus dignissimos, aliquam nobis
              eaque? Voluptatem magnam quisquam rem.
            </p>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12 newsImgCon">
            <img src={dell} alt="..." />
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;
