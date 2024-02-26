import React, { useState } from "react";
import Header from "../../components2/manageHeader/Header";
import Manage from "../../components2/manage/Manage";
import AdminNavbar from "../../components/admin_navbar/AdminNavbar";
// import JobRequirementList from "../../components2/jobRequirement/jobRequirementList";
import "./jobRequirementManage.css";
function Main() {
  // const [selected, setSelected] = useState("JobRequirement");
  const [selected, setSelected] = useState("Manage");

  return (
    <>
      <AdminNavbar />
      <div className="main">
        <Header setSelected={setSelected} selected={selected} />
        <Manage />
        {/* <JobRequirementList selected={selected} /> */}
      </div>
    </>
  );
}

export default Main;
