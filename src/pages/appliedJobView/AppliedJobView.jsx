import React, { useState } from "react";
import AppliedJobViewHeader from "../../appliedJobs/View_Header/AppliedJobViewHeader";
import CandidateDetails from "../../appliedJobs/View_candidateDeatails/CandidateDetails";
import JobDescription from "../../appliedJobs/View_JobDescription/JobDescription";
import AdminNavbar from "../../components/admin_navbar/AdminNavbar";
import "./appliedJobView.css";
function Main() {
  // const [selected, setSelected] = useState("JobRequirement");
  const [selected, setSelected] = useState("CandidateDetail");

  return (
    <>
      <AdminNavbar />
      <AppliedJobViewHeader setSelected={setSelected} selected={selected} />
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
