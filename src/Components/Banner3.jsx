import React, { useEffect, useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import useWindowSize from "../utils/useWindowSize";
import banner from "../images/banner.jpg";
import banner1 from "../images/banner1.jpeg";
// import lap from "../images/lap.png";
import lap from "../images/Banner.gif";
import banner2 from "../images/num4.gif";
import mobile2 from "../images/mobile2.png";
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
    image: banner,
    styles: { color: "#282828" },
    line: line1,
    title: "Get your business back on track",
    id: "about",
  },
  {
    image: banner1,
    styles: { color: "white" },
    line: line,
    title: "Get your business back on track",
    id: "about",
  },
];

const bannerDetails1 = [
  {
    image: man,
    styles: { color: "#282828" },
    line: line1,
    title: "Get your business back on track",
    id: "banner",
  },
  {
    image: girl,
    styles: { color: "#282828" },
    line: line1,
    title: "Get your business back on track",
    id: "banner",
  },
];

// Get your business back on track with Shycosafe

const Banner1 = ({ image, title, styles, line, id }) => {
  return (
    <div className="banner">
      <img src={image} alt="banner" loading="lazy" />
      <div className="bannerBox" data-aos="fade-up" data-aos-duration="1500">
        <h1 style={styles}>
          {title}
          <img src={line} alt="line" />
        </h1>
        <div className="bottom" id={id}>
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
  const [state, setState] = useState(false);
  const [width] = useWindowSize();
  useEffect(() => {
    Aos.init({ duration: 500 });
  });
  useEffect(() => {
    const timer = setTimeout(() => {
      setState(true);
      // console.log("src",src)
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="bannerSlider">
      {width < 920 ? (
        <CustomSlider>
          <div>
            <div className="banner">
              <img src={mobile2} alt="banner" loading="lazy" />
              <div
                className="bannerBox third"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                {width < 500 ? (
                  <h1 style={{ color: "#282828" }}>
                    At Shycosafe,
                    <br /> We Care
                  </h1>
                ) : (
                  <h1 style={{ color: "#282828" }}>At Shycosafe, We Care</h1>
                )}
                <p>The new normal was never normal.</p>
                <p>We're making the world safe again.</p>
                <div className="bottom" id={`bottom`}>
                  <NavHashLink to="/#about" className="redBtn">
                    {/* <NavHashLink to="/faq#top" className="redBtn"> */}
                    KNOW MORE
                  </NavHashLink>
                </div>
              </div>
            </div>
          </div>
          {bannerDetails.map((item, index) => (
            <div key={index}>
              <Banner1 {...item} />
            </div>
          ))}
        </CustomSlider>
      ) : (
        <CustomSlider>
          <div>
            <div className="banner">
              <img src={lap} alt="banner" loading="lazy" />
              {state ? (
                <div
                  className="bannerBox third"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <h1 style={{ color: "#282828" }}>
                    At Shycosafe, <br /> We Care
                  </h1>
                  <p>The new normal was never normal.</p>
                  <p>We're making the world safe again.</p>
                  <div className="bottom" id={`bottom`}>
                    <NavHashLink to="/#about" className="redBtn">
                      {/* <NavHashLink to="/faq#top" className="redBtn"> */}
                      KNOW MORE
                    </NavHashLink>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          {bannerDetails1.map((item, index) => (
            <div key={index}>
              <Banner1 {...item} />
            </div>
          ))}
        </CustomSlider>
      )}
      {width < 1020 ? null : <div id="about" className="height"></div>}
    </div>
  );
};

export default BannerSlider;
