import React, { useState } from "react";
import { Modal } from "@material-ui/core";
import clear from "../images/clear.png";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
// import moment from "moment";
import { Dropdown } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const NewMember = ({ draw, setDraw }) => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [number, setNumber] = useState("");
  const [selected, setSelected] = useState("");
  const [phone, setPhone] = useState("");
  //   const [date1, setDate1] = useState(new Date());
  //   const [date2, setDate2] = useState(new Date());
  const [date1, setDate1] = useState(null);
  const [date2, setDate2] = useState(null);
  const [nameInvalid, setNameInvalid] = useState(false);
  const [attend, setAttend] = useState("");
  const [attendInvalid, setAttendInvalid] = useState(false);
  const [right, setRight] = useState(false);
  const [phoneInvalid, setPhoneInvalid] = useState(false);
  const [mailInvalid, setMailInvalid] = useState(false);
  const [popup, setPopup] = useState([]);

  Date.prototype.addDays = function (days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };
  const handleDate = (e) => {
    setDate1(e);
    setDate2(new Date());
  };

  React.useEffect(() => {
    if (date1 !== null && date2 !== null) {
      if (
        date1.getTime() === date2.getTime() ||
        date1.getTime() >= date2.getTime() ||
        date1.getDate() === date2.getDate()
      ) {
        setDate2(date1.addDays(1));
      }
    }
  }, [handleDate, date1, date2, setDate2, setDate1]);

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        setNameInvalid(!e.target.validity.valid);
        break;
      case "phone":
        setPhone(e.target.value);
        break;
      case "mail":
        setMail(e.target.value);
        setMailInvalid(!e.target.validity.valid);
        break;
      case "attend":
        setAttend(e.target.value);
        setAttendInvalid(!e.target.validity.valid);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(phone.length);
    console.log(phone);
    console.log("phoneInvalid", phoneInvalid);
    if (!(nameInvalid && mailInvalid && attendInvalid) && phone.length === 10) {
      setRight(true);
      setPopup({
        name: name,
        phone: phone,
        mail: mail,
        date: date1,
        pack: selected,
        attend: attend,
      });
      setDraw(false);
    } else {
      setRight(false);
      console.log("error submit");
    }
  };

  React.useEffect(() => {
    if (right) {
      console.log("on new entry: ", popup);
    }
  }, [handleSubmit]);

  // const roomArray = [
  //   { key: "1", text: "101", value: "101" },
  //   { key: "2", text: "102", value: "102" },
  //   { key: "3", text: "103", value: "103" },
  //   { key: "4", text: "104", value: "104" },
  //   { key: "5", text: "105", value: "105" },
  //   { key: "6", text: "201", value: "201" },
  //   { key: "7", text: "202", value: "202" },
  //   { key: "8", text: "203", value: "203" },
  //   { key: "9", text: "204", value: "204" },
  //   { key: "10", text: "205", value: "205" },
  // ];

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
            <p>Edit Product</p>
            <img
              className="img"
              src={clear}
              alt="cancel"
              onClick={() => setDraw(false)}
            />
          </div>
          <form className="enterData" onSubmit={handleSubmit}>
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
            </div>
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
            </div>
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
            </div>
            <div className="date">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                  disablePast={true}
                  label={`Check-in date`}
                  clearable
                  // minDate={date1}
                  value={date1}
                  onChange={handleDate}
                  inputVariant="outlined"
                  format="E, dd MMM"
                  animateYearScrolling
                />
              </MuiPickersUtilsProvider>
            </div>
            <div className="select">
              {selected === "" ? null : <h5>Clicked from</h5>}
              <Dropdown
                selection
                defaultValue={selected}
                placeholder="Clicked from"
                onChange={(e) => setSelected(e.target.innerText)}
                button
                fluid
                className="d"
                options={selectedArray}
              ></Dropdown>
            </div>
            <div className="text-input">
              <input
                value={attend}
                className="input"
                name="attend"
                pattern="^([A-Za-z ,.'`-]{2,30})$"
                onChange={handleChange}
                type="text"
                required
              />
              <label htmlFor="name" className="input-placeholder">
                Attended
              </label>
            </div>
            {/* <div className="select">
              {number === "" ? null : <h5>Room No.</h5>}
              {number === "" ? (
                <Dropdown
                  selection
                  defaultValue={number.slice(1, -1)}
                  placeholder="Room No."
                  onChange={(e) => setNumber(e.target.innerText)}
                  button
                  fluid
                  className="d"
                  options={roomArray}
                ></Dropdown>
              ) : (
                <Dropdown
                  selection
                  defaultValue={number}
                  onChange={(e) => setNumber(e.target.innerText)}
                  button
                  fluid
                  className="d"
                  options={roomArray}
                ></Dropdown>
              )}
            </div> */}
            <button className="redBtn" type="submit">
              Save Changes
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default NewMember;
