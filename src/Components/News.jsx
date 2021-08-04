import React, { useEffect } from "react";
import "./News.scss";
import grey from "../images/profile.jpg";
import grey2 from "../images/news2.jpg";
import grey3 from "../images/new3.jpg";
import line from "../images/Rect2.png";
import forward from "../images/rightpink.png";
import { NavHashLink } from "react-router-hash-link";
import Aos from "aos";
import "aos/dist/aos.css";

const equipData = [
  {
    image: grey,
    title: "Agility, innovation, safety key to success in post-pandemic era",
    para: "The Covid-19 pandemic sent shockwaves through the business community and forced many businesses to either scale back their operations or stop them altogether. From this pandemic three priorities shall emerge for industries, namely, agility, digital adoption, and safety.",
    link: "https://www.biznesstransform.com/agility-innovation-safety-key-to-success-in-post-pandemic-era/",
  },
  {
    image: grey2,
    title: "Companies engaged in 'virus attenuation' to protect against corona",
    para: "Noida. Shykocan Corporation, Bangalore, has installed 85 virus attenuation devices in three major factories of Advance Valves Limited in Noida and Greater ... ",
    link: "https://citytoday.media/2021/04/24/noida-factory-with-600-staff-installs-unique-virus-attenuation-devices-to-curb-coronavirus/",
  },
  {
    image: grey3,
    title:
      "Vaccine plus technology: What we need to combat Covid 2.0 – Dr. Ajai Chowdhry",
    para: "Governments and businesses should encourage new technologies to control the spread of the virus and enable ‘opening’ of offices, schools ...",
    link: "https://www.financialexpress.com/opinion/vaccine-plus-technology-what-we-need-to-combat-covid-2-0/2227565/",
  },
];

const News = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  });
  return (
    <div className="equipments">
      <div className="container">
        <h1 data-aos="fade-up" data-aos-duration="1000">
          News & Media
          <img src={line} alt="line" />
        </h1>
        <div className="Slider" data-aos="fade-up" data-aos-duration="1500">
          <div className="Slide">
            {equipData.map((doc, index) => (
              <div className="equipCard" key={index}>
                <img src={doc.image} alt="cardImg" loading="lazy" />
                <div className="pad">
                  <div className="top">
                    <h1 className="heading">{doc.title}</h1>
                    <p>{doc.para}</p>
                  </div>
                  <div className="bottom">
                    <a href={`${doc.link}`} className="noOutline">
                      READ MORE{" "}
                      <span>
                        <img src={forward} alt="forward" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bottom">
          <NavHashLink to="/news#top" className="redBtn">
            VIEW ALL ARTICLES
          </NavHashLink>
        </div>
      </div>
    </div>
  );
};

export default News;
