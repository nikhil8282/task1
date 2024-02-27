import React, { useState } from "react";
import "./AppliedJobsList.css";
import check from "../../images/check.png";
import businessman from "../../images/Businessman.png";
import { Link } from "react-router-dom";
function Body({ selected }) {
  return (
    <div className={`a-j-container`}>
      <div div className="a-j-items">
        <div className="a-j-item-first">
          <div className="a-j-item-first-img">
            <img src={businessman} alt="" />
          </div>
          <div className="a-j-item-el">
            <span>Candidate Name</span>
            <span>Ankit Sharma</span>
          </div>
        </div>
        <div className="a-j-item-middle">
          <div className="a-j-item-el">
            <span>Experience req</span>
            <span>Intern</span>
          </div>
          <div className="a-j-item-el">
            <span>Date of joining</span>
            <span>25/01/2024</span>
          </div>
        </div>
        <div className="a-j-item-last">
          {selected !== "AppliedJobs" && (
            <div className="comp-req">
              <button className="undo-btn">Undo</button>
              <div className="check-img">
                <img src={check} alt="" />
              </div>
            </div>
          )}
          <Link to="/appliedJob/view" style={{ textDecoration: "none" }}>
            <div className="a-item-View">view</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Body;
