import React, { useState } from "react";
import "./JobDescription.css";
import person from "../../images/person2.png";
function Body() {
  return (
    <div className="j-des-container">
      <div className="j-des-time">22nd Jan 2024 by Krinvitech</div>
      <div className="j-des-role">Reack Developer</div>
      <div className="j-des-mainBody">
        <div className="j-des-left">
          <div className="j-des-profile">
            <div className="j-des-profile-img">
              <img src={person} alt="" />
            </div>
            <span>Krivi Tech</span>
          </div>
          <div className="j-des-left-item">
            <span>Salary</span>
            <span>Experience</span>
          </div>
          <div className="j-des-left-item">
            <span>Experience</span>
            <span>Fresher</span>
          </div>
          <div className="j-des-left-item">
            <span>Job Type</span>
            <span>Full time</span>
          </div>
          <div className="j-des-left-item">
            <span>Date</span>
            <span>22 Jan 2024</span>
          </div>
          <div className="j-des-left-item">
            <span>Location</span>
            <span>Remote</span>
          </div>
        </div>
        <div className="j-des-right">
          <div className="j-des-right-item">
            <span className="j-des-headings">Overview</span>
            <p>
              Exciting opportunity for a skilled React Developer to join our
              team at [Company Name]. You'll play a key role in creating dynamic
              and responsive user interfaces, contributing to the success of our
              projects.
            </p>
          </div>
          <div className="j-des-right-item">
            <span className="j-des-headings">Job Description</span>
            <p>
              As a React Developer, you will be responsible for designing and
              implementing user interfaces, ensuring the seamless integration of
              front-end components with back-end systems. Your role involves
              collaborating with cross-functional teams to deliver high-quality
              software solutions.
            </p>
          </div>
          <div className="j-des-right-item">
            <span className="j-des-headings">Responsibilities</span>
            <ul className="j-des-list">
              <li>
                Develop and implement user interface components using React.js
                principles.
              </li>
              <li>
                Collaborate with UX/UI designers to translate design wireframes
                into functional components.
              </li>
              <li>
                Optimize components for maximum performance across various
                web-capable devices and browsers.
              </li>
              <li>
                Participate in code reviews and maintain code quality,
                performance, and organization.
              </li>
            </ul>
          </div>
          <div className="j-des-right-item">
            <span className="j-des-headings">Require Skills</span>
            <ul className="j-des-list">
              <li>Proficient in React.js and its core principles.</li>
              <li>
                Experience with popular React.js workflows (such as Redux).
              </li>
              <li>
                Familiarity with RESTful APIs and modern authorization
                mechanisms.
              </li>
              <li>Strong proficiency in JavaScript, HTML, CSS.</li>
              <li>
                Experience with common front-end development tools, build
                pipelines, and version control systems.
              </li>
            </ul>
          </div>
          <div className="j-des-right-item">
            <span className="j-des-headings">Benefits</span>
            <ul className="j-des-list">
              <li>Competitive salary package.</li>
              <li>Health insurance coverage.</li>
              <li>Flexible work hours.</li>
              <li>Professional development opportunities.</li>
              <li>Dynamic and collaborative work environment.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="j-des-buttons">
        <button>Shortlist</button>
        <button>Reject</button>
      </div>
    </div>
  );
}

export default Body;
