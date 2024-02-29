import "./AppliedJob.css";
import React, { useState } from "react";
import png1 from "../../images/1.png";
import png2 from "../../images/2.png";
import png3 from "../../images/3.png";
import AdminNavbar from "../../components/admin_navbar/AdminNavbar";
import check from "../../images/check.png";
import businessman from "../../images/Businessman.png";
import { Link } from "react-router-dom";

function Main() {
  const [selected, setSelected] = useState("AppliedJobs");
  // const [selected, setSelected] = useState("Accepted");
  const handleChange = (v) => {
    if (v !== selected) setSelected(v);
  };

  return (
    <>
      <AdminNavbar />
      <div className="main">
        <div className="comon-header">
          <div
            className="c-h-item"
            style={{
              color: `${"AppliedJobs" === selected ? "#3583F6" : "#0F0F0F"}`,
            }}
            onClick={() => {
              handleChange("AppliedJobs");
            }}
          >
            <img src={png1} alt="" />
            <span className="sb">Applied Jobs</span>
          </div>
          <div
            className="c-h-item"
            style={{
              color: `${"Shortlisted" === selected ? "#3583F6" : "#0F0F0F"}`,
            }}
            onClick={() => {
              handleChange("Shortlisted");
            }}
          >
            <img src={png2} alt="" />
            <span className="sb">Shortlisted</span>
          </div>
          <div
            className="c-h-item"
            style={{
              color: `${"Rejected" === selected ? "#3583F6" : "#0F0F0F"}`,
            }}
            onClick={() => {
              handleChange("Rejected");
            }}
          >
            <img src={png3} alt="" />
            <span className="sb">Rejected</span>
          </div>
        </div>
        {selected === "AppliedJobs" && (
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
                <Link to="/appliedJob/view" style={{ textDecoration: "none" }}>
                  <div className="a-item-View">view</div>
                </Link>
              </div>
            </div>
          </div>
        )}
        {selected === "Shortlisted" && (
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
                <div className="comp-req">
                  <button className="undo-btn">Undo</button>
                  <div className="check-img">
                    <img src={check} alt="" />
                  </div>
                </div>
                <Link to="/appliedJob/view" style={{ textDecoration: "none" }}>
                  <div className="a-item-View">view</div>
                </Link>
              </div>
            </div>
          </div>
        )}
        {selected === "Rejected" && (
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
                <div className="comp-req">
                  <button className="undo-btn">Undo</button>
                  <div className="check-img">
                    <img src={check} alt="" />
                  </div>
                </div>
                <Link to="/appliedJob/view" style={{ textDecoration: "none" }}>
                  <div className="a-item-View">view</div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Main;
