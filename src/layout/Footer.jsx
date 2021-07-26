import React from "react";
import address from "../images/map.png";
import mail from "../images/mail.png";
import call from "../images/call.png";
import './Footer.scss'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
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
            <p>You can call us on our toll free number :</p>
            <a href="tel:1800 5678 3458">1800 5678 3458</a>
          </div>
        </div>
        <div className="box">
          <img src={address} alt="address" />
          <div className="data">
            <p>Address</p>
            <a href="/">
              The woman now gave Dorothy a bed to sleep in, and Toto lay down
              beside her, while the Lion guarded the door of her room
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
