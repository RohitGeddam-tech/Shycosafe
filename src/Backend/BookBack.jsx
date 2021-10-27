import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "./Backend.scss";
import { Modal, Select } from "@material-ui/core";
import clear from "../images/clear.png";
import create from "../images/create.png";
import check from "../images/check.png";
import dots from "../images/dots.png";
import below from "../images/down.png";
import black from "../images/black.png";
import green from "../images/green.png";
import circleBlack from "../images/circle_black.png";
import circleGrey from "../images/circle_grey.png";
import orange from "../images/orange.png";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import moment from "moment";
import { Dropdown, DropdownItem, DropdownMenu } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { NavHashLink } from "react-router-hash-link";
import Settings from "./Settings";
import NewMember from "./NewMember";

const data = [
  {
    name: "Darshan Sawant",
    phone: 9869753456,
    mail: "darshansawant743@gmail.com",
    date: "2021-10-21",
    click: "Table Top Stand",
    Attended: "Vishal Sharma",
    status: "Ongoing",
  },
  {
    name: "Kiran Patil",
    phone: 8108345778,
    mail: "ksp@gmail.com",
    date: "2021-10-21",
    click: "The Floor Stand - Black",
    Attended: "Rahul Jain",
    status: "Pending",
  },
  {
    name: "Rohit Geddam",
    phone: 7977250075,
    mail: "rohitgeddam0@gmail.com",
    date: "2021-10-21",
    click: "Contact Form",
    Attended: "Jeet Khandelwal",
    status: "Closed",
  },
];

const statusData = [
  {
    key: "1",
    text: "Pending",
    value: "Pending",
    image: { avatar: true, src: orange },
  },
  {
    key: "2",
    text: "Ongoing",
    value: "Ongoing",
    image: { avatar: true, src: green },
  },
  {
    key: "3",
    text: "Closed",
    value: "Closed",
    image: { avatar: true, src: circleGrey },
  },
  {
    key: "4",
    text: "Unable to contact",
    value: "Unable to contact",
    image: { avatar: true, src: circleBlack },
  },
];

const Status = ({
  status,
  handleSelect,
  room,
  handleSettings,
  handleCheck,
}) => {
  const dotData = [
    {
      key: "1",
      text: "Edit Product",
      value: "Edit Product",
      icon: "pencil alternate",
      handle: handleSettings,
    },
    {
      key: "2",
      text: "Checkout",
      value: "Checkout",
      icon: "check",
      handle: handleCheck,
    },
  ];
  return (
    <div className="select">
      <Dropdown
        selection
        defaultValue={status}
        onChange={(event) => handleSelect(event, room)}
        button
        fluid
        className="p"
        options={statusData}
      ></Dropdown>
      <Dropdown icon="ellipsis vertical" className="dots">
        <Dropdown.Menu>
          {dotData.map((doc) => (
            <Dropdown.Item
              text={doc.text}
              icon={doc.icon}
              onClick={() => doc.handle(room)}
            />
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

const BookBack = () => {
  const [open, setOpen] = useState(false);
  const [down, setDown] = useState(false);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");
  const [sel, setSel] = useState("");
  const [selected, setSelected] = useState("");
  const [door, setDoor] = useState();
  const [array, setArray] = useState([...data]);
  const [form, setForm] = useState([]);
  const [popup, setPopup] = useState([]);
  const [error, setError] = useState({});
  const [date1, setDate1] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [stat, setStat] = useState(false);
  const [number, setNumber] = useState("");
  const [num, setNum] = useState(false);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [nameInvalid, setNameInvalid] = useState(false);
  const [phoneInvalid, setPhoneInvalid] = useState(false);
  const [mailInvalid, setMailInvalid] = useState(false);
  const [right, setRight] = useState(false);
  const [draw, setDraw] = useState(false);
  const [attend, setAttend] = useState("");
  const [attendInvalid, setAttendInvalid] = useState(false);

  const handleSearch = (e) => {
    // console.log("e value", e);
    setSearch(e.target.value);
  };

  const handleSelect = (e, room) => {
    // console.log(e);
    setSel(e.target.innerText);
    setDoor(room);
  };

  // React.useEffect(() => {
  //   console.log(sel);
  // }, [handleSelect]);

  React.useEffect(() => {
    array.forEach((members) => {
      if (members.room === door) {
        members.status = sel ? sel : members.status;
        // console.log({ message: "member array updated", members });
      }
    });
    // console.log("handleSelect useEffect is running");
    setArray(array);
    // console.log("after change: ", array);
    return array;
  }, [handleSelect]);

  const handleSettings = (room) => {
    array.forEach((members) => {
      if (members.phone === room) {
        setForm({
          name: members.name,
          phone: members.phone,
          mail: members.mail,
          date: members.date,
          click: members.click,
          Attended: members.Attended,
          status: members.status,
        });
        // console.log({ message: "form array deployed", form });
        // setModal(true);
        setOpen(true);
      }
    });
  };

  const handleCheck = (room) => {
    array.forEach((members) => {
      if (members.phone === room) {
        setForm({
          name: members.name,
          phone: members.phone,
          mail: members.mail,
          date: members.date,
          click: members.click,
          Attended: members.Attended,
          status: members.status,
        });
        // console.log({ message: "form array deployed", form });
        setModal(true);
        // setOpen(true);
      }
    });
  };

  // React.useEffect(() => {
  //   console.log({ message: "form array deployed", form });
  // }, [handleSettings, modal]);

  Date.prototype.addDays = function (days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };
  const handleDate = (e) => {
    setDate1(e);
  };

  React.useEffect(() => {
    setDate1(new Date(`${form.date}`));
    // console.log(date1);
    // setDate2(new Date(`${form.check_out}`));
    // console.log(date2);
  }, []);

  React.useEffect(() => {
    // if (popup === []) {
    // console.log(date1);
    // setDate2(new Date(`${form.check_out}`));
    // console.log(date2);
    setDate1(new Date(`${form.date}`));
    setSelected(form.click);
    setName(form.name);
    setAttend(form.Attended);
    setPhone(form.phone);
    setMail(form.mail);
    // }
  }, [form]);

  React.useEffect(() => {
    if (
      date1.getTime() === date2.getTime() ||
      date1.getTime() >= date2.getTime() ||
      date1.getDate() === date2.getDate()
    ) {
      setDate2(date1.addDays(1));
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
    // console.log(phone);
    // console.log('phone number : ', form.phone);
    // console.log(phone === form.phone);
    // console.log("phoneInvalid", phone.length === 10 || phone === form.phone);
    if (
      (!(nameInvalid && mailInvalid) && phone.length === 10) ||
      phone === form.phone
    ) {
      setRight(true);
      setPopup({
        name: name,
        phone: phone,
        mail: mail,
        date: date1,
        click: selected,
        Attended: attend,
        status: form.status,
      });
      setOpen(false);
    } else {
      setRight(false);
      console.log("error submit: ", error);
    }
  };

  React.useEffect(() => {
    if (right) {
      console.log("onForm submit: ", popup);
    }
  }, [handleSubmit]);

  const checkout = () => {
    setDate1(new Date(`${form.check_in}`));
    setDate2(new Date(`${form.check_out}`));
    // setSelected(form.pack);
    setName(form.name);
    setNumber(form.room);
    setPhone(form.phone);
    setMail(form.mail);
    setModal(false);
  };

  // const roomArray = [
  //   { key: "1", text: 101, value: 101 },
  //   { key: "2", text: 102, value: 102 },
  //   { key: "3", text: 103, value: 103 },
  //   { key: "4", text: 104, value: 104 },
  //   { key: "5", text: 105, value: 105 },
  //   { key: "6", text: 201, value: 201 },
  //   { key: "7", text: 202, value: 202 },
  //   { key: "8", text: 203, value: 203 },
  //   { key: "9", text: 204, value: 204 },
  //   { key: "10", text: 205, value: 205 },
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
      <Sidebar />
      <div className="bookMain">
        <Settings />
        <div className="contain">
          <h1>Leads Manangement</h1>
          <div className="Navigation">
            <div className="links">
              <div className="searchBox">
                <div className="text-input">
                  <input
                    value={search}
                    className="input"
                    name="search"
                    onChange={handleSearch}
                    pattern="^([A-Za-z ,.'`-]{0,})$"
                    type="text"
                    // required
                  />
                  <label htmlFor="name" className="input-placeholder">
                    Search by Name, Email, Mobile No.
                  </label>
                </div>
              </div>
            </div>
            <button className="redBtn" onClick={() => setDraw(true)}>
              New Lead Entry
            </button>
          </div>
          <table className="mainData">
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Mobile No.</th>
              <th>Email</th>
              <th>Click from</th>
              <th>Attended by</th>
              <th>Status</th>
            </tr>
            {array.map((doc, i) => (
              <tr key={i}>
                <td>{moment(doc.date).format("DD MMM YYYY")}</td>
                <td>{doc.name}</td>
                <td>{doc.phone}</td>
                <td>{doc.mail}</td>
                <td>{doc.click}</td>
                <td>{doc.Attended}</td>
                <td>
                  <Status
                    // setOpen={setOpen}
                    status={doc.status}
                    // open={open}
                    handleSettings={handleSettings}
                    handleSelect={handleSelect}
                    handleCheck={handleCheck}
                    room={doc.phone}
                  />
                </td>
              </tr>
            ))}
          </table>
          <Modal
            className="modalBack"
            open={open}
            onClose={() => {
              setOpen(false);
            }}
          >
            <div className="box">
              <div className="head">
                <p>Edit Product</p>
                <img
                  className="img"
                  src={clear}
                  alt="cancel"
                  onClick={() => setOpen(false)}
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
                    name="attended"
                    pattern="^([A-Za-z ,.'`-]{2,30})$"
                    onChange={handleChange}
                    type="text"
                    required
                  />
                  <label htmlFor="name" className="input-placeholder">
                    Attended
                  </label>
                </div>
                <button className="redBtn" type="submit">
                  Save Changes
                </button>
              </form>
            </div>
          </Modal>
          <Modal
            className="modalBack"
            open={modal}
            onClose={() => {
              setModal(false);
            }}
          >
            <div className="box">
              <div className="head">
                <p>Confirmation for checkout</p>
                <img
                  className="img"
                  src={clear}
                  alt="cancel"
                  onClick={() => setModal(false)}
                />
              </div>
              <div className="checkInfo">
                <div className="top">
                  <div className="internal">
                    <p>Name:</p>
                    <h5>{form.name}</h5>
                  </div>
                  <div className="internal">
                    <p>Clicked from:</p>
                    <h5>{form.click}</h5>
                  </div>
                </div>
                <div className="top">
                  <div className="internal">
                    <p>Mobile No.:</p>
                    <h5>{form.phone}</h5>
                  </div>
                  <div className="internal">
                    <p>Status: </p>
                    <Dropdown
                      selection
                      defaultValue={form.status}
                      onChange={(e) => setSel(e.target.value)}
                      button
                      fluid
                      className="p"
                      options={statusData}
                    ></Dropdown>
                  </div>
                </div>
                <div className="bottom">
                  <button className="loginBtn" onClick={() => setModal(false)}>
                    cancel
                  </button>
                  <button className="redBtn" onClick={checkout}>
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </Modal>
        </div>
        <NewMember draw={draw} setDraw={setDraw} />
      </div>
    </>
  );
};

export default BookBack;
