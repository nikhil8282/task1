import React, { useState } from "react";
import Header from "../../components/header/Header";
import Body from "../../components/body/Body";
import "./admin.css";
function Main() {
  const [selected, setSelected] = useState("Project");
  
  return (
    <div className="main">
      <Header setSelected={setSelected} selected={selected} />
      <Body selected={selected} />
    </div>
  );
}

export default Main;
