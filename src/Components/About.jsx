import React, { lazy, useEffect, useState } from "react";
// import about from "../images/about.png";
import useWindowSize from "../utils/useWindowSize";
import ReactPlayer from "react-player";
import line from "../images/Rect2.png";
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

  // const src = "https://youtu.be/nFS_Y9dYHXs";
  const [src, setSrc] = useState("https://youtu.be/nFS_Y9dYHXs");
  useEffect(() => {
    const timer = setTimeout(() => {
      setSrc("https://youtu.be/nFS_Y9dYHXs");
      console.log(src)
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="about">
      {width < 1020 ? (
        <div className="container" data-aos="fade-up" data-aos-duration="1000">
          <h1>About the product</h1>
          <p>
            The woman now gave Dorothy a bed to sleep in, and Toto lay down
            beside her, while the Lion guarded the door of her room so she might
            not be disturbed.
          </p>
          {width > 600 ? (
            <ReactPlayer
              url={src}
              width="100%"
              height="300px"
              u
              controls={true}
            />
          ) : (
            <ReactPlayer
              url={src}
              width="100%"
              height="200px"
              controls={true}
            />
          )}
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
            <ReactPlayer url={src} controls={true} />
          </div>
          <div className="desk" data-aos="fade-up" data-aos-duration="1200">
            <h1>
              About the product
              <img src={line} alt="line" />
            </h1>
            <p>
              The woman now gave Dorothy a bed to sleep in, and Toto lay down
              beside her, while the Lion guarded the door of her room so she
              might not be disturbed.
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
