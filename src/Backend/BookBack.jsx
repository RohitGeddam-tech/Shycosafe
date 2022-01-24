import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "./Backend.scss";
import { Modal } from "@material-ui/core";
import clear from "../images/clear.png";
// import create from "../images/create.png";
// import check from "../images/check.png";
// import dots from "../images/dots.png";
// import below from "../images/down.png";
// import black from "../images/black.png";
import { Icon } from "semantic-ui-react";
import green from "../images/green.png";
import circleBlack from "../images/circle_black.png";
import circleGrey from "../images/circle_grey.png";
import orange from "../images/orange.png";
// import DateFnsUtils from "@date-io/date-fns";
// import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import moment from "moment";
import { Dropdown } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";
// import { NavHashLink } from "react-router-hash-link";
import Settings from "./Settings";
import NewMember from "./NewMember";
import ReactPaginate from "react-paginate";
// import { addDays } from "date-fns";
// import { useState } from "react";
// import { DateRangePicker } from "react-date-range";
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";
import "bootstrap-daterangepicker/daterangepicker.css";
// import DateRangePicker from "react-bootstrap-daterangepicker";
// import 'bootstrap/dist/css/bootstrap.css';
import loadable from "@loadable/component";
const DateRangePicker = loadable(() =>
  import("react-bootstrap-daterangepicker")
);
// const moment = loadable(() => import("moment"));

const statusData = [
  {
    key: "1",
    text: "pending",
    value: "pending",
    image: { avatar: true, src: orange },
  },
  {
    key: "2",
    text: "ongoing",
    value: "ongoing",
    image: { avatar: true, src: green },
  },
  {
    key: "3",
    text: "closed",
    value: "closed",
    image: { avatar: true, src: circleGrey },
  },
  {
    key: "4",
    text: "unable to contact",
    value: "unable to contact",
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
  const [searched, setSearched] = useState("");
  const [sel, setSel] = useState("");
  const [select, setSelect] = useState("");
  const [selected, setSelected] = useState("");
  const [array, setArray] = useState([]);
  const [form, setForm] = useState([]);
  const [popup, setPopup] = useState([]);
  const [error, setError] = useState({});
  // const [date1, setDate1] = useState(new Date());
  // const [date2, setDate2] = useState(new Date());
  const [num, setNum] = useState(false);
  const [right, setRight] = useState(false);
  const [draw, setDraw] = useState(false);
  const [text, setText] = useState("");
  const [clicked, setClicked] = useState(false);
  const [current, setCurrent] = useState(1);
  const [total, setTotal] = useState(0);
  const [state, setState] = useState({ start: moment(), end: moment() });
  const [filter, setFilter] = useState({
    date_from: moment().subtract(1, "year").format("YYYY-MM-DD"),
    date_to: moment().format("YYYY-MM-DD"),
  });
  // const [page, setPage] = useState(0);
  // const [total, setTotal] = useState(0);
  // const [state, setState] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: addDays(new Date(), 7),
  //     key: "selection",
  //   },
  // ]);

  const handleSearch = (e) => {
    // console.log("e value", e);
    setSearch(e.target.value);
  };

  // React.useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setSearched(search);
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, [search]);

  const handleSelect = (e, room) => {
    setSel(e.target.innerText);
  };

  const handleFilter = (name) => {
    setSelected(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sel !== "" && sel !== select && text !== "") {
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
    // console.log("onForm submit: ", popup);
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
          // console.log(res.data.data);
          // setStart(false);
          // console.log(popup);
          window.location.reload();
          // setForm({});
        }
      } catch (err) {
        // console.log(name);
        console.log(err);
      }
    }
  }, [handleSubmit]);

  const fetchData = async () => {
    // console.log(
    //   `moment newdate: ${moment(new Date())
    //     .subtract(1, "days")
    //     .format("YYYY-MM-DD")} && filter todate: ${filter.date_to}
        
    //     extra:- ${filter.date_from ? `&date_from=${filter.date_from}` : ""}${
    //     filter.date_to && filter.date_to !== "Invalid date"
    //       ? `&date_to=${filter.date_to}`
    //       : ""
    //   }
      
    //   from date: ${moment(filter.date_from)
    //     .subtract(1, "days")
    //     .format("YYYY-MM-DD")} && ${moment(new Date())
    //     .subtract(1, "year")
    //     .format("YYYY-MM-DD")}`
    // );

    const apiUrl = `${
      selected !== "" || search !== "" || current > 0 ? "?" : ""
    }page=${current}${
      filter.date_from !==
        moment(new Date()).subtract(1, "year").format("YYYY-MM-DD") ||
      filter.date_to !== moment(new Date()).format("YYYY-MM-DD")
        ? `&date_from=${filter.date_from}&date_to=${filter.date_to}`
        : ``
    }${selected !== "" ? `&status=${selected}` : ""}${
      searched !== "" ? `&search=${searched}` : ""
    }`;

    const tokenData = localStorage.getItem("accessToken");
    const token = JSON.stringify(tokenData);
    const headers = {
      Authorization: `Bearer ${token.slice(1, -1)}`,
    };
    if (
      localStorage.getItem("role") !== null &&
      localStorage.getItem("role") === "admin"
    ) {
      axios
        .get(
          `${process.env.REACT_APP_PUBLIC_URL}leads${apiUrl.replace(
            /%20/g,
            ""
          )}`,
          {
            headers: headers,
          }
        )
        .then((res) => {
          if (res) {
            const info = res.data.data;
            // const inform = res.data;
            // console.log("response user profile msg", info);
            setArray([...info]);
            // console.log("array state: ", array);
            // console.log("page: ", res.data.meta);
            setCurrent(res.data.meta.pagination.current_page);
            setTotal(res.data.meta.pagination.total_pages);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [selected, searched, current, filter]);

  // const pageVisited = current * page;
  // const leadsArray = array.slice(pageVisited, pageVisited + page);

  const handleSettings = (room) => {
    setNum(room);
    array.forEach((members) => {
      if (members.id === room) {
        setForm({
          name: members.name,
          phone: members.mobile,
          mail: members.email,
          date: members.date,
          click: members.type,
          Attended: `${
            members.attended_by.length !== 0
              ? `${members.attended_by.first_name} ${members.attended_by.last_name}`
              : ""
          }`,
          status: members.status,
          city: members.city,
          msg: members.message,
        });
        setSel(members.status);
        setSelect(members.status);
        setText(members.note);
        setOpen(true);
      }
    });
  };

  const handleCallback = (start, end) => {
    setState({ start, end });
    setFilter({
      date_from: moment(start._d).format("YYYY-MM-DD"),
      date_to: moment(end._d).format("YYYY-MM-DD"),
    });
  };
  // console.log(`state: ${state.start} & ${state.end}, filter: ${filter.date_from} & ${filter.date_to}`);

  const ranges = {
    Today: [moment().toDate(), moment().toDate()],
    Yesterday: [
      moment().subtract(1, "days").toDate(),
      moment().subtract(1, "days").toDate(),
    ],
    "This Month": [
      moment().startOf("month").toDate(),
      moment().endOf("month").toDate(),
    ],
    "Last 7 Days": [moment().subtract(6, "days").toDate(), moment().toDate()],
    "Last 30 Days": [moment().subtract(29, "days").toDate(), moment().toDate()],
    "Last 6 Months": [
      moment().subtract(6, "months").toDate(),
      moment().toDate(),
    ],
    "Last 1 Year": [moment().subtract(1, "year").toDate(), moment().toDate()],
  };

  className += ` textfield ${text ? "has-value" : ""}`;

  const handlePageClick = (data) => {
    // console.log(data.selected);
    setCurrent(data.selected + 1);
  };

  const handleClear = () => {
    // console.log("hello");
    setSearched("");
    setSelected("");
    setSearch("");
    setFilter({
      date_from: moment().subtract(1, "year").format("YYYY-MM-DD"),
      date_to: moment().format("YYYY-MM-DD"),
    });
  };

  return (
    <>
      <Sidebar />
      <div className="bookMain">
        <Settings />
        <div className="contain">
          <h1>Leads Manangement</h1>
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
                    Search by Name, Email, Mobile No.
                  </label>
                  <button type="submit">
                    <Icon name="search" />
                  </button>
                </div>
              </form>
            </div>
            <button className="redBtn" onClick={() => setDraw(true)}>
              <Icon name="add" /> New Lead Entry
            </button>
          </div>
          <table className="mainData">
            <tbody>
              {selected !== "" ||
              search !== "" ||
              filter.date_from !==
                moment(new Date()).subtract(1, "year").format("YYYY-MM-DD") ||
              filter.date_to !== moment(new Date()).format("YYYY-MM-DD") ? (
                <button className="clear" onClick={handleClear}>
                  Clear all filters
                </button>
              ) : null}
              <tr>
                <th>
                  <div className="point">
                    <DateRangePicker
                      className="customDatePicker"
                      id="customDatePicker"
                      initialSettings={{
                        maxDate: new Date(),
                        startDate: moment().subtract(1, "year").toDate(),
                        endDate: moment().toDate(),
                        ranges: ranges,
                        autoUpdateInput: true,
                      }}
                      onCallback={handleCallback}
                    >
                      <div className="inner">
                        <span className="range">Date</span>
                        <Icon name="calendar alternate outline" />
                        {/* <label className="tabIcon">{CalendarFilter}</label> */}
                      </div>
                    </DateRangePicker>
                  </div>
                </th>
                <th>Name</th>
                <th>Mobile No.</th>
                <th>Email</th>
                <th>Source</th>
                <th>Attended by</th>
                <th className="statusFilter">
                  <p
                    className={
                      selected !== "" ||
                      search !== "" ||
                      filter.date_from !==
                        moment(new Date())
                          .subtract(1, "year")
                          .format("YYYY-MM-DD") ||
                      filter.date_to !== moment(new Date()).format("YYYY-MM-DD")
                        ? "statFil"
                        : ""
                    }
                  >
                    Status
                  </p>
                  <Dropdown
                    icon="filter"
                    className={`dots fill ${
                      selected !== "" ||
                      search !== "" ||
                      filter.date_from !==
                        moment(new Date())
                          .subtract(1, "year")
                          .format("YYYY-MM-DD") ||
                      filter.date_to !== moment(new Date()).format("YYYY-MM-DD")
                        ? "sl"
                        : ""
                    }`}
                  >
                    <Dropdown.Menu>
                      <Dropdown.Item
                        key={1}
                        text="Ongoing"
                        // value="View All Details"
                        image={green}
                        // onClick={() => setSelected("ongoing")}
                        onClick={() => handleFilter("ongoing")}
                      />
                      <Dropdown.Item
                        key={2}
                        text="Pending"
                        // value="View All Details"
                        image={orange}
                        // onClick={() => setSelected("pending")}
                        onClick={() => handleFilter("pending")}
                      />
                      <Dropdown.Item
                        key={3}
                        text="Closed"
                        // value="View All Details"
                        image={circleGrey}
                        // onClick={() => setSelected("closed")}
                        onClick={() => handleFilter("closed")}
                      />
                      <Dropdown.Item
                        key={4}
                        text="Unable to contact"
                        // value="View All Details"
                        image={circleBlack}
                        // onClick={() => setSelected("unable_to_contact")}
                        onClick={() => handleFilter("unable_to_contact")}
                      />
                    </Dropdown.Menu>
                  </Dropdown>
                </th>
              </tr>
              {array.map((doc, i) => (
                <tr key={i}>
                  <td>{moment(doc.date).format("DD MMM YYYY")}</td>
                  <td>{doc.name}</td>
                  <td>{doc.mobile}</td>
                  <td>{doc.email}</td>
                  <td>{doc.type}</td>
                  {doc.attended_by.length !== 0 ? (
                    <td>{`${doc.attended_by.first_name} ${doc.attended_by.last_name}`}</td>
                  ) : (
                    <td>--</td>
                  )}
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
                            doc.status === "unable to contact"
                              ? "black"
                              : "nill"
                          }
                        ></span>
                        <span
                          className={doc.status === "pending" ? "red" : "nill"}
                        ></span>
                        <span
                          className={doc.status === "closed" ? "blue" : "nill"}
                        ></span>
                        <span
                          className={
                            doc.status === "ongoing" ? "green" : "nill"
                          }
                        ></span>
                        {doc.status}
                      </p>
                      <Dropdown icon="ellipsis vertical" className="dots">
                        <Dropdown.Menu>
                          <Dropdown.Item
                            key={1}
                            text="View All Details"
                            value="View All Details"
                            onClick={() => handleSettings(doc.id)}
                          />
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="page">
            <ReactPaginate
              previousLabel="<<"
              nextLabel=">>"
              breakLabel="..."
              pageCount={total}
              marginPagesDisplayed={3}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName="ui pagination menu out"
              pageClassName="ui pagination menu in"
              pageLinkClassName="item"
              previousClassName="ui pagination menu in prev"
              previousLinkClassName="item"
              nextClassName="ui pagination menu in next"
              nextLinkClassName="item"
              breakClassName="ui pagination menu in"
              breakLinkClassName="item"
              activeLinkClassName="active"
            />
          </div>
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
                  {form.msg !== null ? (
                    <p className="value">{form.msg}</p>
                  ) : (
                    <p className="value">--</p>
                  )}
                </div>
                <div className="textData">
                  <p className="label">Status: </p>
                  <Status status={form.status} handleSelect={handleSelect} />
                </div>
                <div className="textData">
                  <p className="label">Attended by :</p>
                  {form.Attended !== "" ? (
                    <p className="value">{form.Attended}</p>
                  ) : (
                    <p className="value">--</p>
                  )}
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
                <button
                  className="redBtn"
                  disabled={text !== "" || sel !== select ? false : true}
                  type="submit"
                >
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
