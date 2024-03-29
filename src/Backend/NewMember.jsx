import React, { useState } from "react";
import { Modal } from "@material-ui/core";
import clear from "../images/clear.png";
// import moment from "moment";
import { Dropdown } from "semantic-ui-react";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

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
  const [cityInvalid, setCityInvalid] = useState(false);
  const [right, setRight] = useState(false);
  const [phoneInvalid, setPhoneInvalid] = useState(false);
  const [mailInvalid, setMailInvalid] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [popup, setPopup] = useState([]);
  const [error, setError] = useState({});
  const [alertState, setAlertState] = useState({
    open: false,
    message: "",
    type: "success",
  });

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        setNameInvalid(!e.target.validity.valid);
        // if (/^[A-Za-z]{0,1}[\.]{0,1}[A-Za-z\s]{2,}/.test(e.target.value)) {
        //   // console.log("error", fname);
        //   setNameInvalid(true);
        //   // console.log(FnameInvalid);
        // } else {
        //   setNameInvalid(false);
        // }
        break;
      case "city":
        setCity(e.target.value);
        setCityInvalid(!e.target.validity.valid);
        // if (/\s/.test(e.target.value)) {
        //   // console.log("error", fname);
        //   setCityInvalid(true);
        //   // console.log(FnameInvalid);
        // } else {
        //   setCityInvalid(false);
        // }
        break;
      case "phone":
        setPhone(e.target.value);
        if (/^[0-9]{10}$/.test(e.target.value)) {
          setPhoneInvalid(false);
        } else {
          setPhoneInvalid(true);
        }
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
    setError({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(phone.length);
    // console.log(phone);
    // console.log("phoneInvalid", phoneInvalid);
    if (
      !(nameInvalid && mailInvalid) &&
      phone.length === 10 &&
      selected !== ""
    ) {
      setRight(true);
      setPopup({
        name: name,
        email: mail,
        mobile: phone,
        type: selected,
        city: city,
        note: text,
      });
    } else {
      setRight(false);
      // console.log("error submit");
    }
  };

  const addData = async () => {
    // console.log("on new entry: ", popup);
    const tokenData = localStorage.getItem("accessToken");
    const token = JSON.stringify(tokenData);
    // console.log(token.slice(1, -1));
    const headers = {
      Authorization: `Bearer ${token.slice(1, -1)}`,
    };
    if (right) {
      // console.log(form);
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_PUBLIC_URL}leads`,
          popup,
          {
            headers: headers,
          }
        );
        if (res) {
          // console.log(res.data.data);
          // setStart(false);
          // console.log(popup);
          setRight(false);
          setDraw(false);
          window.location.reload();
          // setForm({});
        }
      } catch (err) {
        // console.log(name);
        // console.log(err);
        const {
          message = "Sorry! We are unable to process your request.",
          status_code,
          errors = {},
        } = (err.response && err.response.data) || {};

        // setSuccess(false);
        // console.log(success);
        // setLoadBtn(false);
        setRight(false);
        // setDraw(false);

        const errArr = Object.keys(errors);
        if (status_code === 422 && errArr.length) {
          const error = {};
          errArr.forEach((key) => (error[key] = errors[key][0]));
          setError(error);
          setAlertState({ open: true, message, type: "error" });
        } else {
          setAlertState({ open: true, message, type: "error" });
        }
      }
    }
  };

  React.useEffect(() => {
    if (right) {
      addData();
    }
  }, [setRight, handleSubmit]);

  const selectedArray = [
    {
      key: "1",
      text: "Product: Table Top Stand",
      value: "Product: Table Top Stand",
    },
    {
      key: "2",
      text: "Product: The Floor Stand - Black",
      value: "Product: The Floor Stand - Black",
    },
    {
      key: "3",
      text: "Product: The Floor Stand - Chrome",
      value: "Product: The Floor Stand - Chrome",
    },
    { key: "4", text: "Contact Form", value: "Contact Form" },
  ];

  className += ` textfield ${text ? "has-value" : ""}`;

  const [selectInvalid, setSelectInvalid] = useState(false);

  const handleAlertClose = () => {
    setAlertState({ open: false, message: "", type: "success" });
  };

  // console.log(e.target.innerText.length);
  // if (e.target.innerText.length < 50) {
  //   setSelected(e.target.innerText);
  // } else {
  //   setSelected("Product: Table Top Stand");
  // }

  return (
    <>
      <Modal
        className="modalBack"
        open={draw}
        onClose={() => {
          setDraw(false);
          setName("");
          setMail("");
          setText("");
          setPhone("");
          setCity("");
          setNameInvalid(false);
          setPhoneInvalid(false);
          setCityInvalid(false);
          setMailInvalid(false);
          setSelectInvalid(false);
          setSelected("");
        }}
      >
        <div className="box">
          <div className="head">
            <p>New Lead Entry</p>
            <img
              className="img"
              src={clear}
              alt="cancel"
              onClick={() => {
                setDraw(false);
                setName("");
                setMail("");
                setText("");
                setPhone("");
                setCity("");
                setNameInvalid(false);
                setPhoneInvalid(false);
                setCityInvalid(false);
                setMailInvalid(false);
                setSelectInvalid(false);
                setError({});
                setSelected("");
              }}
            />
          </div>
          <form className="enterData" onSubmit={handleSubmit}>
            <div className="textInput">
              <div className="text-input">
                <input
                  value={name}
                  className="input"
                  name="name"
                  pattern="^(?! )[A-Za-z ]*(?<! )$"
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
                {phoneInvalid ? (
                  <p className="error-text">
                    PLEASE PROVIDE A VALID 10 DIGIT MOBILE NO.
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
                  pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$"
                  type="email"
                  required
                />
                <label htmlFor="mail" className="input-placeholder">
                  Email
                </label>
                {mailInvalid ? (
                  <p className="error-text">PLEASE PROVIDE A VALID EMAIL</p>
                ) : null}
                {error.email ? (
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
                  pattern="^(?! )[A-Za-z ]*(?<! )$"
                  onChange={handleChange}
                  type="text"
                  // required
                />
                <label htmlFor="city" className="input-placeholder">
                  City
                </label>
                {cityInvalid ? (
                  <p className="error-text">
                    PLEASE PROVIDE A VALID CITY NAME.
                  </p>
                ) : null}
              </div>
            </div>
            <div className="textInput">
              <div className="select">
                {selected === "" ? null : <h5>Source</h5>}
                <Dropdown
                  selection
                  defaultValue={selected}
                  placeholder="Source"
                  onChange={(e) => {
                    setSelected(e.target.innerText);
                  }}
                  button
                  selectOnBlur={false}
                  text={selected || "Source"}
                  fluid
                  className="d"
                  options={selectedArray}
                ></Dropdown>
              </div>
            </div>
            {selectInvalid ? (
              <p style={{ margin: "2px 0 8px 0", color: "red" }}>
                Please re-select the source.
              </p>
            ) : null}
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
                !(nameInvalid || mailInvalid || phoneInvalid) &&
                phone.length === 10 &&
                selected !== "" &&
                city !== "" &&
                mail !== "" &&
                name !== "" &&
                name.length > 1
                  ? false
                  : true
              }
            >
              Save
            </button>
          </form>
        </div>
      </Modal>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={alertState.open}
        onClose={handleAlertClose}
        autoHideDuration={5000}
      >
        <Alert
          onClose={handleAlertClose}
          severity={alertState.type}
          variant="filled"
        >
          {alertState.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default NewMember;
