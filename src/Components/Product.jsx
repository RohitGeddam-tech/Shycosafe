import React from "react";
import product from "../images/product.png";
import "./Product.scss";
import line from "../images/Rect2.png";

const Product = () => {
  return (
    <div className="product">
      <div className="container">
        <h1>
          Products
          <img src={line} alt="line" />
        </h1>
        <img src={product} alt="product" />
      </div>
    </div>
  );
};

export default Product;
