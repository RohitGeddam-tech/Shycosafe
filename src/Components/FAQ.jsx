import React, { useState } from "react";
import up from "../images/uppink.png";
import down from "../images/downgrey.png";
import "./FAQ.scss";
import NewHeader from "../layout/NewHeader";

const Details = [
  {
    title: "Who has invented the Shycocan  device?",
    data: "Shycocan has been invented by Dr. Rajah Vijaykumar, a prolific Indian Scientist with over 15 multi- disciplinary patents. He is the inventor of Cytotron, a device for degenerative and regenerative tissue engineering which is currently approved for two medical applications, firstly to stop the growth of cancer cells in a tumor, and secondly to repair & rebuild the skeletal tissue.Some of his other inventions are:◦ Focused Nano-Permeabilization (FORN) technology etc. for targeted, precise cancer drug delivery.◦ HAEMOSEIS-256, a non-invasive cardiovascular diagnostic device that provides a comprehensive assessment (3D Cartography with 3D Vasculography) of cardiopulmonary and renal physiology of an individual◦ SPARSE™ technology for fuel enrichment and its application in renewable energy production◦ Fluid Ignition Engine (FIT), the TMD reactor for high intensity mega sonic break-down of long chain hydrocarbons.◦ Transcutaneous Thermo electroporic Omni-molecular drug delivery systemsHe has had many publications in reputed medical and engineering journals. He is the author of the bookCytonics - a mystery of the living cell",
  },
  {
    title:
      "How long did it take to design the Shycocan device and when was it built?",
    data: "The Shycocan device was built in early 2018, nearly two years prior to the CORONAVIRUS pandemic. While working for over five years on another patent, Dr. Kumar developed a highly specialized alloy that produced Photons in 2016. The trigger of building the device was a Bird Flu pandemic that resulted in many poultry farmers going bankrupt at the end of 2017. The Bird Flu virus belongs to the Influenza family; hence these devices were installed at Dr. Kumar’s campus to test their efficacy on stopping the transmission of the virus. It was observed at the end of 2018 that there was a reduction of ninety percent in the incidence of seasonal flu’s amongst employees over the previous two years. This device was then tested post the CORONAVIRUS pandemic in accredited laboratories for safety and efficacy. It was seen that it disabled the CORONAVIRUS and Influenza viruses by 99.9% in closed spaces as per the result. CORONAVIRUS has a similar Positive-Sense S-protein structure to the Bird Flu and Seasonal Flu virus. The device was named Scalene Hypercharge Corona Canon “Shycocan” post the pandemic. Shycocan is the enterprise version of the Shycocan device.",
  },
  {
    title:
      "What are the test conducted and certifications available for Shycocan?",
    data: "Shycocan is a certified European Union CE Class-I product and is being marketed under the “Enforcement Discretion Guidance” based on the US FDA’s guidance during the CORONAVIRUS Pandemic/ Public Health Emergency. It has passed all safety tests related to these certifications for household appliances, emission, disturbances, laboratory use, Ozone production amongst others. Shycocan attenuates 99.9% of the CORONAVIRUS virus from transmission in closed spaces as per tests conducted by a leading virology lab in the world.",
  },
  {
    title: "How does Shycocan work?",
    data: "The Coronavirus is a Positive-Sense virus, whose S-Protein attaches to the human cell through the ACE2 receptors due to the opposite charge. All human cells have a negative potential (about -40mV to -70mV). The virus infuses its RNA into the cells and starts to multiply, infecting the body. Shycocan continuously emits photons that form an electron cloud in an indoor space. The negative charged electrons neutralize the positive charge of the S-Protein of Coronavirus, thereby disabling it from infecting a person.",
  },
  {
    title: "Does Shycocan kill the Corona Virus?",
    data: "Shycocan does not kill the Corona virus. The device attenuates the virus due to the unique action of neutralizing its charge on the Spike Protein (S-Protein) of the virus.",
  },
  {
    title: "Does Shycocan kill the Corona Virus?",
    data: "Shycocan does not kill the Corona virus. The device attenuates the virus due to the unique action of neutralizing its charge on the Spike Protein (S-Protein) of the virus.",
  },
  {
    title: "Does Shycocan kill the Corona Virus?",
    data: "Shycocan does not kill the Corona virus. The device attenuates the virus due to the unique action of neutralizing its charge on the Spike Protein (S-Protein) of the virus.",
  },
  {
    title: "Does Shycocan kill the Corona Virus?",
    data: "Shycocan does not kill the Corona virus. The device attenuates the virus due to the unique action of neutralizing its charge on the Spike Protein (S-Protein) of the virus.",
  },
  {
    title: "Does Shycocan kill the Corona Virus?",
    data: "Shycocan does not kill the Corona virus. The device attenuates the virus due to the unique action of neutralizing its charge on the Spike Protein (S-Protein) of the virus.",
  },
  {
    title: "Does Shycocan kill the Corona Virus?",
    data: "Shycocan does not kill the Corona virus. The device attenuates the virus due to the unique action of neutralizing its charge on the Spike Protein (S-Protein) of the virus.",
  },
  {
    title: "Does Shycocan kill the Corona Virus?",
    data: "Shycocan does not kill the Corona virus. The device attenuates the virus due to the unique action of neutralizing its charge on the Spike Protein (S-Protein) of the virus.",
  },
  {
    title: "Does Shycocan kill the Corona Virus?",
    data: "Shycocan does not kill the Corona virus. The device attenuates the virus due to the unique action of neutralizing its charge on the Spike Protein (S-Protein) of the virus.",
  },
  {
    title: "Does Shycocan kill the Corona Virus?",
    data: "Shycocan does not kill the Corona virus. The device attenuates the virus due to the unique action of neutralizing its charge on the Spike Protein (S-Protein) of the virus.",
  },
  {
    title: "Does Shycocan kill the Corona Virus?",
    data: "Shycocan does not kill the Corona virus. The device attenuates the virus due to the unique action of neutralizing its charge on the Spike Protein (S-Protein) of the virus.",
  },
  {
    title: "Does Shycocan kill the Corona Virus?",
    data: "Shycocan does not kill the Corona virus. The device attenuates the virus due to the unique action of neutralizing its charge on the Spike Protein (S-Protein) of the virus.",
  },
];

const Faq1 = ({ data, title, num }) => {
  const [state, setState] = useState(false);
  const color = state ? "pink" : "normal";
  return (
    <div onClick={() => setState(!state)} className="faqBox">
      <h1 className={color}>
        {num + 1}. {title}{" "}
        {state ? <img src={up} alt="up" /> : <img src={down} alt="down" />}
      </h1>
      {state ? <p>{data}</p> : null}
    </div>
  );
};

const FAQ = () => {
  return (
    <>
      <NewHeader />
      <div className="faq">
        <div className="container">
          <h1>FAQs</h1>
          {Details.map((item, index) => (
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
