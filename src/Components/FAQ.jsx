import React, { useState } from "react";
import up from "../images/uppink.png";
import down from "../images/downgrey.png";
import "./FAQ.scss";
import NewHeader from "../layout/NewHeader";
import Details from "../utils/Details";
// console.log(JSON.stringify(Details))

const Faq1 = ({ data, title, id }) => {
  const [state, setState] = useState(false);
  const color = state ? "pink" : "normal";
  // console.log(JSON.stringify(data))
  // const para = JSON.stringify(data)
  return (
    <div onClick={() => setState(!state)} className="faqBox">
      <h1 className={color}>
        {id}. {title}{" "}
        {state ? <img src={up} alt="up" /> : <img src={down} alt="down" />}
      </h1>
      {state ? <p>{data}</p> : null}
    </div>
  );
};

const FAQ = () => {
  const [one, setOne] = useState(false);
  const color = one ? "pink" : "normal";
  const disp = one ? "back" : "disp";
  const [two, setTwo] = useState(false);
  const color2 = two ? "pink" : "normal";
  const disp2 = two ? "back" : "disp";
  const [six, setSix] = useState(false);
  const color6 = six ? "pink" : "normal";
  const disp6 = six ? "back" : "disp";
  const [nine, setNine] = useState(false);
  const color9 = nine ? "pink" : "normal";
  const disp9 = nine ? "back" : "disp";
  return (
    <>
      <NewHeader />
      <div className="faq">
        <div className="container">
          <h1>FAQs</h1>
          <div onClick={() => setOne(!one)} className="faqBox">
            <h1 className={color}>
              1. Who has invented the Shycocan device?
              {one ? <img src={up} alt="up" /> : <img src={down} alt="down" />}
            </h1>
            <div className={disp}>
              Shycocan has been invented by Dr. Rajah Vijaykumar, a prolific
              Indian Scientist with over 15 multi- disciplinary patents. He is
              the inventor of Cytotron, a device for degenerative and
              regenerative tissue engineering which is currently approved for
              two medical applications, firstly to stop the growth of cancer
              cells in a tumor, and secondly to repair & rebuild the skeletal
              tissue. Some of his other inventions are:
              <ul>
                ◦ Focused Nano-Permeabilization (FORN) technology etc. for
                targeted, precise cancer drug delivery.{" "}
              </ul>
              <ul>
                ◦ HAEMOSEIS-256, a non-invasive cardiovascular diagnostic device
                that provides a comprehensive assessment (3D Cartography with 3D
                Vasculography) of cardiopulmonary and renal physiology of an
                individual{" "}
              </ul>
              <ul>
                ◦ SPARSE™ technology for fuel enrichment and its application in
                renewable energy production{" "}
              </ul>
              <ul>
                ◦ Fluid Ignition Engine (FIT), the TMD reactor for high
                intensity mega sonic break-down of long chain hydrocarbons.{" "}
              </ul>
              <ul>
                ◦ Transcutaneous Thermo electroporic Omni-molecular drug
                delivery systems{" "}
              </ul>
              He has had many publications in reputed medical and engineering
              journals. He is the author of the book “Cytonics - a mystery of
              the living cell”.
            </div>
          </div>
          <div onClick={() => setTwo(!two)} className="faqBox">
            <h1 className={color2}>
              2. How long did it take to design the Shycocan device and when was
              it built?
              {two ? <img src={up} alt="up" /> : <img src={down} alt="down" />}
            </h1>
            <div className={disp2}>
              The Shycocan device was built in early 2018, nearly two years
              prior to the CORONAVIRUS pandemic. While working for over five
              years on another patent, Dr. Kumar developed a highly specialized
              alloy that produced Photons in 2016. The trigger of building the
              device was a Bird Flu pandemic that resulted in many poultry
              farmers going bankrupt at the end of 2017. The Bird Flu virus
              belongs to the Influenza family; hence these devices were
              installed at Dr. Kumar’s campus to test their efficacy on stopping
              the transmission of the virus. It was observed at the end of 2018
              that there was a reduction of ninety percent in the incidence of
              seasonal flu’s amongst employees over the previous two years. This
              device was then tested post the CORONAVIRUS pandemic in accredited
              laboratories for safety and efficacy. It was seen that it disabled
              the CORONAVIRUS and Influenza viruses by 99.9% in closed spaces as
              per the result.
              <br />
              CORONAVIRUS has a similar Positive-Sense S-protein structure to
              the Bird Flu and Seasonal Flu virus. The device was named Scalene
              Hypercharge Corona Canon “Shycocan” post the pandemic. Shycocan is
              the enterprise version of the Shycocan device.
            </div>
          </div>
          {Details.slice(0, 13).map((item, index) => (
            <div key={index}>
              <Faq1 {...item} num={index} />
            </div>
          ))}
          <div onClick={() => setSix(!six)} className="faqBox">
            <h1 className={color6}>
              16. How do I know if my Shycocan is working effectively?
              {six ? <img src={up} alt="up" /> : <img src={down} alt="down" />}
            </h1>
            <div className={disp6}>
              There are multiple ways to find out if the Shycocan device is
              working.
              <ul>
                ◦ An indicator light in the front panel of the device shows it
                to be working.{" "}
              </ul>
              <ul>
                ◦ In case the device is not working an inbuilt alarm starts to
                hoot.{" "}
              </ul>
              <ul>
                ◦ Holding a CFL bulb or tube light in front to the device at a
                distance of 1-2 feet makes it flicker, indicating the emission
                of Photon mediated electrons.{" "}
              </ul>
              <ul>
                ◦ For more complex environments where multiple devices are
                installed, our trained professionals check the density of
                electrons using an oscilloscope. This service is available on
                request.{" "}
              </ul>
            </div>
          </div>
          {Details.slice(13, 15).map((item, index) => (
            <div key={index}>
              <Faq1 {...item} num={index} />
            </div>
          ))}
          <div onClick={() => setNine(!nine)} className="faqBox">
            <h1 className={color9}>
              19. Are there any side-effects of Shycocan on humans, other living
              beings, or the environment?
              {nine ? <img src={up} alt="up" /> : <img src={down} alt="down" />}
            </h1>
            <div className={disp9}>
              Shycocan does not have any side effects on humans, living
              organisms, plants, or the environment. All the relevant tests
              related to the environmental safety as prescribed by CE
              certification were carried out by UL (leading testing labs in the
              world), and it was determined that the device meets all safety
              standards.
              <br />
              Further, it does not generate any Ozone, which may damage the
              human lungs. Every Shycocan is tested for the absence of Ozone
              before dispatching from the manufacturing location.
            </div>
          </div>
          {Details.slice(15, 21).map((item, index) => (
            <div key={index}>
              <Faq1 {...item} num={index} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQ;
