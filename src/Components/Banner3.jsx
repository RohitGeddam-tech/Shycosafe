import React, { useEffect, useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import useWindowSize from "../utils/useWindowSize";
import banner from "../images/mobileGraph.gif";
import banner1 from "../images/banner1.jpeg";
// import lap from "../images/lap.png";
import lap from "../images/bannerFinal.gif";
import banner2 from "../images/Graph-Final.gif";
import mobile2 from "../images/mobile.gif";
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
    title: "Get your business",
    brake: " back on track",
    id: "about",
  },
  // {
  //   image: banner1,
  //   styles: { color: "white" },
  //   line: line,
  //   title: "Get your business back on track",
  //   id: "about",
  // },
];

const bannerDetails1 = [
  {
    image: banner2,
    styles: { color: "#282828" },
    line: line1,
    title: "Get your business",
    brake: " back on track",
    id: "banner",
  },
  // {
  //   image: girl,
  //   styles: { color: "#282828" },
  //   line: line1,
  //   title: "Get your business back on track",
  //   id: "banner",
  // },
];

// Get your business back on track with Shycosafe

const Banner1 = ({ image, title, styles, line, id, brake }) => {
  const [state, setState] = useState(false);
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
    <div className="banner" data-aos="fade-up" data-aos-duration="1500">
      <img src={image} alt="banner" loading="lazy" />
      {state ? (
        <div className="bannerBox" data-aos="fade-up" data-aos-duration="1500">
          <h1 style={styles}>
            {title} <br /> {brake}
            <img src={line} alt="line" />
          </h1>
          <div className="bottom" id={id}>
            <NavHashLink to="/#products" className="redBtn">
              {/* <NavHashLink to="/faq#top" className="redBtn"> */}
              EXPLORE OUR PRODUCTS
            </NavHashLink>
          </div>
        </div>
      ) : null}
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
      {width < 960 ? (
        <CustomSlider>
          <div>
            <div className="banner">
              <img src={mobile2} alt="banner" loading="lazy" />
              {state ? (
                <div
                  className="bannerBox third"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  {width < 500 ? (
                    <h1 style={{ color: "#282828" }}>
                      At shycosafe, <br /> we care
                       for <br /> your well being.
                    </h1>
                  ) : (
                    <h1 style={{ color: "#282828" }}>
                      At shycosafe, we care
                      <br /> for your well being
                    </h1>
                  )}
                  <p>The new normal was never normal.</p>
                  <p>We're making the world safe again.</p>
                  <div className="bottom" id={`bottom`}>
                    <NavHashLink to="/#products" className="redBtn">
                      {/* <NavHashLink to="/faq#top" className="redBtn"> */}
                      EXPLORE OUR PRODUCTS
                    </NavHashLink>
                  </div>
                </div>
              ) : null}
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
                    At shycosafe, we care
                    <br /> for your well being
                  </h1>
                  <p>The new normal was never normal.</p>
                  <p>We're making the world safe again.</p>
                  {/* <p style={{ color: "#fff" }}>The new normal was never normal.</p>
                  <p style={{ color: "#fff" }}>We're making the world safe again.</p> */}
                  <div className="bottom" id={`bottom`}>
                    <NavHashLink to="/#products" className="redBtn">
                      {/* <NavHashLink to="/faq#top" className="redBtn"> */}
                      EXPLORE OUR PRODUCTS
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
