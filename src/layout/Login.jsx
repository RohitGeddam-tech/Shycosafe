import React, { useEffect, useState } from "react";
// import Sign from "./Sign";
import account from "../images/favicon.png";
// import profile from "../image/profile.png";
import { Snackbar } from "@material-ui/core";
// import clear from "../images/clear.png";
import "semantic-ui-css/semantic.min.css";
// import { NavHashLink } from "react-router-hash-link";
// import useWindowSize from "../utils/useWindowSize";
import axios from "axios";
import { Alert } from "@material-ui/lab";
import NewHeader from "./NewHeader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [code, setCode] = useState("");
  const [codeInvalid, setCodeInvalid] = useState(false);
  const [success, setSuccess] = useState(false);
  const [validity, setValidity] = useState(false);
  const [valid, setValid] = useState(false);
  const [right, setRight] = useState(false);
  const [error, setError] = useState({});
  const [btnloading, setBtnloading] = useState(false);
  const [alertState, setAlertState] = useState({
    open: false,
    message: "",
    type: "success",
  });

  const otpApi = async () => {
    const form = {
      type: "login",
      email: email,
    };
    // console.log(form);
    if (validity) {
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_PUBLIC_URL}send-otp`,
          form
        );
        // .then((res) => {
        if (res) {
          //   console.log("response msg", res);
          setSuccess(res.data.success);
          //   console.log(success);
          setBtnloading(false);
          const { message = "Otp sent successfully" } = res.data;
          setAlertState({ open: true, message, type: "success" });
          // }
        }
      } catch (err) {
        console.log(err);
        const {
          message = "Sorry! We are unable to process your request.",
          status_code,
          errors = {},
        } = (err.response && err.response.data) || {};

        setSuccess(false);
        // console.log(success);

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

  const loginApi = async () => {
    const form = {
      email: email,
      password: code,
    };
    if (valid) {
      console.log(form);
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_PUBLIC_URL}login`,
          form
        );
        if (res) {
          // console.log("response msg", res.data);
          localStorage.setItem("accessToken", res.data.access_token);
          localStorage.setItem("refresh-token", res.data.refresh_token);
          //   setLogin(true);
          setRight(true);
          console.log(code, res);
          sessionStorage.setItem("logged", true);
          sessionStorage.setItem("mailed", JSON.stringify(email));
          //   window.location.reload();
        }
      } catch (err) {
        console.log(err);
        const {
          message = "Sorry! We are unable to process your request.",
          status_code,
          errors = {},
        } = (err.response && err.response.data) || {};

        setSuccess(false);
        // console.log(success);

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

  useEffect(() => {
    if (localStorage.getItem("accessToken") !== null) {
      setRight(true);
    }
  }, []);

  useEffect(() => {
    if (right) {
      const tokenData = localStorage.getItem("accessToken");
      const token = JSON.stringify(tokenData);
      //   console.log(token.slice(1, -1));
      const headers = {
        Authorization: `Bearer ${token.slice(1, -1)}`,
      };
      //   console.log(headers);
      // if (right) {
      axios
        .get(`${process.env.REACT_APP_PUBLIC_URL}user-profile`, {
          headers: headers,
        })
        .then((res) => {
          if (res) {
            const info = res.data.data;
            // console.log("response user profile msg", info);
            localStorage.setItem("email", info.email);
            // localStorage.setItem("info", JSON.stringify(info));
            localStorage.setItem(
              "name",
              `${info.first_name} ${info.last_name}`
            );
            // localStorage.setItem("mobile", info.mobile);
            localStorage.setItem("role", info.role);
            if (info.role === "admin") {
              window.location.href = "/leads";
            }
            setSuccess(res.data.success);
            // console.log(success);
          }
        })
        .catch((err) => {
          console.warn(err);
        });
      // }
    }
  }, [right]);

  const otpClick = async () => {
    if (!emailInvalid && email !== "") {
      //   console.log("email empty", email !== "");
      //   console.log("email invalid", !emailInvalid);
      setValidity(true);
      setBtnloading(true);
    }
    otpApi();
  };

  useEffect(async () => {
    otpApi();
  }, [setValidity, validity]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!(codeInvalid && emailInvalid)) {
      setValid(true);
    }
    loginApi();
  };
  useEffect(async () => {
    loginApi();
  }, [setValid, valid]);

  const handleAlertClose = () => {
    setAlertState({ open: false, message: "", type: "success" });
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setTimer(false);
      }, 30000);
      return () => clearTimeout(timer);
    }
  }, [setSuccess, success]);

  const [counter, setCounter] = React.useState(30);
  const [timer, setTimer] = useState(true);
  useEffect(() => {
    if (success) {
      const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      return () => clearInterval(timer);
    }
    // console.log(counter);
  }, [counter, setSuccess, success]);

  return (
    <>
      <NewHeader />
      <div className="login">
        <div className="container">
          <img src={account} alt="logo" />
          <form action="post" className="loginForm" onSubmit={handleSubmit}>
            <div className="otp">
              <div className="textInput">
                <div className="text-input">
                  <input
                    className="input"
                    value={email}
                    name="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailInvalid(!e.target.validity.valid);
                    }}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"
                    type="email"
                    required
                  />
                  <label htmlFor="email" className="input-placeholder">
                    Email<span>*</span>
                  </label>
                </div>
                {emailInvalid ? (
                  <p className="error-text">Please provide a valid email Id</p>
                ) : null}
              </div>
              {success ? (
                <button
                  className={`redBtn resend`}
                  type="button"
                  onClick={otpClick}
                  disabled={timer}
                >
                  {counter === 0 ? "Re-send OTP" : `Re-send OTP(${counter})`}
                </button>
              ) : (
                <button
                  className={`redBtn`}
                  type="button"
                  // onClick={() => setInvalid(emailInvalid)}
                  onClick={otpClick}
                  disabled={btnloading}
                >
                  {btnloading ? `Sending...`: `Send OTP` }
                  {/* Send OTP */}
                </button>
              )}
            </div>
            {success ? (
              <div className="otp">
                <div className="textInput">
                  <div className="text-input">
                    <input
                      value={code}
                      type="number"
                      className="input"
                      name="code"
                      onChange={(e) => {
                        setCode(e.target.value);
                        setCodeInvalid(!e.target.validity.valid);
                      }}
                      pattern="[0-9]{6}"
                      required
                    />
                    <label htmlFor="code" className="input-placeholder">
                      Enter OTP<span>*</span>
                    </label>
                  </div>
                  {codeInvalid ? (
                    <p className="error-text">
                      The code provided is not valid.
                    </p>
                  ) : null}
                </div>
                <button type="submit" className="redBtn">
                  Login
                </button>
              </div>
            ) : null}
          </form>
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

export default Login;
