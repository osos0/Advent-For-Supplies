import React from "react";
import About from "../componantes/About";
// import Slider from "../componantes/Slider";
// import FreeLanser from "../componantes/FreeLanser";
// import Customers from "../componantes/Customers";
import Header from "../componantes/Header";
import Navbar from "../componantes/Navbar";

import Footer from "../componantes/Footer";

const Home = () => {
  return (
    <>
      <div className="bgcolor">
        <Navbar />
        {/* <Slider /> */}
        <Header />
        <About />
        {/* <Customers /> */}
        {/* <FreeLanser /> */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
