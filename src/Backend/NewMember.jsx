import React, { useState } from "react";
import { Modal } from "@material-ui/core";
import clear from "../images/clear.png";
// import moment from "moment";
import { Dropdown } from "semantic-ui-react";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";

const NewMember = ({ draw, setDraw, className = "" }) => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  // const [number, setNumber] = useState("");
  const [selected, setSelected] = useState("");
  const [phone, setPhone] = useState("");
  const [nameInvalid, setNameInvalid] = useState(false);
  const [city, setCity] = useState("");
  const [text, setText] = useState("");
  // const [textInvalid, setTextInvalid] = useState(false);
  // const [cityInvalid, setCityInvalid] = useState(false);
  const [right, setRight] = useState(false);
  const [phoneInvalid, setPhoneInvalid] = useState(false);
  const [mailInvalid, setMailInvalid] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [popup, setPopup] = useState([]);

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        setNameInvalid(!e.target.validity.valid);
        break;
      case "city":
        setCity(e.target.value);
        // setCityInvalid(!e.target.validity.valid);
        break;
      case "phone":
        setPhone(e.target.value);
        break;
      case "mail":
        setMail(e.target.value);
        setMailInvalid(!e.target.validity.valid);
        break;
      case "text":
        setText(e.target.value);
        break;
      default:
        break;
    }
    if (/^[0-9]{10}$/.test(phone)) {
      setPhoneInvalid(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(phone.length);
    // console.log(phone);
    // console.log("phoneInvalid", phoneInvalid);
    if (
      !(nameInvalid && mailInvalid && phoneInvalid) &&
      phone.length === 10 &&
      text !== "" && selected !== ""
    ) {
      setRight(true);
      setPopup({
        name: name,
        email: mail,
        mobile: phone,
        type: selected,
        city: city,
        message: text,
      });
      setDraw(false);
    } else {
      setRight(false);
      console.log("error submit");
    }
  };

  React.useEffect(async () => {
    console.log("on new entry: ", popup);
    const tokenData = localStorage.getItem("access-token");
    const token = JSON.stringify(tokenData);
    // console.log(token.slice(1, -1));
    const headers = {
      Authorization: `Bearer ${token.slice(1, -1)}`,
    };
    if (right) {
      // console.log(form);
      try {
        const res = await axios.put(
          `${process.env.REACT_APP_PUBLIC_URL}admin/packages/`,
          popup,
          {
            headers: headers,
          }
        );
        if (res) {
          console.log(res.data.data);
          // setStart(false);
          console.log(popup);
          // window.location.reload();
          // setForm({});
        }
      } catch (err) {
        // console.log(name);
        console.log(err);
      }
    }
  }, [setRight, handleSubmit]);

  const selectedArray = [
    { key: "1", text: "Table Top Stand", value: "Table Top Stand" },
    { key: "2", text: "Contact Form", value: "Contact Form" },
    {
      key: "3",
      text: "The Floor Stand - Black",
      value: "The Floor Stand - Black",
    },
    { key: "4", text: "Know More", value: "Know More" },
    { key: "5", text: "Product 3", value: "Product 3" },
    { key: "6", text: "Product 4", value: "Product 4" },
  ];

  className += ` textfield ${text ? "has-value" : ""}`;

  return (
    <>
      <Modal
        className="modalBack"
        open={draw}
        onClose={() => {
          setDraw(false);
        }}
      >
        <div className="box">
          <div className="head">
            <p>New Lead Entry</p>
            <img
              className="img"
              src={clear}
              alt="cancel"
              onClick={() => setDraw(false)}
            />
          </div>
          <form className="enterData" onSubmit={handleSubmit}>
            <div className="textInput">
              <div className="text-input">
                <input
                  value={name}
                  className="input"
                  name="name"
                  pattern="^([A-Za-z ,.'`-]{2,30})$"
                  onChange={handleChange}
                  type="text"
                  required
                />
                <label htmlFor="name" className="input-placeholder">
                  Name
                </label>
                {nameInvalid ? (
                  <p className="error-text">PLEASE PROVIDE A VALID NAME</p>
                ) : null}
              </div>
            </div>
            <div className="textInput">
              <div className="text-input">
                <input
                  value={phone}
                  type="number"
                  className="input"
                  name="phone"
                  onChange={handleChange}
                  pattern="^([0-9]{10})$"
                  required
                />
                <label htmlFor="phone" className="input-placeholder">
                  Mobile No.
                </label>
                {nameInvalid ? (
                  <p className="error-text">
                    PLEASE PROVIDE A VALID MOBILE NO.
                  </p>
                ) : null}
              </div>
            </div>
            <div className="textInput">
              <div className="text-input">
                <input
                  className="input"
                  value={mail}
                  name="mail"
                  onChange={handleChange}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"
                  type="email"
                  required
                />
                <label htmlFor="mail" className="input-placeholder">
                  Email
                </label>
                {mailInvalid ? (
                  <p className="error-text">PLEASE PROVIDE A VALID EMAIL</p>
                ) : null}
              </div>
            </div>
            <div className="textInput">
              <div className="text-input">
                <input
                  value={city}
                  className="input"
                  name="city"
                  // pattern="^([A-Za-z ,.'`-]{2,30})$"
                  onChange={handleChange}
                  type="text"
                  // required
                />
                <label htmlFor="city" className="input-placeholder">
                  City
                </label>
              </div>
            </div>
            <div className="textInput">
              <div className="select">
                {selected === "" ? null : <h5>Source</h5>}
                <Dropdown
                  selection
                  defaultValue={selected}
                  placeholder="Source"
                  onChange={(e) => setSelected(e.target.innerText)}
                  button
                  fluid
                  className="d"
                  options={selectedArray}
                ></Dropdown>
              </div>
            </div>
            <div className="textInput">
              <div className="text-input">
                <textarea
                  className={className}
                  value={text}
                  name="text"
                  onChange={handleChange}
                  onClick={() => setClicked(!clicked)}
                />
                <label htmlFor="message" className="input-placeholder">
                  Note
                </label>
              </div>
            </div>
            <button
              className="redBtn"
              type="submit"
              disabled={
                !(nameInvalid && mailInvalid && phoneInvalid) &&
                phone.length === 10 &&
                text !== ""
                  ? false
                  : true
              }
            >
              Save
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default NewMember;
