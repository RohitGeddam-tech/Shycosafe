import React, { useState, useEffect } from "react";
import "./css/Nav.css";
import { NavHashLink } from "react-router-hash-link";
import Ham from "./Hamburger";
import XHam from "./Xham";

const TestDesk = () => {
  const [isActive, setActive] = useState(false);

  let colored = isActive ? "collapse-nav" : "nav";
  let header = isActive ? "headerfull" : "header";
  let fade = isActive ? "fade" : "dnone";

  return (
    <>
      <div className={colored}>
        <div className={header}>
          {isActive ? (
            <nav className="container-fullnav">
              <div className="nav-image">
                <NavHashLink to="/#top">
                  <Svg
                    className={"white"}
                    imagegradient0={"yellow-gradient-0"}
                    imagegradient1={"yellow-gradient-1"}
                    imagename={"yellow"}
                  />
                  <Title title={"white"} />
                </NavHashLink>
              </div>
            </nav>
          ) : (
            <nav className="container-nav">
              <div className="nav-image">
                <NavHashLink to="/#top">
                  <Svg
                    className={"pink"}
                    imagegradient0={"yellow-gradient-0"}
                    imagegradient1={"yellow-gradient-1"}
                    imagename={"yellow"}
                  />
                  <Title title={"black"} />
                </NavHashLink>
              </div>
            </nav>
          )}
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
          <NavHashLink to="/#top" className="navdeskfade">
            <div className="animate__animated ani1 animate__fadeIn animate__delay-1s">
              Home
            </div>
          </NavHashLink>
          <NavHashLink to="/about#top" className="navdeskfade">
            <div className="animate__animated ani2 animate__fadeIn animate__delay-1s">
              About Us
            </div>
          </NavHashLink>
          <NavHashLink to="/contact#top" className="navdeskfade">
            <div className="animate__animated ani3 animate__fadeIn animate__delay-1s">
              Contact Us
            </div>
          </NavHashLink>
        </div>
      </div>
    </>
  );
};

const TestMob = () => {
  const [isActive, setActive] = useState(false);

  let colored = isActive ? "collapse-nav" : "nav";
  let header = isActive ? "headerfull" : "header";
  let fade = isActive ? "fade" : "dnone";

  return (
    <>
      <div className={colored}>
        <div className={header}>
          {isActive ? (
            <nav className="container-fullnav">
              <div className="nav-image">
                <NavHashLink to="/#top">
                  <Svg
                    className={"white"}
                    imagegradient0={"yellow-gradient-0"}
                    imagegradient1={"yellow-gradient-1"}
                    imagename={"yellow"}
                  />
                  <Title title={"white"} />
                </NavHashLink>
              </div>
            </nav>
          ) : (
            <nav className="container-nav">
              <div className="nav-image">
                <NavHashLink to="/#top">
                  <Svg
                    className={"pink"}
                    imagegradient0={"yellow-gradient-0"}
                    imagegradient1={"yellow-gradient-1"}
                    imagename={"yellow"}
                  />
                  <Title title={"black"} />
                </NavHashLink>
              </div>
            </nav>
          )}
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
            <div className="animate__animated ani1 animate__fadeIn animate__delay-1s">
              Home
            </div>
          </NavHashLink>
          <NavHashLink to="/about#top" className="navfade">
            <div className="animate__animated ani2 animate__fadeIn animate__delay-1s">
              About Us
            </div>
          </NavHashLink>
          <NavHashLink to="/contact#top" className="navfade">
            <div className="animate__animated ani3 animate__fadeIn animate__delay-1s">
              Contact Us
            </div>
          </NavHashLink>
        </div>
      </div>
    </>
  );
};

const TestNav = () => {
  const [isMobile, setMobile] = useState(
    window.matchMedia("(max-width:850px)").matches
  );
  useEffect(() => {
    window.addEventListener("resize", () => {
      setMobile(window.matchMedia("(max-width:850px)").matches);
    });
  });
  return <>{isMobile ? <TestMob /> : <TestDesk />}</>;
};

export default TestNav;
