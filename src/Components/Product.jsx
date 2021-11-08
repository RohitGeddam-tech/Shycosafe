import React, { useEffect } from "react";
// import grey from "../images/product.png";
import "./Product.scss";
// import useWindowSize from "../utils/useWindowSize";
// import line from "../images/Rect2.png";
// import { NavHashLink } from "react-router-hash-link";
import Aos from "aos";
import "aos/dist/aos.css";
import ProductSlide from "../utils/ProductSlide";

// const equipData = [
//   {
//     image: grey,
//     title: "Product Name",
//     para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
//   },
//   {
//     image: grey,
//     title: "Product Name",
//     para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
//   },
//   {
//     image: grey,
//     title: "Product Name",
//     para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
//   },
// ];

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
        </h1>
        <p data-aos="fade-up" data-aos-duration="1000">
          Shycosafe ensures an easy and covenient setup for your Shycocan
          product that leaves you relieved and assured that you, and those
          around you, are completely safe at all times.
        </p>
        <div data-aos="fade-up" data-aos-duration="1500">
          <ProductSlide />
        </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default Product;
