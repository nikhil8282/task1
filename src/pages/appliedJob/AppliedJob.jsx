import React, { useState } from "react";
import AppliedJobHeader from "../../appliedJobs/header/AppliedJobHeader";
import AppliedJobsList from "../../appliedJobs/appliedJobsList/AppliedJobsList";
import AdminNavbar from "../../components/admin_navbar/AdminNavbar";
import JobRequirementList from "../../components2/jobRequirement/jobRequirementList";

import "./AppliedJob.css";

function Main() {
  const [selected, setSelected] = useState("AppliedJobs");
  // const [selected, setSelected] = useState("Accepted");

  return (
    <>
      <AdminNavbar />
      <div className="main">
        <AppliedJobHeader setSelected={setSelected} selected={selected} />
        <AppliedJobsList selected={selected} />
      </div>
    </>
  );
}

export default Main;
