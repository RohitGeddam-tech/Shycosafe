import React, { useEffect } from "react";
// import { NavHashLink } from "react-router-hash-link";
import Footer from "../../layout/Footer";
import NewHeader from "../../layout/NewHeader";
// import aboutImg from "../../images/about-us-hero.svg";
// import banner from "./grey.png";
import banner from "./white.png";
import line from "../../images/Rect2.png";
import Contact from "../Contact";
import Aos from "aos";
import "aos/dist/aos.css";
import "./AboutPage.scss";

const AboutPage = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  });
  return (
    // <div className='progress'>
    //     <h1>This page is in progress</h1>
    //     <NavHashLink to='/#top'>back to homepage</NavHashLink>
    // </div>
    <div className="App">
      <NewHeader />
      <div style={{ paddingTop: "67px" }}>
        <div className="aboutHeader">
          <h1 data-aos="fade-up" data-aos-duration="1000">About Shycosafe</h1>
        </div>
        <div className="vision">
          <div className="container">
            <h1 data-aos="fade-up" data-aos-duration="1500">
              Vision and Mission
              <img src={line} alt="line" />
            </h1>
            <p style={{ paddingTop: "20px" }} data-aos="fade-up" data-aos-duration="2000">
              The past year has changed our perception of normalcy. We no longer
              meet in person, go to office or even shake hands. <br />
              <br /> We at Shycosafe stepped into this new normal with the
              mission to make it safe for the world again. We are committed to
              bringing the old world back as best as possible and as quickly as
              can be. We are passionate about changing perceptions and stepping
              back into a world that still believes in the 'human connect'. We
              strive everyday to get businesses back on track by making work
              premises safe and thereby ensuring the continuity of livelihood
              all around.
              <br />
              <br /> Shycosafe is the human connect you need. <br />
              <br />
              The safe way.
            </p>
          </div>
        </div>
        <div className="About1">
          <div className="container">
            <div className="aboutDetail" data-aos="fade-up" data-aos-duration="1500">
              <h1 className="heading">
                About the CEO <img src={line} alt="line" />
              </h1>
              <p className="para">
                Dear All,
                <br />
                <br /> A passionate entrepreneur, Vishal began his career with
                the Birla group. He has also worked with industry giants like
                the Times of India group, Videocon, Tata Teleservices and Santo
                Enterprises.
                <br />
                <br /> With the rich background of 19yrs in corporate world,
                Vishal chose to carve his own path as an entrepreneur in 2008.
                And has never looked back.
                <br />
                <br /> With a 360 degree experience attribute in Accounts,
                Finance and Sales, Vishal brings a lot more to the table with
                innovative techniques in entrepreneurship.
                <br />
                <br /> Shycosafe Mission and Vision
              </p>
            </div>
            <div className="aboutImg" data-aos="fade-up" data-aos-duration="2000">
              <img src={banner} alt="about" />
              <p>Vishal Sharma</p>
              <p className="para">CEO, Shycosafe</p>
            </div>
          </div>
        </div>
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
