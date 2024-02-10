import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "./User.scss";
import { Modal } from "@material-ui/core";
import clear from "../images/clear.png";
import edit from "../images/delete.png";
import Settings from "./Settings";
import { Icon } from "semantic-ui-react";
import axios from "axios";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const User = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [searched, setSearched] = useState("");
  const [array, setArray] = useState([]);
  const [popup, setPopup] = useState({});
  // const [error, setError] = useState({});
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mail, setMail] = useState("");
  const [msg, setMsg] = useState("");
  const [num, setNum] = useState(0);
  const [FnameInvalid, setFnameInvalid] = useState(false);
  const [LnameInvalid, setLnameInvalid] = useState(false);
  const [mailInvalid, setMailInvalid] = useState(false);
  const [right, setRight] = useState(false);
  const [valid, setValid] = useState(false);
  const [wrong, setWrong] = useState(false);
  const [draw, setDraw] = useState(false);
  const [del, setDel] = useState(false);
  const [error, setError] = useState({});
  const [alertState, setAlertState] = useState({
    open: false,
    message: "",
    type: "success",
  });

  // const handleSearch = (e) => {
  //   setSearch(e.target.value);
  // };

  // React.useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setSearched(search);
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, [search]);

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
        setMsg("");
        break;
      default:
        break;
    }
    setError({});
  };

  const fetchData = async () => {
    if (
      localStorage.getItem("role") === null ||
      localStorage.getItem("role") === "assistant_admin"
    ) {
      window.location.href = "/#top";
    }

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
        .get(
          `${process.env.REACT_APP_PUBLIC_URL}users${
            searched !== "" ? `?search=${searched}` : ""
          }`,
          {
            headers: headers,
          }
        )
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
          // console.log(err.message);
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
            setError(error);
          } else {
            setAlertState({ open: true, message, type: "error" });
          }
        });
    }
  };

  React.useEffect(() => {
    if (array.length === 0) {
      fetchData();
    }
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [searched]);

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
          setRight(false);
          setOpen(false);
          setFname("");
          setLname("");
          setMail("");
          setMsg("");
          setFnameInvalid(false);
          setLnameInvalid(false);
          setMailInvalid(false);
          setPopup({});
          window.location.reload();
        }
      } catch (err) {
        setRight(false);
        // if (err.request) {
        //   // The request was made but no response was received
        //   const errorData = JSON.parse(err.request.response);
        //   // console.log(errorData.message);
        //   setMsg(errorData.message);
        // }
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
          setError(error);
        } else {
          setAlertState({ open: true, message, type: "error" });
        }
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !(FnameInvalid && LnameInvalid && mailInvalid) &&
      fname !== "" &&
      lname !== "" &&
      mail !== ""
    ) {
      setRight(true);
      setPopup({
        first_name: fname,
        last_name: lname,
        email: mail,
      });
      setValid(false);
      // postData();
      setWrong(true);
    } else {
      setRight(false);
      setValid(true);
      // console.log("error submit: ", error);
    }
  };

  React.useEffect(() => {
    if (right) {
      postData();
    }
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
        // console.log(err);
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
          setError(error);
        } else {
          setAlertState({ open: true, message, type: "error" });
        }
      }
    }
  };

  React.useEffect(() => {
    if (del) {
      delData();
    }
  }, [del]);

  React.useEffect(() => {
    if (search === "") {
      setSearched("");
    }
  }, [search]);

  const handleAlertClose = () => {
    setAlertState({ open: false, message: "", type: "success" });
  };

  return (
    <>
      <Sidebar />
      <div className="userMain">
        <Settings />
        <div className="contain">
          <h1>User Manangement</h1>
          <div className="Navigation">
            <div className="links">
              <form
                className="searchBox"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSearched(search);
                }}
              >
                <div className="text-input">
                  <input
                    value={search}
                    className="input"
                    name="search"
                    onChange={(e) => setSearch(e.target.value)}
                    pattern="^([A-Za-z ,.'`-]{0,})$"
                    type="text"
                    // required
                  />
                  <label htmlFor="search" className="input-placeholder">
                    Search by Name
                  </label>
                  <button type="submit" disabled={search !== "" ? false : true}>
                    <Icon name="search" />
                  </button>
                </div>
              </form>
            </div>
            <button className="redBtn" onClick={() => setOpen(true)}>
              <Icon name="add" /> New Asst. Admin
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
              {array.length === 0 ? (
                <tr className="empty">
                  <td>Records not found.</td>
                </tr>
              ) : null}
              {array.map((doc, i) => (
                <tr key={i}>
                  <td>{`${doc.first_name} ${doc.last_name}`}</td>
                  <td>{doc.email}</td>
                  <td>{doc.role.split("_").join(" ")}</td>
                  <td className={`${doc.deletable ? "point" : ""}`}>
                    {doc.deletable ? (
                      <>
                        <img
                          src={edit}
                          alt="delete"
                          onClick={() => {
                            setDraw(true);
                            setNum(doc.id);
                          }}
                        />
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
              setFname("");
              setLname("");
              setMail("");
              setMsg("");
              setFnameInvalid(false);
              setLnameInvalid(false);
              setMailInvalid(false);
              setPopup({});
              setError({});
            }}
          >
            <div className="box">
              <div className="head">
                <div className="heading">
                  <h1>Add New Asst. Admin</h1>
                  <p>Please fill in the details. </p>
                </div>
                <img
                  className="img"
                  src={clear}
                  alt="cancel"
                  onClick={() => {
                    setOpen(false);
                    setFname("");
                    setLname("");
                    setMail("");
                    setMsg("");
                    setFnameInvalid(false);
                    setLnameInvalid(false);
                    setMailInvalid(false);
                    setPopup({});
                    setError({});
                  }}
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
                        pattern="^(?! )[A-Za-z ]*(?<! )$"
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
                        pattern="^(?! )[A-Za-z ]*(?<! )$"
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
                      pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"
                      type="email"
                      required
                    />
                    <label htmlFor="mail" className="input-placeholder">
                      Email
                    </label>
                  </div>
                  {mailInvalid && msg === "" ? (
                    <p className="error-text">PLEASE PROVIDE A VALID EMAIL</p>
                  ) : null}
                  {error.email ? (
                    <p className="error-text">PLEASE PROVIDE A VALID EMAIL</p>
                  ) : null}
                </div>
                {/* <i>
                  Note: ‘Set Password’ link will be sent to entered email
                  address.
                </i> */}
                <div className="btnGrp">
                  <button
                    className="noOutline"
                    onClick={() => {
                      setOpen(false);
                      setFname("");
                      setLname("");
                      setMail("");
                      setMsg("");
                      setFnameInvalid(false);
                      setLnameInvalid(false);
                      setMailInvalid(false);
                      setPopup({});
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    disabled={
                      !(FnameInvalid || LnameInvalid || mailInvalid) &&
                      fname !== "" &&
                      mail !== "" &&
                      lname !== ""
                        ? false
                        : true
                    }
                    className="redBtn"
                    type="submit"
                  >
                    Add
                  </button>
                </div>
                {valid ? (
                  <p className="error-text">PLEASE PROVIDE A VALID DATA.</p>
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
      </div>
    </>
  );
};

export default User;
