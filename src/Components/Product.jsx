import React, { useEffect } from "react";
import grey from "../images/product.png";
import "./Product.scss";
// import useWindowSize from "../utils/useWindowSize";
import line from "../images/Rect2.png";
import { NavHashLink } from "react-router-hash-link";
import Aos from "aos";
import "aos/dist/aos.css";

const equipData = [
  {
    image: grey,
    title: "Product Name",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    image: grey,
    title: "Product Name",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    image: grey,
    title: "Product Name",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
];

const Product = () => {
  // const [width] = useWindowSize();
  useEffect(() => {
    Aos.init({ duration: 500 });
  });
  return (
    <div className="product">
      <div className="container">
        <h1 data-aos="fade-up" data-aos-duration="1000">
          Products
          <img src={line} alt="line" />
        </h1>
        {/* {width < 1020 ? (
          <img src={grey} alt="product" />
        ) : ( */}
        <div className="Slider" data-aos="fade-up" data-aos-duration="1500">
          <div className="Slide">
            {equipData.map((doc, index) => (
              <div className="equipCard" key={index}>
                <img src={doc.image} alt="cardImg" loading="lazy" />
                <h1 className="heading">{doc.title}</h1>
                <p className="para">{doc.para}</p>
                <div className="bottom">
                  <NavHashLink
                    to="/#contacts"
                    className="redBtn"
                    onClick={() =>
                      sessionStorage.setItem(
                        "utm_content",
                        `product${index + 1}`
                      )
                    }
                  >
                    BUY NOW
                  </NavHashLink>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* )} */}
      </div>
      <div id="contacts" className="height"></div>
    </div>
  );
};

export default Product;
