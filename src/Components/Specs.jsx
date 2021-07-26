import React from "react";
import weight from "../images/weight.png";
import dimension from "../images/dimension.png";
import power from "../images/power.png";
import life from "../images/life.png";
import ozone from "../images/ozone.png";
import cool from "../images/cool.png";
import body from "../images/body.png";
import install from "../images/install.png";
import "react-responsive-modal/styles.css"
import { Modal } from "react-responsive-modal"
import "./Specs.scss";

const Specs = ({ modalOpen, modalClose }) => {
  return (
    <Modal
      open={modalOpen}
      center
      focusTrapped={false}
      onClose={() => modalClose(false)}
      classNames="modal"
    >
      <div className="spec">
        <div className="container">
          <h2>Product Specifications</h2>
          <div className="featureBox">
            <div className="boxRow">
              <div className="Box">
                <div className="imagebox">
                  <img src={weight} alt="weight" />
                  <h2>Weight</h2>
                </div>
                <p className="p1">Net: 6 kgs max</p>
                <p className="p2">Gross: 8.5 kgs max</p>
              </div>
              <div className="Box">
                <div className="imagebox">
                  <img src={dimension} alt="Dimensions" />
                  <h2>Dimensions</h2>
                </div>
                <p className="p1">Length: 250 mm</p>
                <p className="p2">Diameter: 260 mm</p>
              </div>
            </div>
            <div className="boxRow">
              <div className="Box">
                <div className="imagebox">
                  <img src={power} alt="power" />
                  <h2>Power Rating</h2>
                </div>
                <p>40 Watts</p>
              </div>
              <div className="Box">
                <div className="imagebox">
                  <img src={life} alt="life" />
                  <h2>Life Cycle</h2>
                </div>
                <p>5 years</p>
              </div>
            </div>
            <div className="boxRow">
              <div className="Box">
                <div className="imagebox">
                  <img src={ozone} alt="ozone" />
                  <h2>Ozone Emission</h2>
                </div>
                <p>Below Detectable Limit</p>
              </div>
              <div className="Box">
                <div className="imagebox">
                  <img src={cool} alt="cooling" />
                  <h2>Cooling Air</h2>
                </div>
                <p>64 CFM</p>
              </div>
            </div>
            <div className="boxRow">
              <div className="Box">
                <div className="imagebox">
                  <img src={body} alt="body" />
                  <h2>Body Shell</h2>
                </div>
                <p>Below Detectable Limit</p>
              </div>
              <div className="Box">
                <div className="imagebox">
                  <img src={install} alt="install" />
                  <h2>Installation</h2>
                </div>
                <p>Wall Mount</p>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="right">
              <button className="noOutline" onClick={() => modalClose(false)}>CLOSE</button>
              <button className="redBtn">BUY NOW</button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Specs;
