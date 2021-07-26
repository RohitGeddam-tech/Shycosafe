import React from "react";
import banner from "../images/banner.png";
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <img src={banner} alt="banner" />
      <div className="bannerBox">
        <div className="top">
          <h1>
            Get your business back on track with Shycosafe{" "}
            <span><i></i></span>
          </h1>
        </div>
        <div className="bottom">
          <button className="redBtn">KNOW MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
