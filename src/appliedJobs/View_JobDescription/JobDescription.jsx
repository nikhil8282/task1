import React, { useState } from "react";
import "./JobDescription.css";
import businessman from "../../images/Businessman.png";
import { Link } from "react-router-dom";
function Body({ selected }) {
  const [openView, setOpenView] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <div className="j-c-container">
      <div div className="j-c-nav">
        <div className="j-c-nav-first">
          <div className="j-c-nav-first-img">
            <img src={businessman} alt="" />
          </div>
          <span>React Developer</span>
        </div>
        <div className="j-c-nav-second">
          <div className="j-c-nav-second-item">
            <span>Experience req</span>
            <span>Intern</span>
          </div>
          <div className="j-c-nav-second-item">
            <span>Date of joining</span>
            <span>25/04/2024</span>
          </div>
          <div className="j-c-nav-second-item">
            <span>No of Positions</span>
            <span>Intern</span>
          </div>
        </div>
      </div>
      <div className="j-c-main">
        <div className="j-c-main-first">
          <span>Budget</span>
          <span>$200</span>
        </div>
        <div className="j-c-main-second">
          <div className="j-c-main-des">Description</div>
          <div className="j-c-main-second-contenent">
            <div className="j-c-main-contenent-item">
              <div className="content-heading">
                1. Position:Chief Technology Officer (CTO)
              </div>
              <div className="contenent-points">
                <span>- Lead our tech innovation and development.</span>
              </div>
            </div>
            <div className="j-c-main-contenent-item">
              <div className="content-heading">2. Responsibilities:</div>
              <div className="contenent-points">
                <span>- Shape and implement the company's tech roadmap.</span>
                <span>
                  - Drive product development and ensure high-quality standards.
                </span>
                <span>
                  - Manage the tech team, fostering a culture of collaboration
                  and innovation.
                </span>
              </div>
            </div>
            <div className="j-c-main-contenent-item">
              <div className="content-heading">3.Qualifications:</div>
              <div className="contenent-points">
                <span> - Proven CTO or executive leadership experience.</span>
                <span>- Strong tech background and strategic mindset.</span>
                <span>- Excellent communication and leadership skills.</span>
              </div>
            </div>
            <div className="j-c-main-contenent-item">
              <div className="content-heading">4. Benefits:</div>
              <div className="contenent-points">
                <span>- Competitive salary and benefits package.</span>
                <span>- Opportunity to drive tech innovation.</span>
                <span>- Collaborative and dynamic work environment.</span>
              </div>
            </div>
            <div className="j-c-main-contenent-item">
              <div className="content-heading">
                5. How to Apply:  
              </div>
              <div className="contenent-points">
                <span>- Submit your resume and cover letter.</span>
                <span>
                -
                Showcase your tech leadership experience.
                </span>
                <span>
                - Join us in shaping
                the future through innovation!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Body;
