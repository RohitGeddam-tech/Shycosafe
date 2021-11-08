import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "./User.scss";
import { Modal } from "@material-ui/core";
import clear from "../images/clear.png";
import edit from "../images/delete.png";
import Settings from "./Settings";

const data = [
  {
    name: "Darshan Sawant",
    phone: 9869753456,
    mail: "darshansawant743@gmail.com",
    date: "2021-10-21",
    click: "Table Top Stand",
    Attended: "Vishal Sharma",
    status: "Ongoing",
    role: "Admin",
  },
  {
    name: "Kiran Patil",
    phone: 8108345778,
    mail: "ksp@gmail.com",
    date: "2021-10-21",
    click: "The Floor Stand - Black",
    Attended: "Rahul Jain",
    status: "Pending",
    role: "Admin",
  },
  {
    name: "Rohit Geddam",
    phone: 7977250075,
    mail: "rohitgeddam0@gmail.com",
    date: "2021-10-21",
    click: "Contact Form",
    Attended: "Jeet Khandelwal",
    status: "Closed",
    role: "Asst. Admin",
  },
];

const User = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [array, setArray] = useState([...data]);
  const [popup, setPopup] = useState([]);
  const [error, setError] = useState({});
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [nameInvalid, setNameInvalid] = useState(false);
  const [mailInvalid, setMailInvalid] = useState(false);
  const [right, setRight] = useState(false);
  const [draw, setDraw] = useState(false);

  const handleSearch = (e) => {
    // console.log("e value", e);
    setSearch(e.target.value);
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        setNameInvalid(!e.target.validity.valid);
        break;
      case "mail":
        setMail(e.target.value);
        setMailInvalid(!e.target.validity.valid);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!(nameInvalid && mailInvalid)) {
      setRight(true);
      setPopup({
        name: name,
        mail: mail,
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

  return (
    <>
      <Sidebar />
      <div className="userMain">
        <Settings />
        <div className="contain">
          <h1>User Manangement</h1>
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
                    Search by Name
                  </label>
                </div>
              </div>
            </div>
            <button className="redBtn" onClick={() => setOpen(true)}>
              Add New Asst. Admin
            </button>
          </div>
          <table className="mainData">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th></th>
            </tr>
            {array.map((doc, i) => (
              <tr key={i}>
                <td>{doc.name}</td>
                <td>{doc.mail}</td>
                <td>{doc.role}</td>
                <td onClick={() => setDraw(true)}>
                  {doc.role === "Asst. Admin" ? (
                    <img src={edit} alt="delete" />
                  ) : null}
                  {doc.role === "Asst. Admin" ? `Delete` : null}
                </td>
              </tr>
            ))}
          </table>
          <Modal
            className="modalAdmin"
            open={open}
            onClose={() => {
              setOpen(false);
            }}
          >
            <div className="box">
              <div className="head">
                <div className="heading">
                  <h1>Add New Asst.Admin</h1>
                  <p>Please fill in the details. </p>
                </div>
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
                    Full Name
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
                <i>
                  Note: ‘Set Password’ link will be sent to entered email
                  address.
                </i>
                <div className="btnGrp">
                  <button className="noOutline" onClick={() => setOpen(false)}>
                    Cancel
                  </button>
                  <button className="redBtn" type="submit">
                    Add
                  </button>
                </div>
              </form>
            </div>
          </Modal>
          <Modal
            className="modalAdmin"
            open={draw}
            onClose={() => {
              setDraw(false);
            }}
          >
            <div className="box">
              <div className="head">
                <div className="heading">
                  <h1>Confirmation</h1>
                  {/* <p>Please fill in the details. </p> */}
                </div>
                <img
                  className="img"
                  src={clear}
                  alt="cancel"
                  onClick={() => setDraw(false)}
                />
              </div>
              <div className="body">
                <p>
                  Are you sure you want to delete this user as assistant admin?
                </p>
              </div>
              <div className="btnGrp">
                <button className="noOutline" onClick={() => setDraw(false)}>
                  Cancel
                </button>
                <button className="redBtn" onClick={() => setDraw(false)}>
                  Delete
                </button>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default User;
