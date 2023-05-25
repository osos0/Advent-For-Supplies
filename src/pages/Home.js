import React from "react";
import About from "../componantes/About";
// import Slider from "../componantes/Slider";
import FreeLanser from "../componantes/FreeLanser";
import Customers from "../componantes/Customers";
import Header from "../componantes/Header";

const Home = () => {
  return (
    <>
      {/* <Slider /> */}
      <Header />
      <About />
      <Customers />
      <FreeLanser />
    </>
  );
};

export default Home;
