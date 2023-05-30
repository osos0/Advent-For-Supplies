import React from "react";
import About from "../componantes/About";
import Slider from "../componantes/Slider";
// import FreeLanser from "../componantes/FreeLanser";
// import Customers from "../componantes/Customers";
import Header from "../componantes/Header";
import Navbar from "../componantes/Navbar";

import Footer from "../componantes/Footer";
import Services from "../componantes/Services";
import Counters from "../componantes/Counter";
import Whychooseus from "../componantes/Whychooseus";
import Customers from "../componantes/Customers";

const Home = () => {
  return (
    <>
      <div className="bgcolor">
        <Navbar />
        <Header />
        <Services />
        <About />
        <Whychooseus />
        {/* <FreeLanser /> */}
        <Counters />
        <Customers />
        <Slider />
        <Footer />
      </div>
    </>
  );
};

export default Home;
