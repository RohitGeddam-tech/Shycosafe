import React from "react";
import { NavHashLink } from "react-router-hash-link";
import logo from "../images/logo.png";
import "./Side.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={logo} alt="logo" />
      <div className="links">
        <NavHashLink to="/leads" className="backLinks" activeClassName="active">
          Lead Management
        </NavHashLink>
        {localStorage.getItem("role") !== "assistant_admin" ? (
          <NavHashLink
            to="/user"
            className="backLinks"
            activeClassName="active"
          >
            User Management
          </NavHashLink>
        ) : null}
        {/* <NavHashLink
          to="/BookBack#top"
          // className="backLinks"
          className={`${
            window.location.href.includes("BookBack") ? "backLinks active" : "backLinks"
          }`}
        >
          Bookings
        </NavHashLink> */}
      </div>
      <div className="navBorder">
        <div className="border"></div>
      </div>
    </div>
  );
};

export default Sidebar;
