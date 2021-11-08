import React, { useState } from "react";
import "./Nav.scss";
import { NavHashLink } from "react-router-hash-link";
import useWindowSize from "../utils/useWindowSize";
import Ham from "../utils/Hamburger";
import XHam from "../utils/Xham";
import logo from "../images/logo.png";

const NewHeader = () => {
  const [width] = useWindowSize();
  const [isActive, setActive] = useState(false);
  const side = isActive ? "side active" : "side";
  return (
    <div className="new">
      {width < 1020 ? (
        <>
          <div className="header">
            <nav className="container-fullnav">
              <div className="nav-image">
                <NavHashLink to="/#top" onClick={() => setActive(false)}>
                  <img src={logo} alt="logo" />
                </NavHashLink>
              </div>
            </nav>
            <div className="nav-links">
              {isActive ? (
                <>
                  <XHam
                    ClickHandle={() => {
                      setActive(!isActive);
                    }}
                  />
                </>
              ) : (
                <Ham
                  ClickHandle={() => {
                    setActive(!isActive);
                  }}
                />
              )}
            </div>
          </div>
          <div className={side}>
            <div className="container">
              {/* <li>
                <NavHashLink
                  to="/#top"
                  className="navfade"
                  onClick={() => setActive(false)}
                >
                  Home
                </NavHashLink>
              </li> */}
              <li>
                <NavHashLink
                  to="/about#top"
                  className="navfade"
                  onClick={() => setActive(false)}
                >
                  About Shycosafe
                </NavHashLink>
              </li>
              <li>
                <NavHashLink
                  to="/#products"
                  className="navfade"
                  onClick={() => setActive(false)}
                >
                  Products
                </NavHashLink>
              </li>
              <li>
                <NavHashLink
                  to="/Shycocan#top"
                  className="navfade"
                  onClick={() => setActive(false)}
                >
                  About Shycocan
                </NavHashLink>
              </li>
              <li>
                <NavHashLink
                  to="/faq#top"
                  className="navfade"
                  onClick={() => setActive(false)}
                >
                  FAQs
                </NavHashLink>
              </li>
              <li>
                <NavHashLink
                  to="/#contacts"
                  className="navfade"
                  onClick={() => setActive(false)}
                >
                  Contact Us
                </NavHashLink>
              </li>
            </div>
          </div>{" "}
        </>
      ) : (
        <>
          <div className="container">
            <NavHashLink to="/#top">
              <img src={logo} alt="logo" onClick={() => setActive(false)} />
            </NavHashLink>
            <div className="navDetails">
              {/* <NavHashLink
                to="/#top"
                activeStyle={{ color: "#e40061", fontWeight: "bold" }}
                className="navfade"
                onClick={() => setActive(false)}
              >
                Home
              </NavHashLink> */}
              <NavHashLink
                to="/about#top"
                activeStyle={{ color: "#e40061", fontWeight: "bold" }}
                className="navfade"
                onClick={() => setActive(false)}
              >
                About Shycosafe
              </NavHashLink>
              <NavHashLink
                to="/#products"
                // activeStyle={{ color: "#e40061", fontWeight: "bold" }}
                className="navfade"
                onClick={() => setActive(false)}
              >
                Products
              </NavHashLink>
              <NavHashLink
                to="/Shycocan#top"
                activeStyle={{ color: "#e40061", fontWeight: "bold" }}
                className="navfade"
                onClick={() => setActive(false)}
              >
                About Shycocan
              </NavHashLink>
              <NavHashLink
                to="/faq#top"
                activeStyle={{ color: "#e40061", fontWeight: "bold" }}
                className="navfade"
                onClick={() => setActive(false)}
              >
                FAQs
              </NavHashLink>
              <NavHashLink
                to="/#contacts"
                // activeStyle={{ color: "#e40061", fontWeight: "bold" }}
                className="navfade"
                onClick={() => setActive(false)}
              >
                Contact Us
              </NavHashLink>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NewHeader;
