import React, { useState } from "react";
import "./Nav.scss";
import { NavHashLink } from "react-router-hash-link";
import Ham from "./Hamburger";
import XHam from "./Xham";
import logo from "../images/logo.png";

const MobileHeader = () => {
  const [isActive, setActive] = useState(false);

  let colored = isActive ? "collapse-nav" : "nav";
  // let header = isActive ? "header" : "header";
  let fade = isActive ? "fade" : "dnone";

  return (
    <>
      <div className={colored}>
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
        <div className={fade}>
          <NavHashLink to="/#top" className="navfade">
            Home
          </NavHashLink>
          <NavHashLink to="/#top" className="navfade">
            Products & Accessories
          </NavHashLink>
          <NavHashLink to="/#top" className="navfade">
            About Us
          </NavHashLink>
          <NavHashLink to="/#top" className="navfade">
            FAQs
          </NavHashLink>
          <NavHashLink to="/#top" className="navfade">
            Contact Us
          </NavHashLink>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
