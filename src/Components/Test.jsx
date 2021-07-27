import React from "react";
// import { useState } from "react";
// import banner from "../images/Oval.png";
import "./Test.scss";
// import Modal from "../../Utils/Modal";
import line from "../images/Rect2.png";
import CustomSlider from "../utils/CustomSlider";

const bannerDetails = [
  {
    id: 1,
    word: "PG",
    title: "Priyank Garg",
    info: "Joint MD - Advance Valves",
    para: "The pandemic has led to huge work disruptions. Our factories were shut since March last year and started operating partially from the first week of May, before regaining full operations as per government guidelines. The safety and wellbeing of all our employees is our foremost priority and concern. We decided to go for Shycocan as it is a state-of-the-art technology that is user-friendly, low on running costs and extremely effective indoors.",
  },
  {
    id: 2,
    word: "VK",
    title: "Vijay Kaul",
    info: "Colonel - Indian Army",
    para: "I wish to put on record the Excellent Customer Care and After Sales Service provided by your esteemed company. Post raising an issue in the Sycocan, very high standard advisory and assurance was given to us. Mr Gowda Raghu and Mr Malang stand out in solving the issue like thorough professionals. They deserve our special thanks and appreciation. ",
  },
  {
    id: 3,
    word: "PG",
    title: "Priyank Garg",
    info: "Joint MD - Advance Valves",
    para: "The pandemic has led to huge work disruptions. Our factories were shut since March last year and started operating partially from the first week of May, before regaining full operations as per government guidelines. The safety and wellbeing of all our employees is our foremost priority and concern. We decided to go for Shycocan as it is a state-of-the-art technology that is user-friendly, low on running costs and extremely effective indoors.",
  },
];

const Banner1 = ({ word, title, para, info, id }) => {
  return (
    <div className={`Banner${id}`}>
      <div className="head">
        {/* <img src={image} alt="banner" /> */}
        <h2>{word}</h2>
        <div className="data">
          <h1 className="heading">{title}</h1>
          <p>{info}</p>
        </div>
      </div>
      <p className="para">{para}</p>
    </div>
  );
};

const Test = () => {
  return (
    <div className="BannerSlider">
      <div className="container">
        <h1>
          Our Customer Testimonials
          <img src={line} alt="line" />
        </h1>
        <CustomSlider>
          {bannerDetails.map((item, index) => (
            <div key={index}>
              <Banner1 {...item} />
            </div>
          ))}
        </CustomSlider>
      </div>
      <div id="products" className="height"></div>
    </div>
  );
};

export default Test;
