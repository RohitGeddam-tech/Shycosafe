import React, { useEffect, useState } from "react";
// import about from "../images/about.png";
import useWindowSize from "../utils/useWindowSize";
import ReactPlayer from "react-player";
import line from "../images/Rect2.png";
import vid from "../images/aboutVid.jpeg";
import "./About.scss";
import { NavHashLink } from "react-router-hash-link";
import Aos from "aos";
import "aos/dist/aos.css";
// const ReactPlayer = lazy(() => import("react-player"));

const About = () => {
  const [width] = useWindowSize();

  useEffect(() => {
    Aos.init({ duration: 500 });
  });

  const src = "https://www.youtube.com/embed/nFS_Y9dYHXs";
  const [state, setState] = useState(false);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setSrc("https://www.youtube.com/embed/nFS_Y9dYHXs");
  //     // console.log("src",src)
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, []);
  return (
    <div className="about">
      {width < 1020 ? (
        <div className="container" data-aos="fade-up" data-aos-duration="1000">
          <h1>
            About the product
            {/* <img src={line} alt="line" /> */}
          </h1>
          <p>
            Introducing the Shycocan - The world‘s 1st virus attenuation device
            that can disable the coronavirus with up to 99.9%* efficacy in
            enclosed spaces
          </p>
          <div className="shadowPlay">
            {state ? (
              <>
                {width > 600 ? (
                  <ReactPlayer
                    url={src}
                    width="100%"
                    height="300px"
                    playing={true}
                    controls={true}
                    muted={true}
                  />
                ) : (
                  <ReactPlayer
                    url={src}
                    width="100%"
                    height="200px"
                    playing={true}
                    controls={true}
                    muted={true}
                  />
                )}
              </>
            ) : (
              <>
                {width > 600 ? (
                  <img
                    src={vid}
                    width="100%"
                    height="360px"
                    alt="video"
                    onClick={() => setState(true)}
                  />
                ) : (
                  <img
                    src={vid}
                    width="100%"
                    height="200px"
                    alt="video"
                    onClick={() => setState(true)}
                  />
                )}
              </>
            )}
          </div>
          {/* <iframe
          width="100%"
          height="193"
          src="https://www.youtube.com/embed/nFS_Y9dYHXs"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe> */}
          <div className="bottom">
            <NavHashLink to="/#products" className="redBtn">
              VIEW ALL PRODUCTS
            </NavHashLink>
          </div>
        </div>
      ) : (
        <div className="container">
          <div data-aos="fade-up" data-aos-duration="1000">
            <ReactPlayer
              url={src}
              // muted={true}
              // playing={true}
              controls={true}
            />
          </div>
          <div className="desk" data-aos="fade-up" data-aos-duration="1200">
            <h1>
              About the product
              <img src={line} alt="line" />
            </h1>
            <p>
              Introducing the Shycocan - The world‘s 1st virus attenuation
              device that can disable the coronavirus with up to 99.9%* efficacy
              in enclosed spaces
            </p>
            <div className="bottom">
              <NavHashLink to="/#products" className="redBtn">
                VIEW ALL PRODUCTS
              </NavHashLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
