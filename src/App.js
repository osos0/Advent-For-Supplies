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
import Newspage from "./pages/News-Page";

function App() {
  return (
    <Fragment>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutusPage />} />
        <Route path="/news" element={<Newspage />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/contactus" element={<Contactuspage />} />
      </Routes>
      {/* <Footer /> */}
    </Fragment>
  );
}

export default App;
