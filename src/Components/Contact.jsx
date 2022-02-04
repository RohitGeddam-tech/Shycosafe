import React, { useState, useEffect } from "react";
import "./Contact.scss";
import line from "../images/Rect2.png";
import { getUtmSerializedString } from "../utils/common";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { Modal } from "@material-ui/core";

const defaultFormState = {
  fname: "",
  lname: "",
  mobile: "",
  email: "",
  text: "",
  city: "",
};

const Contact = ({ className = "" }) => {
  const [details, setDetails] = useState({ ...defaultFormState });
  const [error, setError] = useState({});
  const [btnloading, setBtnloading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const tempDetails = { ...details },
      tempError = { ...error };
    tempDetails[e.target.name] = e.target.value;
    tempError[e.target.name] = "";
    setDetails(tempDetails);
    setError(tempError);
  };

  const validateForm = () => {
    const tempError = { ...error };
    var fnameRegExp = /^[A-Za-z\s]+$/,
      lnameRegExp = /^[A-Za-z\s]+$/,
      emailRegExp = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/,
      phoneRegExp = /^[0-9]{10}$/;

    tempError.fname =
      (!details.fname && "The Firstname field is required.") ||
      (!fnameRegExp.test(details.fname) && "The Firstname field is invalid.");

    tempError.lname =
      (!details.lname && "The Lastname field is required.") ||
      (!lnameRegExp.test(details.lname) && "The Lastname field is invalid.");

    tempError.mobile =
      (!details.mobile && "The phone number field is required.") ||
      (!phoneRegExp.test(details.mobile) &&
        "The phone number field is invalid.");

    tempError.email =
      (!details.email && "The email field is required.") ||
      (!emailRegExp.test(details.email) && "The email field is invalid.");

    setError(tempError);
    return Object.values(tempError).some((val) => val);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({});
    const errorExist = validateForm();
    if (!errorExist) {
      const data = {
        // ...details,
        name: `${details.fname} ${details.lname}`,
        email: details.email,
        mobile: details.mobile,
        message: details.text,
        city: details.city,
        type: getUtmSerializedString(),
        // type:"Shycocan",
      };
      setBtnloading(true);
      // console.log(data);
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_PUBLIC_URL}contact-us`,
          data
        );
        // .then((res) => {
        if (res) {
          // console.log("response msg", res.data);
          setBtnloading(false);
          setSuccess(res.data.success);
        }
      } catch (err) {
        console.log(err);
        setBtnloading(false);
      }
    } 
    // else {
    //   console.log(error);
    // }
  };

  useEffect(() => {
    Aos.init({ duration: 500 });
  });

  // useEffect(async () => {
  //   const errorExist = validateForm();
  //   if (!errorExist) {
  //     const data = {
  //       // ...details,
  //       name: `${details.fname} ${details.lname}`,
  //       email: details.email,
  //       mobile: details.mobile,
  //       message: details.text,
  //       city: details.city,
  //       type: getUtmSerializedString(),
  //       // type:"Shycocan",
  //     };
  //     console.log(data);
  //     try {
  //       const res = await axios.post(
  //         `${process.env.REACT_APP_PUBLIC_URL}contact-us`,
  //         data
  //       );
  //       // .then((res) => {
  //       if (res) {
  //         console.log("response msg", res);
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   } else {
  //     console.log(error);
  //   }
  // }, [handleSubmit]);

  const [clicked, setClicked] = useState(false);

  className += ` textfield ${details.text ? "has-value" : ""}`;

  return (
    <div className="contact">
      <div className="container">
        <form className="modal" onSubmit={handleSubmit}>
          <div
            className="alignHeading"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <h1>
              Contact Us
              <img src={line} alt="line" />
            </h1>
            <p>
              For any product related enquires please feel free to get in touch
              with us
            </p>
          </div>
          <div
            className="boxShadow"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="inputFlex">
              <div className="text-input">
                <input
                  value={details.fname}
                  className="input"
                  name="fname"
                  onChange={handleChange}
                />
                <label htmlFor="fname" className="input-placeholder">
                  First name <span>*</span>
                </label>
                {error && error.fname ? (
                  <p className="error-text">{error.fname}</p>
                ) : null}
              </div>
              <div className="text-input">
                <input
                  value={details.lname}
                  className="input"
                  name="lname"
                  onChange={handleChange}
                />
                <label htmlFor="lname" className="input-placeholder">
                  Last name <span>*</span>
                </label>
                {error && error.lname ? (
                  <p className="error-text">{error.lname}</p>
                ) : null}
              </div>
            </div>
            <div className="text-input">
              <input
                className="input"
                value={details.email}
                name="email"
                onChange={handleChange}
              />
              <label htmlFor="email" className="input-placeholder">
                Email <span>*</span>
              </label>
            </div>
            {error && error.email ? (
              <p className="error-text">{error.email}</p>
            ) : null}
            <div className="text-input">
              <input
                value={details.mobile}
                type="number"
                className="input"
                name="mobile"
                onChange={handleChange}
                pattern="[0-9]{9}"
              />
              <label htmlFor="mobile" className="input-placeholder">
                Mobile No. <span>*</span>
              </label>
            </div>
            {error && error.mobile ? (
              <p className="error-text">{error.mobile}</p>
            ) : null}
            <div className="text-input">
              <input
                value={details.city}
                className="input"
                name="city"
                onChange={handleChange}
              />
              <label htmlFor="city" className="input-placeholder">
                City
              </label>
            </div>
            <div className="text-input">
              <textarea
                className={className}
                value={details.text}
                name="text"
                onChange={handleChange}
                onClick={() => setClicked(!clicked)}
              />
              <label htmlFor="message" className="input-placeholder">
                Write your message here*
              </label>
            </div>
            <div className="bottom">
              <button type="submit" className="redBtn" disabled={btnloading}>
                {btnloading ? `Sending...` : `GET A CALL BACK`}
              </button>
            </div>
          </div>
        </form>
      </div>
      <Modal
        className="modalThanks"
        open={success}
        onClose={() => {
          setSuccess(false);
        }}
      >
        <div className="box">
          <h1>Thank you</h1>
          <p>
            Thank you for your interest. Our team will get in touch with you
            soon.
          </p>
          <button
            className="redBtn"
            onClick={() => {
              setSuccess(false);
              setDetails({
                fname: "",
                lname: "",
                mobile: "",
                email: "",
                text: "",
                city: "",
              });
              window.location.href = "/#top";
            }}
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Contact;
