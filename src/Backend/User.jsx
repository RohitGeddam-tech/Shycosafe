import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "./User.scss";
import { Modal } from "@material-ui/core";
import clear from "../images/clear.png";
import edit from "../images/delete.png";
import Settings from "./Settings";
import axios from "axios";

const User = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [array, setArray] = useState([]);
  const [popup, setPopup] = useState({});
  // const [error, setError] = useState({});
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mail, setMail] = useState("");
  const [num, setNum] = useState(0);
  const [FnameInvalid, setFnameInvalid] = useState(false);
  const [LnameInvalid, setLnameInvalid] = useState(false);
  const [mailInvalid, setMailInvalid] = useState(false);
  const [right, setRight] = useState(false);
  const [valid, setValid] = useState(false);
  const [draw, setDraw] = useState(false);
  const [del, setDel] = useState(false);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case "fname":
        setFname(e.target.value);
        setFnameInvalid(!e.target.validity.valid);
        break;
      case "lname":
        setLname(e.target.value);
        setLnameInvalid(!e.target.validity.valid);
        break;
      case "mail":
        setMail(e.target.value);
        setMailInvalid(!e.target.validity.valid);
        break;
      default:
        break;
    }
  };

  React.useEffect(() => {
    const fetchData = async () => {
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
          .get(`${process.env.REACT_APP_PUBLIC_URL}users`, {
            headers: headers,
          })
          .then((res) => {
            if (res) {
              const info = res.data.data;
              // console.log("response user profile msg", info);
              // console.log("file array state1: ", packed.length);
              setArray([...info]);
              // console.log("file array state2: ", packed.length);
              // console.log("array state: ", array);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    };
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (/\s/.test(fname)) {
      // console.log("error", fname);
      setFnameInvalid(true);
      // console.log(FnameInvalid);
    }
    if (!(FnameInvalid && LnameInvalid && mailInvalid)) {
      setRight(true);
      setPopup({
        first_name: fname,
        last_name: lname,
        email: mail,
      });
      setValid(false);
      setOpen(false);
    } else {
      setRight(false);
      setValid(true);
      // console.log("error submit: ", error);
    }
  };

  const postData = async () => {
    const tokenData = localStorage.getItem("accessToken");
    const token = JSON.stringify(tokenData);
    const headers = {
      Authorization: `Bearer ${token.slice(1, -1)}`,
    };
    if (right) {
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_PUBLIC_URL}users`,
          popup,
          {
            headers: headers,
          }
        );
        if (res) {
          // console.log(res.data.data);
          window.location.reload();
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  React.useEffect(() => {
    postData();
    // console.log("handlesubmit useeffect");
  }, [handleSubmit]);

  const delData = async () => {
    const tokenData = localStorage.getItem("accessToken");
    const token = JSON.stringify(tokenData);
    const headers = {
      Authorization: `Bearer ${token.slice(1, -1)}`,
    };
    if (del) {
      try {
        const res = await axios.delete(
          `${process.env.REACT_APP_PUBLIC_URL}users/${num}`,
          { headers: headers }
        );
        if (res) {
          setNum(0);
          setDel(false);
          window.location.reload();
          // setForm({});
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  React.useEffect(() => {
    delData();
  }, [del]);

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
            <tbody>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th></th>
              </tr>
              {array.map((doc, i) => (
                <tr key={i}>
                  <td>{`${doc.first_name} ${doc.last_name}`}</td>
                  <td>{doc.email}</td>
                  <td>{doc.role}</td>
                  <td
                    onClick={() => {
                      setDraw(true);
                      setNum(doc.id);
                    }}
                  >
                    {doc.deletable ? (
                      <>
                        <img src={edit} alt="delete" />
                        Delete
                      </>
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
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
                <div className="textInside">
                  <div className="textInput">
                    <div className="text-input">
                      <input
                        value={fname}
                        className="input"
                        name="fname"
                        pattern="^([A-Za-z ,.'`-]{2,30})$"
                        onChange={handleChange}
                        type="text"
                        required
                      />
                      <label htmlFor="fname" className="input-placeholder">
                        First Name
                      </label>
                    </div>
                    {FnameInvalid ? (
                      <p className="error-text">
                        PLEASE PROVIDE A VALID FIRST NAME
                      </p>
                    ) : null}
                  </div>
                  <div className="textInput">
                    <div className="text-input">
                      <input
                        value={lname}
                        className="input"
                        name="lname"
                        pattern="^([A-Za-z ,.'`-]{2,30})$"
                        onChange={handleChange}
                        type="text"
                        required
                      />
                      <label htmlFor="lname" className="input-placeholder">
                        Last Name
                      </label>
                    </div>
                    {LnameInvalid ? (
                      <p className="error-text">
                        PLEASE PROVIDE A VALID LAST NAME
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
                  </div>
                  {mailInvalid ? (
                    <p className="error-text">PLEASE PROVIDE A VALID EMAIL</p>
                  ) : null}
                </div>
                {/* <i>
                  Note: ‘Set Password’ link will be sent to entered email
                  address.
                </i> */}
                <div className="btnGrp">
                  <button className="noOutline" onClick={() => setOpen(false)}>
                    Cancel
                  </button>
                  <button className="redBtn" type="submit">
                    Add
                  </button>
                </div>
                {valid ? (
                  <p className="error-text">PLEASE PROVIDE A VALID EMAIL</p>
                ) : null}
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
                <button className="redBtn" onClick={() => setDel(true)}>
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
