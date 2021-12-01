import React from "react";
import { Dropdown, DropdownMenu, DropdownItem } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import below from "../images/down.png";
import black from "../images/black.png";

const Settings = () => {
  const tokenData = localStorage.getItem("name");
  const name = JSON.stringify(tokenData);

  return (
    <>
      <div className="drop">
        <div className="shown">
          <img src={black} alt="account" />
          <h1>{name.slice(1, -1)}</h1>
          <img src={below} alt="down-arrow" />
        </div>
        <Dropdown className="d">
          <DropdownMenu>
            {/* <DropdownItem>
              <p>Settings</p>
            </DropdownItem> */}
            <DropdownItem
              onClick={() => {
                localStorage.clear();
                sessionStorage.clear();
                window.location.href = "/#top";
              }}
            >
              <p>Log Out</p>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </>
  );
};

export default Settings;
