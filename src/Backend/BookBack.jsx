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
import axios from "axios";
import { NavHashLink } from "react-router-hash-link";
import Settings from "./Settings";
import NewMember from "./NewMember";
import { addDays } from "date-fns";
// import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
// import { LinkedCalendar } from "rb-datepicker";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-daterangepicker/daterangepicker.css";

const data = [
  {
    name: "Darshan Sawant",
    phone: 9869753456,
    mail: "darshansawant743@gmail.com",
    date: "2021-10-21",
    click: "Table Top Stand",
    Attended: "Vishal Sharma",
    city: "Lucknow",
    status: "Ongoing",
    message:
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used before final copy is available",
  },
  {
    name: "Kiran Patil",
    phone: 8108345778,
    mail: "ksp@gmail.com",
    date: "2021-10-21",
    click: "The Floor Stand - Black",
    Attended: "Rahul Jain",
    status: "Pending",
    city: "Pune",
    message:
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used before final copy is available",
  },
  {
    name: "Rohit Geddam",
    phone: 7977250075,
    mail: "rohitgeddam0@gmail.com",
    date: "2021-10-21",
    click: "Contact Form",
    Attended: "Jeet Khandelwal",
    status: "Closed",
    city: "Mumbai",
    message:
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used before final copy is available",
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

const Status = ({ status, handleSelect }) => {
  return (
    <div className="select">
      <Dropdown
        selection
        defaultValue={status}
        onChange={(e) => handleSelect(e)}
        button
        fluid
        className="p"
        options={statusData}
      ></Dropdown>
    </div>
  );
};

const BookBack = (className = "") => {
  const [open, setOpen] = useState(false);
  // const [down, setDown] = useState(false);
  // const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");
  const [sel, setSel] = useState("");
  // const [selected, setSelected] = useState("");
  const [door, setDoor] = useState();
  const [array, setArray] = useState([...data]);
  const [form, setForm] = useState([]);
  const [popup, setPopup] = useState([]);
  const [error, setError] = useState({});
  const [date1, setDate1] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [num, setNum] = useState(false);
  const [right, setRight] = useState(false);
  const [draw, setDraw] = useState(false);
  const [text, setText] = useState("");
  const [clicked, setClicked] = useState(false);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const handleSearch = (e) => {
    // console.log("e value", e);
    setSearch(e.target.value);
  };

  const handleSelect = (e, room) => {
    setSel(e.target.innerText);
  };

  React.useEffect(async () => {
    console.log(sel);
    console.log(door);
    const form = {
      status: sel,
      note: "note",
    };
    const tokenData = localStorage.getItem("accessToken");
    const token = JSON.stringify(tokenData);
    // console.log(token.slice(1, -1));
    const headers = {
      Authorization: `Bearer ${token.slice(1, -1)}`,
    };
    if (right) {
      // console.log(form);
      try {
        const res = await axios.put(
          `${process.env.REACT_APP_PUBLIC_URL}admin/packages/${num}`,
          form,
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
  }, [handleSelect]);

  const handleSettings = (room) => {
    setNum(room);
    array.forEach((members, i) => {
      if (i === room) {
        setForm({
          name: members.name,
          phone: members.phone,
          mail: members.mail,
          date: members.date,
          click: members.click,
          Attended: members.Attended,
          status: members.status,
          city: members.city,
          msg: members.message,
        });
        setSel(members.status);
        // console.log({ message: "form array deployed", form });
        // setModal(true);
        setOpen(true);
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sel !== "" && text !== "") {
      setRight(true);
      setPopup({
        status: sel,
        note: text,
      });
      setOpen(false);
      setText("");
    } else {
      setRight(false);
      console.log("error submit: ", error);
    }
  };

  React.useEffect(async () => {
    console.log("onForm submit: ", popup);
    const tokenData = localStorage.getItem("accessToken");
    const token = JSON.stringify(tokenData);
    // console.log(token.slice(1, -1));
    const headers = {
      Authorization: `Bearer ${token.slice(1, -1)}`,
    };
    if (right) {
      // console.log(form);
      try {
        const res = await axios.put(
          `${process.env.REACT_APP_PUBLIC_URL}leads/${num}`,
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
  }, [handleSubmit]);

  React.useEffect(async () => {
    const tokenData = localStorage.getItem("accessToken");
    const token = JSON.stringify(tokenData);
    // console.log(token.slice(1, -1));
    const headers = {
      Authorization: `Bearer ${token.slice(1, -1)}`,
    };
    if (
      localStorage.getItem("role") !== null &&
      localStorage.getItem("role") === "admin"
    ) {
      axios
        .get(`${process.env.REACT_APP_PUBLIC_URL}leads`, {
          headers: headers,
        })
        .then((res) => {
          if (res) {
            const info = res.data.data;
            console.log("response user profile msg", info);
            // console.log("file array state1: ", packed.length);
            // setArray([...info]);
            // console.log("file array state2: ", packed.length);
            console.log("array state: ", array);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  React.useEffect(() => {
    console.log(state);
  }, [state]);

  className += ` textfield ${text ? "has-value" : ""}`;

  return (
    <>
      <Sidebar />
      <div className="bookMain">
        <Settings />
        <div className="contain">
          <h1>Leads Manangement</h1>
          {/* <LinkedCalendar onDatesChange={onDatesChange} showDropdowns={true} /> */}
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
              <th>
                Date
                {/* <DateRangePicker
                  onChange={(item) => {
                    setState([item.selection]);
                  }}
                  showSelectionPreview={true}
                  moveRangeOnFirstSelection={false}
                  months={2}
                  ranges={state}
                  direction="horizontal"
                /> */}
              </th>
              <th>Name</th>
              <th>Mobile No.</th>
              <th>Email</th>
              <th>Source</th>
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
                  {/* <Status
                    // setOpen={setOpen}
                    status={doc.status}
                    // open={open}
                    handleSettings={handleSettings}
                    handleSelect={handleSelect}
                    handleCheck={handleCheck}
                    room={doc.phone}
                  /> */}
                  <div className="select">
                    <p className="stat">
                      <span
                        className={
                          doc.status === "Unable to contact" ? "black" : "nill"
                        }
                      ></span>
                      <span
                        className={doc.status === "Pending" ? "red" : "nill"}
                      ></span>
                      <span
                        className={doc.status === "Closed" ? "blue" : "nill"}
                      ></span>
                      <span
                        className={doc.status === "Ongoing" ? "green" : "nill"}
                      ></span>
                      {doc.status}
                    </p>
                    <Dropdown icon="ellipsis vertical" className="dots">
                      <Dropdown.Menu>
                        <Dropdown.Item
                          key={1}
                          text="View All Details"
                          value="View All Details"
                          onClick={() => handleSettings(i)}
                        />
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
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
            <div className="box details">
              <div className="head">
                <p>Lead Details</p>
                <img
                  className="img"
                  src={clear}
                  alt="cancel"
                  onClick={() => setOpen(false)}
                />
              </div>
              <form className="enterData" onSubmit={handleSubmit}>
                <div className="textData">
                  <p className="label">Date :</p>
                  <p className="value">{form.date}</p>
                </div>
                <div className="textData">
                  <p className="label">Name :</p>
                  <p className="value">{form.name}</p>
                </div>
                <div className="textData">
                  <p className="label">Mobile No. :</p>
                  <p className="value">{form.phone}</p>
                </div>
                <div className="textData">
                  <p className="label">Email :</p>
                  <p className="value">{form.mail}</p>
                </div>
                <div className="textData">
                  <p className="label">City :</p>
                  <p className="value">{form.city}</p>
                </div>
                <div className="textData">
                  <p className="label">Source :</p>
                  <p className="value">{form.click}</p>
                </div>
                <div className="textData">
                  <p className="label">Message :</p>
                  <p className="value">{form.msg}</p>
                </div>
                <div className="textData">
                  <p className="label">Status: </p>
                  <Status status={form.status} handleSelect={handleSelect} />
                </div>
                <div className="textData">
                  <p className="label">Attended by :</p>
                  <p className="value">{form.Attended}</p>
                </div>
                <div className="textData">
                  <p className="label">Note :</p>
                  <div className="text-input">
                    <textarea
                      className={className}
                      value={text}
                      name="text"
                      onChange={(e) => setText(e.target.value)}
                      onClick={() => setClicked(!clicked)}
                    />
                  </div>
                </div>
                <button className="redBtn" type="submit">
                  Save Changes
                </button>
              </form>
            </div>
          </Modal>
        </div>
        <NewMember draw={draw} setDraw={setDraw} />
      </div>
    </>
  );
};

export default BookBack;
