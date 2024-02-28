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
      <div className="a-v-exp_skill">
        <div className="a-v-exp">
          <div className="a-view-headings">Experience</div>
          <div className="a-v-exp-list">
            <div className="a-v-exp-item">
              <div className="circle-counter">
                <span>1</span>
              </div>
              <div className="exp-item-content">
                <span className="blue-time">02/03/19-13/05/23</span>
                <span className="bold-sub-head">
                  React Developer, [Delloite]
                </span>
                <ul className="exp-des">
                  <li>
                    Developed and maintained key features of the company's
                    flagship web application.
                  </li>
                  <li>
                    Collaborated with cross-functional teams to implement new
                    features and enhancements.
                  </li>
                  <li>
                    Conducted code reviews and provided mentorship to junior
                    developers.
                  </li>
                </ul>
              </div>
            </div>
            <div className="a-v-exp-item">
              <div className="circle-counter">
                <span>2</span>
              </div>
              <div className="exp-item-content">
                <span className="blue-time">02/03/19-13/05/23</span>
                <span className="bold-sub-head">
                  Frontend Developer, [Google]
                </span>
                <ul className="exp-des">
                  <li>
                    Contributed to the design and implementation of responsive
                    user interfaces.
                  </li>
                  <li>
                    Worked closely with UI/UX designers to bring design concepts
                    to life.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="a-v-skill">
          <div className="a-view-headings">Skill</div>
          <div className="a-v-skill-container">
            <span className="a-v-skill-item">ReactJs</span>
            <span className="a-v-skill-item">Redux</span>
            <span className="a-v-skill-item">Responsive Design</span>
            <span className="a-v-skill-item">Git</span>
            <span className="a-v-skill-item">HTML5 & CSS3</span>
          </div>
        </div>
      </div>
      <div className="a-v-edu">
        <div className="a-view-buttons">
          <button>Shortlist</button>
          <button>Reject</button>
        </div>
        <div className="a-view-headings">Education</div>
        <div className="a-v-edu-container">
          <div className="a-v-exp-item">
            <div className="circle-counter">
              <span>1</span>
            </div>
            <div className="exp-item-content">
              <span className="blue-time">University Name</span>
              <span className="bold-sub-head">M.Tech</span>
            </div>
          </div>
          <div className="a-v-exp-item">
            <div className="circle-counter">
              <span>2</span>
            </div>
            <div className="exp-item-content">
              <span className="blue-time">University Name </span>
              <span className="bold-sub-head">B.Tech</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
