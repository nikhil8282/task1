import React, { useState } from "react";
import Header from "../header/Header";
import Body from "../body/Body";
import "./main.css";
function Main() {
  const [selected, setSelected] = useState("Project");
  // const handleChangeState = ()=>{
  //   set
  // }
  return (
    <div className="main">
      {/* <Header setSelected={setSelected} selected={selected} /> */}
      {/* <Body selected={selected}/> */}
      
    </div>
  );
}

export default Main;
