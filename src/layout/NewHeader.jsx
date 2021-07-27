import React, { useState } from "react";
import "./Nav.scss";
import { NavHashLink } from "react-router-hash-link";
import Ham from "../utils/Hamburger";
import XHam from "../utils/Xham";
import logo from "../images/logo.png";

const NewHeader = () => {
  const [isActive, setActive] = useState(false);
  const side = isActive ? "side active" : "side";
  return (
    <div className="new">
      <div className="header">
        <nav className="container-fullnav">
          <div className="nav-image">
            <NavHashLink to="/#top">
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
          <li>
            <NavHashLink
              to="/#top"
              className="navfade"
              onClick={() => setActive(false)}
            >
              Home
            </NavHashLink>
          </li>
          <li>
            <NavHashLink
              to="/#top"
              className="navfade"
              onClick={() => setActive(false)}
            >
              Products & Accessories
            </NavHashLink>
          </li>
          <li>
            <NavHashLink
              to="/#top"
              className="navfade"
              onClick={() => setActive(false)}
            >
              About Us
            </NavHashLink>
          </li>
          <li>
            <NavHashLink
              to="/#top"
              className="navfade"
              onClick={() => setActive(false)}
            >
              FAQs
            </NavHashLink>
          </li>
          <li>
            <NavHashLink
              to="/#top"
              className="navfade"
              onClick={() => setActive(false)}
            >
              Contact Us
            </NavHashLink>
          </li>
        </div>
      </div>
    </div>
  );
};

export default NewHeader;
