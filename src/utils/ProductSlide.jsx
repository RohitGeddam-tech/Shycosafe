import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderNextArrow from "./NextArrow";
import SliderPrevArrow from "./PrevArrow";
import { NavHashLink } from "react-router-hash-link";
// import product from "../images/product.png";
import product from "../images/Product3.png";
import product1 from "../images/Product1.png";
import product2 from "../images/Product2.png";

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
          <div className="productImg">
            <img src={product} alt="cardImg" loading="lazy" />
          </div>
          <div className="right">
            <h1 className="heading">The Table Top Stand</h1>
            <p
              className="para"
              style={{ fontWeight: "bold", margin: "0px 0 8px 0" }}
            >
              Model No: TTS-001
            </p>
            <p className="para">
              A stylish, sturdy design, precisely engineered to be user-friendly
              and extremely easy to install. The Shycosafe® table-top stand
              comes manufactured in high quality coating or a chrome finish that
              will complement the surroundings it's set up in. This uniquely
              designed product is ideal for factories, offices, homes,
              hospitals, and any other environment.
            </p>
            <div className="bottom">
              <h2>
                MRP ₹3,499/- <span>(incl.taxes)</span>
              </h2>
              <NavHashLink
                to="/#contacts"
                className="redBtn"
                onClick={() =>
                  sessionStorage.setItem(
                    "utm_content",
                    `Product: The Table Top Stand`
                  )
                }
              >
                BUY NOW
              </NavHashLink>
            </div>
          </div>
        </div>
        <div className={`equipCard second`}>
          <div className="productImg">
            <img src={product1} alt="cardImg" loading="lazy" />
          </div>
          <div className="right">
            <h1 className="heading">The Floor Stand - Black</h1>
            <p
              className="para"
              style={{ fontWeight: "bold", margin: "0px 0 8px 0" }}
            >
              Model No: FS-001
            </p>
            <p className="para">
              Powder coated in black, this high-quality floor stand keeps your
              Shycocan, and your environment, safe. Precisely machined with
              angled-degree for enhanced sturdiness and easy installation, the
              stand is a user- friendly addition, and a must-have, to your
              Shycocan. This product is suitable for homes, offices, hospitals,
              factories, and any other environment where the Shycocan needs to
              be used.
            </p>
            <div className="bottom">
              <h2>
                MRP ₹8,999/- <span>(incl.taxes)</span>
              </h2>
              <NavHashLink
                to="/#contacts"
                className="redBtn"
                onClick={() =>
                  sessionStorage.setItem(
                    "utm_content",
                    `Product: The Floor Stand - Black`
                  )
                }
              >
                BUY NOW
              </NavHashLink>
            </div>
          </div>
        </div>
        <div className={`equipCard third`}>
          <div className="productImg">
            <img src={product2} alt="cardImg" loading="lazy" />
          </div>
          <div className="right">
            <h1 className="heading">The Floor Stand - Chrome</h1>
            <p
              className="para"
              style={{ fontWeight: "bold", margin: "0px 0 8px 0" }}
            >
              Model No: FS-CR-001
            </p>
            <p className="para">
              With an elegant, chromed look, you can't go wrong.
              Thisuniquedesignhastheabilitytofitin with its environment,
              complementing the surroundings without taking up too much space.
              Precisely machined with angled-degree for enhanced sturdiness and
              easy installation, the stand is a user-friendly addition, and a
              must-have, to your Shycocan. This product is suitable for homes,
              offices, hospitals, factories, and any other environment where the
              Shycocan needs to be used.
            </p>
            <div className="bottom">
              <h2>
                MRP ₹9,999/- <span>(incl.taxes)</span>
              </h2>
              <NavHashLink
                to="/#contacts"
                className="redBtn"
                onClick={() =>
                  sessionStorage.setItem(
                    "utm_content",
                    `Product: The Floor Stand - Chrome`
                  )
                }
              >
                BUY NOW
              </NavHashLink>
            </div>
          </div>
        </div>
        {/* <div className={`equipCard fourth`}>
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
                  sessionStorage.setItem("utm_content", `product4`)
                }
              >
                BUY NOW
              </NavHashLink>
            </div>
          </div>
        </div> */}
      </Slider>
    </>
  );
};

export default ProductSlide;
