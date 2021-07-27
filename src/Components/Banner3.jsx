import React from "react";
import { NavHashLink } from "react-router-hash-link";
import banner from "../images/banner.jpg";
import banner1 from "../images/banner1.jpg";
import line from "../images/Rect1.png";
import line1 from "../images/Rect2.png";
import "./Banner.scss";
import CustomSlider from "../utils/Slider";

const bannerDetails = [
  {
    image: banner1,
    styles: { color: "white" },
    line: line,
    title: "Get your business back on track",
  },
  {
    image: banner,
    styles: { color: "#282828" },
    line: line1,
    title: "Get your business back on track",
  },
];

// Get your business back on track with Shycosafe

const Banner1 = ({ image, title, styles, line }) => {
  return (
    <div className="banner">
      <img src={image} alt="banner" />
      <div className="bannerBox">
        <h1 style={styles}>
          {title}
          <img src={line} alt="line" />
        </h1>
        <div className="bottom">
          <NavHashLink to="/#about" className="redBtn">
            KNOW MORE
          </NavHashLink>
        </div>
      </div>
    </div>
  );
};

const BannerSlider = () => {
  return (
    <div className="bannerSlider">
      <CustomSlider>
        {bannerDetails.map((item, index) => (
          <div key={index}>
            <Banner1 {...item} />
          </div>
        ))}
      </CustomSlider>
      <div id="about" className='height'></div>
    </div>
  );
};

export default BannerSlider;
