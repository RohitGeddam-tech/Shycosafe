import React, { useEffect } from "react";
import "./Collection.scss";
import line from "../images/Rect2.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Collection = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  });
  return (
    <div className="collection">
      <div className="containerdiv" data-aos="fade-up" data-aos-duration="1000">
        <h1>
          Shycosafe Comparison
          <img src={line} alt="line" />
        </h1>
        <p>
          Shycocan provides far greater protection and safety than other
          methods. Shycocan outperforms on all parameters.
        </p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-duration="1500">
        <div className="Slider">
          <div className="Slide">
            <table
              style={{
                borderColor: "#e40061",
                emptyCells: "hide",
                float: "left",
              }}
              cellPadding="2px"
            >
              <tbody>
                <tr style={{ textAlign: "center" }}>
                  <td style={{ width: "217px", border: "0px #ffffff" }}></td>
                  <td
                    className="mycolimp"
                    style={{
                      borderRadius: "8px 8px 0px 0px",
                      backgroundColor: "#e40061",
                    }}
                  >
                    <img
                      src="https://shycocancorp.com/wp-content/uploads/2021/06/ic-brand-logo-white.png"
                      alt="logo"
                    />
                  </td>
                  <td style={{ width: "208px" }}>
                    <strong>Air Ionizers</strong>
                  </td>
                  <td style={{ width: "213px" }}>
                    <strong>Ultraviolet</strong>
                  </td>
                  <td style={{ width: "231px" }}>
                    <strong>Sprays</strong>
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td style={{ width: "217px" }}>
                    <strong>Effectiveness</strong>
                  </td>
                  <td className="mycolimp">
                    Up to 99.9% effective against Coronavirus
                  </td>
                  <td style={{ width: "208px" }}>Not-effective</td>
                  <td style={{ width: "213px" }}>
                    Effective for one-time disinfecting
                  </td>
                  <td style={{ width: "231px" }}>
                    Effective for a limited period
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td style={{ width: "217px" }}>
                    <strong>Utility</strong>
                  </td>
                  <td className="mycolimp">Continuous functioning</td>
                  <td style={{ width: "208px" }}>Continuous functioning</td>
                  <td style={{ width: "213px" }}>Disinfecting per use</td>
                  <td style={{ width: "231px" }}>Disinfecting per use</td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td style={{ width: "217px" }}>
                    <strong>Side Effects</strong>
                  </td>
                  <td className="mycolimp">No side effects</td>
                  <td style={{ width: "208px" }}>
                    Produces Ozone that is harmful to lung tissues
                  </td>
                  <td style={{ width: "213px" }}>
                    Exposure is very harmful to eye sight and skin
                  </td>
                  <td style={{ width: "231px" }}>Toxic and Poisonous</td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td style={{ width: "217px" }}>
                    <strong>Effect</strong>
                  </td>
                  <td className="mycolimp">Both Air Borne and Surface</td>
                  <td style={{ width: "208px" }}>Only Airborne</td>
                  <td style={{ width: "213px" }}>Both Air Borne and Surface</td>
                  <td style={{ width: "231px" }}>Only for Surface</td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td style={{ width: "217px" }}>
                    <strong>Conditions</strong>
                  </td>
                  <td className="mycolimp">All conditions</td>
                  <td style={{ width: "208px" }}>Only for small rooms</td>
                  <td style={{ width: "217px" }}>
                    Only empty areas using robots
                  </td>
                  <td style={{ width: "231px" }}>
                    Not used in restaurants etc.
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td style={{ width: "217px" }}>
                    <strong>Sizes</strong>
                  </td>
                  <td className="mycolimp">
                    Multiple products for large spaces
                  </td>
                  <td style={{ width: "208px" }}>Only for small spaces</td>
                  <td style={{ width: "217px" }}>Only for empty spaces</td>
                  <td style={{ width: "231px" }}>Used across sizes</td>
                </tr>
                <tr style={{ textAlign: "center", borderBottom: "0" }}>
                  <td style={{ width: "217px" }}>
                    <strong>Consumables</strong>
                  </td>
                  <td
                    className="mycolimp"
                    style={{ borderRadius: "0px 0px 8px 8px" }}
                  >
                    One-time installation, no consumables
                  </td>
                  <td style={{ width: "208px" }}>
                    Filters need to change constant maintenance
                  </td>
                  <td style={{ width: "213px" }}>Cumbersome in regular use</td>
                  <td style={{ width: "231px" }}>Replenishment of sprays</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
