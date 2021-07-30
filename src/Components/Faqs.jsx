import React, { useState } from "react";
import up from "../images/uppink.png";
import down from "../images/downgrey.png";
import "./FAQ.scss";
// import NewHeader from "../layout/NewHeader";
import Details from "../utils/Details";

const Faq1 = ({ data, title, id }) => {
  const [state, setState] = useState(false);
  return (
    <div
      onClick={() => setState(!state)}
      className={`faqBin${state ? " open" : ""}`}
    >
      <div className="question">
        <div className="id">{id}</div>.
        <div className="title">
        {" "}{title}{" "}
          {state ? <img src={up} alt="up" /> : <img src={down} alt="down" />}
        </div>
      </div>
      <div className="answer">{data}</div>
    </div>
  );
};

const Faqs = () => {
  return (
    <div className="faqs">
      <div className="container">
        {Details.map((item, index) => (
          <div key={index}>
            <Faq1 {...item} num={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
