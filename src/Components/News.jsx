import React from "react";
import "./News.scss";
import grey from "../images/profile.jpg";
import line from "../images/Rect2.png";
import forward from "../images/forward.png";
import { NavHashLink } from "react-router-hash-link";

const equipData = [
  {
    image: grey,
    title: "Agility, innovation, safety key to success in post-pandemic era",
    para: "The Covid-19 pandemic sent shockwaves through the business community and forced many businesses to either scale back their operations or stop them altogether. From this pandemic three priorities shall emerge for industries, namely, agility, digital adoption, and safety.",
  },
  {
    image: grey,
    title: "Agility, innovation, safety key to success in post-pandemic era",
    para: "The Covid-19 pandemic sent shockwaves through the business community and forced many businesses to either scale back their operations or stop them altogether. From this pandemic three priorities shall emerge for industries, namely, agility, digital adoption, and safety.",
  },
  {
    image: grey,
    title: "Agility, innovation, safety key to success in post-pandemic era",
    para: "The Covid-19 pandemic sent shockwaves through the business community and forced many businesses to either scale back their operations or stop them altogether. From this pandemic three priorities shall emerge for industries, namely, agility, digital adoption, and safety.",
  },
];

const News = () => {
  return (
    <div className="equipments">
      <div className="container">
        <h1>
          News & Media
          <img src={line} alt="line" />
        </h1>
        <div className="Slider">
          <div className="Slide">
            {equipData.map((doc, index) => (
              <div className="equipCard" key={index}>
                <img src={doc.image} alt="cardImg" />
                <div className="pad">
                  <h1 className="heading">{doc.title}</h1>
                  <p>{doc.para}</p>
                  <div className="bottom">
                    <button className="noOutline">
                      READ MORE{" "}
                      <span>
                        <img src={forward} alt="forward" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bottom">
          <NavHashLink to='/news#top' className="redBtn">VIEW ALL ARTICLES</NavHashLink>
        </div>
      </div>
    </div>
  );
};

export default News;
