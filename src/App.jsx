// import logo from './images/logo.png';
import "./App.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Banner from "./Components/Banner3";
import Contact from "./Components/Contact";
import Product from "./Components/Product";
import Footer from "./layout/Footer";
import NewHeader from "./layout/NewHeader";
import { NavHashLink } from "react-router-hash-link";

function App() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  });
  return (
    <div className="App">
      {/* <MobileHeader /> */}
      <NewHeader />
      <div style={{ paddingTop: "67px" }}>
        <Banner />
        <div className="shycoAbout">
          <div className="container">
            <h1 data-aos="fade-up" data-aos-duration="1000">
              About Shycosafe
            </h1>
            <p data-aos="fade-up" data-aos-duration="1000">
              Shycosafe is a start-up making headway into an unstructured market
              of stands. Lead by a team of designers, we are creating and
              manufacturing high end stands of great quality and finesse, one
              you would be pleased to keep at your office or home. Currently
              these include floor stands and table tops with more category
              launches planned in the future. <br />
              Shycosafe has started its journey by making stands for Shycocan (a
              virus attenuation device) that promises to bring back life to
              normal. After hearing about the product, our team at Shycosafe was
              extremely impressed and passionate to design stands for helping
              alleviate the suffering caused by the pandemic and that's how our
              journey has started. <br />
              These stands are designed and manufactured keeping in mind not
              only the sturdiness and safety but also the aesthetics.
            </p>
            <NavHashLink
              className="redBtn"
              to="/about#top"
              data-aos="fade-up"
              data-aos-duration="1000"
              id='products'
            >
              READ MORE
            </NavHashLink>
          </div>
        </div>
        <Product />
        <div className="we">
          <div
            className="container"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1>We're on a mission to make you safe.</h1>
            <p>Take the first step to a safer tomorrow.</p>
            {/* <div id="contacts" className="height"></div> */}
            <NavHashLink to="/#contacts" className="redBtn">
              GET IN TOUCH
            </NavHashLink>
          </div>
        </div>
        <div style={{ position: "relative" }} className='shyContact'>
          <div id="contacts" className="height"></div>
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
