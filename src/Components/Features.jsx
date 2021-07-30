import React, { useState, useEffect } from "react";
import cable from "../images/cable.png";
import guard from "../images/guard.png";
import home from "../images/home.png";
import virus from "../images/virus.png";
import line from "../images/Rect2.png";
import "./Features.scss";
import Specs from "./Specs";
import Aos from "aos";
import "aos/dist/aos.css";

const Features = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 500 });
  });
  return (
    <div className="feature">
      <div className="container">
        <h1 data-aos="fade-up" data-aos-duration="1000">
          Features Of Shycocan
          <img src={line} alt="line" />
        </h1>
        <div className="featureBox">
          <div className="box1" data-aos="fade-up" data-aos-duration="1500">
            <div className="shadowBox">
              <img src={guard} alt="guard" />
              <div className="detail">
                <h2>100% Safe</h2>
                <p>No harmful effects to humans & animals or the environment</p>
              </div>
            </div>
            <div className="shadowBox">
              <img src={virus} alt="virus" />
              <div className="detail">
                <h2>Effective</h2>
                <p>Disables corona virus upto 99.9%* in enclosed places</p>
              </div>
            </div>
          </div>
          <div className="box1" data-aos="fade-up" data-aos-duration="1800">
            <div className="shadowBox">
              <img src={cable} alt="cable" />
              <div className="detail">
                <h2>Plug & Play</h2>
                <p>Easy installations and no consumables required</p>
              </div>
            </div>
            <div className="shadowBox">
              <img src={home} alt="home" />
              <div className="detail">
                <h2>Protects upto 1000 sq.ft.</h2>
                <p>Multiple devices can be easily placed for larger spaces</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <button className="redBtn" onClick={() => setOpen(true)}>
            READ SPECIFICATIONS
          </button>
        </div>
      </div>
      <Specs modalOpen={open} modalClose={setOpen} />
    </div>
  );
};

export default Features;
