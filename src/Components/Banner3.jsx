import React, { useEffect } from "react";
import { NavHashLink } from "react-router-hash-link";
import useWindowSize from "../utils/useWindowSize";
import banner from "../images/banner.jpg";
import banner1 from "../images/banner1.jpg";
import girl from "../images/girl.jpg";
import man from "../images/man.jpg";
import line from "../images/Rect1.png";
import line1 from "../images/Rect2.png";
import "./Banner.scss";
import CustomSlider from "../utils/Slider";
import Aos from "aos";
import "aos/dist/aos.css";

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

const bannerDetails1 = [
  {
    image: man,
    styles: { color: "#282828" },
    line: line1,
    title: "Get your business back on track",
  },
  {
    image: girl,
    styles: { color: "#282828" },
    line: line1,
    title: "Get your business back on track",
  },
];

// Get your business back on track with Shycosafe

const Banner1 = ({ image, title, styles, line }) => {
  return (
    <div className="banner">
      <img src={image} alt="banner" loading="lazy" />
      <div className="bannerBox" data-aos="fade-up" data-aos-duration="1500">
        <h1 style={styles}>
          {title}
          <img src={line} alt="line" />
        </h1>
        <div className="bottom">
          <NavHashLink to="/#about" className="redBtn">
            {/* <NavHashLink to="/faq#top" className="redBtn"> */}
            KNOW MORE
          </NavHashLink>
        </div>
      </div>
    </div>
  );
};

const BannerSlider = () => {
  const [width] = useWindowSize();
  useEffect(() => {
    Aos.init({ duration: 500 });
  });
  return (
    <div className="bannerSlider">
      {width < 1020 ? (
        <CustomSlider>
          {bannerDetails.map((item, index) => (
            <div key={index}>
              <Banner1 {...item} />
            </div>
          ))}
        </CustomSlider>
      ) : (
        <CustomSlider>
          {bannerDetails1.map((item, index) => (
            <div key={index}>
              <Banner1 {...item} />
            </div>
          ))}
        </CustomSlider>
      )}
      <div id="about" className="height"></div>
    </div>
  );
};

export default BannerSlider;
