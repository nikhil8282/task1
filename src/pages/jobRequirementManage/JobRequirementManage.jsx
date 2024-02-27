import React, { useState } from "react";
import Header from "../../components2/manageHeader/Header";
import Manage from "../../components2/manage/Manage";
import CompanyRequirement from "../../components2/companyRequirement/CompanyRequirement";
import AdminNavbar from "../../components/admin_navbar/AdminNavbar";
// import JobRequirementList from "../../components2/jobRequirement/jobRequirementList";
import "./jobRequirementManage.css";
function Main() {
  // const [selected, setSelected] = useState("JobRequirement");
  const [selected, setSelected] = useState("Manage");

  return (
    <>
      <AdminNavbar />
      <Header setSelected={setSelected} selected={selected} />
      {selected === "Manage" ? (
        <div className="j-r-m-main">
          <Manage />
        </div>
      ) : (
        <div className="j-r-c-main">
          <CompanyRequirement />
        </div>
      )}
    </>
  );
}

export default Main;
