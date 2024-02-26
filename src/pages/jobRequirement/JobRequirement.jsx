import React, { useState } from "react";
import Header from "../../components2/header/Header";
import AdminNavbar from "../../components/admin_navbar/AdminNavbar";
import JobRequirementList from "../../components2/jobRequirement/jobRequirementList";
import "./jobRequirement.css";
function Main() {
  // const [selected, setSelected] = useState("JobRequirement");
  const [selected, setSelected] = useState("Accepted");
    
  return (<>
    <AdminNavbar/>
    <div className="main">
      <Header setSelected={setSelected} selected={selected} />
      <JobRequirementList selected={selected} />
    </div>
  </>
  );
}

export default Main;
