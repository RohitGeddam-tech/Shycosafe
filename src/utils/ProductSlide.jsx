import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderNextArrow from "./NextArrow";
import SliderPrevArrow from "./PrevArrow";
import { NavHashLink } from "react-router-hash-link";
import product from "../images/product.png";

const ProductSlide = ({ children }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    nextArrow: <SliderNextArrow />,
    prevArrow: <SliderPrevArrow />,
    responsive: [
      {
        breakpoint: 1215,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 710,
        settings: {
          slidesToShow: 1.4,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        <div className={`equipCard first`}>
          <img src={product} alt="cardImg" loading="lazy" />
          <div className="right">
            <h1 className="heading">The Table Top Stand</h1>
            <p className="para">
              The stylish, sturdy design, precisely engineered to be
              user-friendly and extremely easy to install <br />
              The Shycosafe table-top stand comes manufactured in high quality
              coating of a chrome finish that will complement the surroundings
              it's setup in. This uniquely designed product is ideal for
              factories, offices, homes, hospitals and any other environment.
            </p>
            <div className="bottom">
              <h2>MRP ₹3,499/- (incl.taxes)</h2>
              <NavHashLink
                to="/#contacts"
                className="redBtn"
                onClick={() =>
                  sessionStorage.setItem("utm_content", `product1`)
                }
              >
                BUY NOW
              </NavHashLink>
            </div>
          </div>
        </div>
        <div className={`equipCard second`}>
          <img src={product} alt="cardImg" loading="lazy" />
          <div className="right">
            <h1 className="heading">The Table Top Stand</h1>
            <p className="para">
              The stylish, sturdy design, precisely engineered to be
              user-friendly and extremely easy to install <br />
              The Shycosafe table-top stand comes manufactured in high quality
              coating of a chrome finish that will complement the surroundings
              it's setup in. This uniquely designed product is ideal for
              factories, offices, homes, hospitals and any other environment.
            </p>
            <div className="bottom">
              <h2>MRP ₹3,499/- (incl.taxes)</h2>
              <NavHashLink
                to="/#contacts"
                className="redBtn"
                onClick={() =>
                  sessionStorage.setItem("utm_content", `product2`)
                }
              >
                BUY NOW
              </NavHashLink>
            </div>
          </div>
        </div>
        <div className={`equipCard third`}>
          <img src={product} alt="cardImg" loading="lazy" />
          <div className="right">
            <h1 className="heading">The Table Top Stand</h1>
            <p className="para">
              The stylish, sturdy design, precisely engineered to be
              user-friendly and extremely easy to install <br />
              The Shycosafe table-top stand comes manufactured in high quality
              coating of a chrome finish that will complement the surroundings
              it's setup in. This uniquely designed product is ideal for
              factories, offices, homes, hospitals and any other environment.
            </p>
            <div className="bottom">
              <h2>MRP ₹3,499/- (incl.taxes)</h2>
              <NavHashLink
                to="/#contacts"
                className="redBtn"
                onClick={() =>
                  sessionStorage.setItem("utm_content", `product3`)
                }
              >
                BUY NOW
              </NavHashLink>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default ProductSlide;
