import React, { useState } from "react";
import CandidateDetails from "../../appliedJobs/View_candidateDeatails/CandidateDetails";
import JobDescription from "../../appliedJobs/View_JobDescription/JobDescription";
import AdminNavbar from "../../components/admin_navbar/AdminNavbar";
import bag from "../../images/1.png";
import check from "../../images/3.png";

import "./appliedJobView.css";
function Main() {
  // const [selected, setSelected] = useState("JobRequirement");
  const [selected, setSelected] = useState("CandidateDetails");
  const handleChange = (v) => {
    if (v !== selected) setSelected(v);
  };

  return (
    <>
      <AdminNavbar />
      {/* <AppliedJobViewHeader setSelected={setSelected} selected={selected} /> */}
      <div className="comon-header">
        <div
          className="c-h-item"
          style={{
            color: `${"CandidateDetails" === selected ? "#3583F6" : "#0F0F0F"}`,
          }}
          onClick={() => {
            handleChange("CandidateDetails");
          }}
        >
          <img src={bag} alt="" />
          <span className="sb">Candidate Details</span>
        </div>
        <div
          className="c-h-item"
          style={{
            color: `${"JobDescription" === selected ? "#3583F6" : "#0F0F0F"}`,
          }}
          onClick={() => {
            handleChange("JobDescription");
          }}
        >
          <img src={check} alt="" />

          <span className="sb">Job Description</span>
        </div>
      </div>

      {selected === "CandidateDetails" ? (
        <div className="j-r-m-main">
          <CandidateDetails />
        </div>
      ) : (
        <div className="j-r-m-main">
          <JobDescription />
        </div>
      )}
    </>
  );
}

export default Main;
