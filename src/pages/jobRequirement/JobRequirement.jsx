import "./jobRequirement.css";
import React, { useState } from "react";
import AdminNavbar from "../../components/admin_navbar/AdminNavbar";
import png1 from "../../images/1.png";
import png2 from "../../images/2.png";
import png3 from "../../images/3.png";
import check from "../../images/check.png";
import search from "../../images/search.png";
import businessman from "../../images/Businessman.png";
import JobRequirementView from "../../components2/jobRequirementView/JobRequirementView";
import Dialog from "@mui/material/Dialog";
import { Link } from "react-router-dom";




function Main() {
  const [selected, setSelected] = useState("JobRequirement");
  const [openView, setOpenView] = useState(false);
  const [acceptPopup, setAcceptPopup] = useState(false);
  const [rejectPopup, setRejectPopup] = useState(false);

  const handleChange = (v) => {
    if (v !== selected) setSelected(v);
  };    
  return (<>
    <AdminNavbar/>
    <div className="main">
    <div className="comon-header">
      <div
        className="c-h-item"
        style={{
          color: `${"JobRequirement" === selected ? "#3583F6" : "#0F0F0F"}`,
        }}
        onClick={() => {
          handleChange("JobRequirement");
        }}
      >
        <img src={png1} alt="" />
        <span className="sb">Job Requirements</span>
      </div>
      <div
        className="c-h-item"
        style={{ color: `${"Accepted" === selected ? "#3583F6" : "#0F0F0F"}` }}
        onClick={() => {
          handleChange("Accepted");
        }}
      >
        <img src={png2} alt="" />
        <span className="sb">Accepted</span>
      </div>
      <div
        className="c-h-item"
        style={{
          color: `${
            "CompletedRequirement" === selected ? "#3583F6" : "#0F0F0F"
          }`,
        }}
        onClick={() => {
          handleChange("CompletedRequirement");
        }}
      >
        <img src={png3} alt="" />
        <span className="sb">Completed Requirement</span>
      </div>
    </div>


    <>
      {selected === "JobRequirement" && (
        <div className="j-req-container">
          <div div className="j-items">
            <div className="j-item-first">
              <div className="j-item-first-img">
                <img src={businessman} alt="" />
              </div>
              <span>React Developer</span>
            </div>
            <div className="j-item-middle">
              <div className="j-item-middle-el">
                <span>Experience req</span>
                <span>Intern</span>
              </div>
              <div className="j-item-middle-el">
                <span>Date of joining</span>
                <span>25/01/2024</span>
              </div>
            </div>
            <div className="j-item-buttons">
              <button
                onClick={() => {
                  setAcceptPopup(true);
                }}
              >
                Accept
              </button>
              <button onClick={() => setRejectPopup(true)}>Reject</button>
            </div>
            <div className="j-r-item-View">
              <span onClick={() => setOpenView(true)}>view</span>
            </div>

          </div>
        </div>
      )}
      {selected === "Accepted" && (
        <div className="j-acp-container">
          <div className="j-search">
            <div className="j-search-img">
              <img src={search} alt="" />
            </div>
            <input type="text" className="j-search-input" />
          </div>
          <div div className="j-items">
            <div className="j-item-first">
              <div className="j-item-first-img">
                <img src={businessman} alt="" />
              </div>
              <span>React Developer</span>
            </div>
            <div className="j-item-middle">
              <div className="j-item-middle-el">
                <span>Experience req</span>
                <span>Intern</span>
              </div>
              <div className="j-item-middle-el">
                <span>Date of joining</span>
                <span>25/01/2024</span>
              </div>
            </div>
            <Link to="/jobRequirementManage">
              <button className="accept-btn">Manage</button>
            </Link>
          </div>
        </div>
      )}
      {selected === "CompletedRequirement" && (
        <div className="c-req-container">
          <div div className="j-items">
            <div className="j-item-first">
              <div className="j-item-first-img">
                <img src={businessman} alt="" />
              </div>
              <span>React Developer</span>
            </div>
            <div className="j-item-middle">
              <div className="j-item-middle-el">
                <span>Experience req</span>
                <span>Intern</span>
              </div>
              <div className="j-item-middle-el">
                <span>Date of joining</span>
                <span>25/01/2024</span>
              </div>
            </div>
            <div className="comp-req">
              <button className="undo-btn">Undo</button>
              <div className="check-img">
                <img src={check} alt="" />
              </div>
            </div>
          </div>
        </div>
      )}

        <JobRequirementView open={openView} setOpen={setOpenView} />

        <Dialog
          maxWidth="sm"
          open={acceptPopup}
          onClose={() => setAcceptPopup(false)}
        >
          <div className="popup-container">
            <div className="popup-container-text">
              Are you sure you want to consider this company?
            </div>
            <div className="popup-container-btn">
              <button
                onClick={() => {
                  setAcceptPopup(false);
                }}
              >
                Yes
              </button>
              <button
                onClick={() => {
                  setAcceptPopup(false);
                }}
              >
                No
              </button>
            </div>
          </div>
        </Dialog>

        <Dialog
          maxWidth="sm"
          open={rejectPopup}
          onClose={() => setRejectPopup(false)}
        >
          <div className="popup-container">
            <div className="popup-container-text">
              Are you sure you want to reject this company?
            </div>
            <div className="popup-container-btn">
              <button
                onClick={() => {
                  setRejectPopup(false);
                }}
              >
                Yes
              </button>
              <button
                onClick={() => {
                  setRejectPopup(false);
                }}
              >
                No
              </button>
            </div>
          </div>
        </Dialog>
      
    </>

    </div>
  </>
  );
}

export default Main;
