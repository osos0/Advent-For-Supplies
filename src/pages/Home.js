import React from "react";
import About from "../componantes/About";
// import Slider from "../componantes/Slider";
// import FreeLanser from "../componantes/FreeLanser";
// import Customers from "../componantes/Customers";
import Header from "../componantes/Header";
import Navbar from "../componantes/Navbar";

import Footer from "../componantes/Footer";
import Services from "../componantes/Services";
import Counters from "../componantes/Counter";

const Home = () => {
  return (
    <>
      <div className="bgcolor">
        <Navbar />
        {/* <Slider /> */}
        <Header />
        <Services />
        <About />
        {/* <Customers /> */}
        {/* <FreeLanser /> */}
        <Counters />
        <Footer />
      </div>
    </>
  );
};

export default Home;
