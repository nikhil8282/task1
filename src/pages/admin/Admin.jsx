import React, { useState } from "react";
import Header from "../../components/header/Header";
import AdminNavbar from "../../components/admin_navbar/AdminNavbar";
import Body from "../../components/body/Body";
import "./admin.css";
function Main() {
  const [selected, setSelected] = useState("Project");

  return (
    <>
      <AdminNavbar />
      <div className="main">
        <Header setSelected={setSelected} selected={selected} />
        <Body selected={selected} />
      </div>
    </>
  );
}

export default Main;
