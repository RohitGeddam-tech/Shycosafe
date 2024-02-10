import React, { useEffect } from "react";
import address from "../images/map.png";
import mail from "../images/mail.png";
import call from "../images/call.png";
import "./Footer.scss";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  });
  return (
    <div className="footer">
      <div className="container" data-aos="fade-up" data-aos-duration="1500">
        <div className="box">
          <img src={mail} alt="mail" />
          <div className="data">
            <p>You can write to us on:</p>
            <a href="mailto:info@shycosafe.com">info@shycosafe.com</a>
          </div>
        </div>
        <div className="box">
          <img src={call} alt="call" />
          <div className="data">
            <p>You can call us on:</p>
            <a href="tel:+918591131843">+91 85911 31843</a>
          </div>
        </div>
        {/* <div className="box">
          <img src={address} alt="address" />
          <div className="data">
            <p>Address</p>
            <a href="https://goo.gl/maps/cMDFYUvGfRDm8Pej7">
              802, Corner View, 15th Road, Bandra ( West) Mumbai - 400 050.
            </a>
          </div>
        </div> */}
      </div>
      <div
        className="down"
        style={{ backgroundColor: "#eaedf1", padding: "11px 0" }}
      >
        <p>
          Website by{" "}
          <a href="https://tech.sugarlogger.com/">
            Sugarlogger Technologies Pvt. Ltd.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
