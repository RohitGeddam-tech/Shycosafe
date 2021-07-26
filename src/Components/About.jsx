import React from "react";
// import about from "../images/about.png";
import ReactPlayer from "react-player";
import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <h1>About the product</h1>
        <p>
          The woman now gave Dorothy a bed to sleep in, and Toto lay down beside
          her, while the Lion guarded the door of her room so she might not be
          disturbed.
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
    </div>
  );
};

export default About;
