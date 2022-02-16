import React from "react";
import { Dropdown, DropdownMenu, DropdownItem } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
// import below from "../images/down.png";
// import black from "../images/black.png";
import { Icon } from "semantic-ui-react";
import axios from "axios";

const Settings = () => {
  const [right, setRight] = React.useState(false);
  const tokenData = localStorage.getItem("name");
  const name = JSON.stringify(tokenData);

  React.useEffect(() => {
    if (localStorage.getItem("accessToken") !== null) {
      setRight(true);
    }
  }, []);

  React.useEffect(() => {
    if (right) {
      const tokenData = localStorage.getItem("accessToken");
      const token = JSON.stringify(tokenData);
      //   console.log(token.slice(1, -1));
      const headers = {
        Authorization: `Bearer ${token.slice(1, -1)}`,
      };
      axios
        .get(`${process.env.REACT_APP_PUBLIC_URL}user-profile`, {
          headers: headers,
        })
        .then((res) => {
          if (res) {
            if (res.data.message === "unauthorized") {
              localStorage.clear();
            }
          }
        })
        .catch((err) => {
          const {
            message = "Sorry! We are unable to process your request.",
            status_code,
            errors = {},
          } = (err.response && err.response.data) || {};

          // setSuccess(false);
          // console.log(success);
          // setLoadBtn(false);

          const errArr = Object.keys(errors);
          if (status_code === 422 && errArr.length) {
            const error = {};
            errArr.forEach((key) => (error[key] = errors[key][0]));
          } else {
            localStorage.clear();
          }
          setRight(false);
        });
      // }
    }
  }, [right]);

  return (
    <>
      <div className="drop">
        <div className="shown">
          <Icon name="user circle" />
          {/* <img src={black} alt="account" /> */}
          <h1>{name.slice(1, -1)}</h1>
          <Icon name="angle down" />
          {/* <img src={below} alt="down-arrow" /> */}
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
