import React, { useEffect, useState } from "react";
// import about from "../images/about.png";
import useWindowSize from "../utils/useWindowSize";
import ReactPlayer from "react-player";
import line from "../images/Rect2.png";
import "./About.scss";
import { NavHashLink } from "react-router-hash-link";

const About = () => {
  const [width] = useWindowSize();
  const [src, setSrc] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setSrc("https://youtu.be/nFS_Y9dYHXs");
      console.log(src)
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="about">
      {width < 1020 ? (
        <div className="container">
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
          <ReactPlayer url={src} controls={true} />
          <div className="desk">
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
