import React, { useEffect } from "react";
// import { useState } from "react";
// import banner from "../images/Oval.png";
import "./Test.scss";
// import Modal from "../../Utils/Modal";
import line from "../images/Rect2.png";
import CustomSlider from "../utils/CustomSlider";
import Aos from "aos";
import "aos/dist/aos.css";

const bannerDetails = [
  {
    word: "PG",
    title: "Priyank Garg",
    info: "Joint MD - Advance Valves",
    para: "The pandemic has led to huge work disruptions. Our factories were shut since March last year and started operating partially from the first week of May, before regaining full operations as per government guidelines. The safety and wellbeing of all our employees is our foremost priority and concern. We decided to go for Shycocan as it is a state-of-the-art technology that is user-friendly, low on running costs and extremely effective indoors.",
  },
  {
    word: "VK",
    title: "Vijay Kaul",
    info: "Colonel - Indian Army",
    para: "I wish to put on record the Excellent Customer Care and After Sales Service provided by your esteemed company. Post raising an issue in the Sycocan, very high standard advisory and assurance was given to us. Mr Gowda Raghu and Mr Malang stand out in solving the issue like thorough professionals. They deserve our special thanks and appreciation. I did receive the replacement very promptly and that gave us huge confidence and satisfaction. My children too have brought your product and we are very happy with it. Our very best to the entire team. May you reach your goals and achieve happiness in doing so.",
  },
  {
    word: "AA",
    title: "Ashwin Ayyappan",
    info: "Finacus Solutions",
    para: "Since we are in the banking domain, we have to work 24*7 during the pandemic because we look at maintaining of ATMs. During the pandemic growth in digital payments increased and so our work. After the lockdown, employees have concerns for moving out of home because of pandemic and we wanted to find something which would give employees the confidence to come and work from office. During my research online, I found details about Shycocan and after my R&D on the machines and go ahead from the management we installed around 30 machines in our 3 different offices.",
  },
  {
    word: "SN",
    title: "Sriram Natarajan",
    info: "Founder director & CEO - Molbio diagnostics Pvt Ltd",
    para: "Being at the frontline of battling the pandemic, with all the testing kits we manufacture and more, we couldn’t afford a day of disruption. For this, providing a safe work environment was a prime importance. So, we install multiple Shycocan units across our labs, Testing centres, factory floors and corporate offices that house a large employee workforce. This along with all the standard preventive measures has helped us control transmission of the virus effectively, so it’s been one of the smartest investments we’ve made"
  },
  {
    word: "AC",
    title: "Dr Ajay Chowdhry",
    info: " Founder - HCL",
    para: "We need vaccines plus technology to combat Covid 2.0. I believe governments and businesses should encourage such technology and opening of offices, schools, colleges and cinemas rather than another spectre of lockdowns. We need unlockdowns and to be the first in the world to use Indian technology to do so.",
  },
];

const Banner1 = ({ word, title, para, info }) => {
  return (
    <div className={`Banner1`}>
      <div className="head">
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
  useEffect(() => {
    Aos.init({ duration: 500 });
  });
  return (
    <div className="BannerSlider">
      <div className="container">
        <h1 data-aos="fade-up" data-aos-duration="1000">
          Shycocon Reviews
          <img src={line} alt="line" />
        </h1>
        <CustomSlider>
          {bannerDetails.map((item, index) => (
            <div key={index} data-aos="fade-up" data-aos-duration="1500">
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
