import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./styles/main.scss";
// import Navbar from "./componantes/Navbar";
// import Footer from "./componantes/Footer";
import Home from "./pages/Home";
import AboutusPage from "./pages/Aboutus-page";
import Contactuspage from "./pages/Contactus-page";
import CustomersPage from "./pages/Customers-page";
import Brandspage from "./pages/Brands-Page";
import NetworkSoltionPage from "./pages/NetworkSoltion-page";
import HardwraeSoltionPage from "./pages/Hardwaresoltion-page";

function App() {
  return (
    <Fragment>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutusPage />} />
        <Route path="/brandes" element={<Brandspage />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/contactus" element={<Contactuspage />} />
        <Route path="/networksolutions" element={<NetworkSoltionPage />} />
        <Route path="/hardwaresolutions" element={<HardwraeSoltionPage />} />
      </Routes>
      {/* <Footer /> */}
    </Fragment>
  );
}

export default App;
