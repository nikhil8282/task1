import React, { useState } from "react";
import "./CandidateDetails.css";
import person from "../../images/person.png";
import email from "../../images/Email.png";
import { Link } from "react-router-dom";
function Body({ selected }) {
  const [openView, setOpenView] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <div className="a-view-container">
      <div div className="a-view-container-top">
        <div className="a-v-top-first">
          <div className="a-v-top-first-img">
            <img src={person} alt="" />
          </div>
          <div className="a-v-top-elements">
            <span>Name</span>
            <span>Ankit Sharma</span>
          </div>
        </div>
        <div className="a-v-top-elements">
          <span>Application date</span>
          <span>25/01/2024</span>
        </div>
        <div className="a-v-top-last">
          <button>Position-React Developer</button>
          <button>Fresher</button>
          <button>
            <img src={email} alt="" /> ankitsharma@gmail.com
          </button>
        </div>
      </div>
      <div className="a-v-bio">
        <div className="a-view-headings">Bio</div>
        <p>
          As . Experienced React Developer skilled in crafting dynamic user
          interfaces. Proficient in ReactJS, JavaScript, Redux, and responsive
          design. Adept at collaborating with cross-functional teams to deliver
          high-quality web applications. Holds a Bachelor's degree in Computer
          Science.
        </p>
      </div>
      <div className="a-view-exp_skill">
        <div className="a-view-exp"></div>
        <div className="a-view-skill"></div>
      </div>
      <div className="a-view-buttons">
        <button></button>
        <button></button>
      </div>
      <div className="a-view-edu">
        <div className="a-view-headings"></div>
      </div>
    </div>
  );
}

export default Body;
