import React from "react";
// import about from "../images/about.png";
import useWindowSize from "./useWindowSize";
import ReactPlayer from "react-player";
import line from "../images/Rect2.png";
import "./About.scss";

const About = () => {
  const [width] = useWindowSize();
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
          <ReactPlayer
            url="https://youtu.be/nFS_Y9dYHXs"
            width="100%"
            height="200px"
            controls={true}
          />
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
            <button className="redBtn">VIEW ALL PRODUCTS</button>
          </div>
        </div>
      ) : (
        <div className="container">
          <ReactPlayer
            url="https://youtu.be/nFS_Y9dYHXs"
            controls={true}
          />
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
              <button className="redBtn">VIEW ALL PRODUCTS</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
