import React, { useState } from "react";
import "./header.css";
import png1 from "../../images/1.png";
import png2 from "../../images/2.png";
import png3 from "../../images/3.png";
function Header({ selected, setSelected }) {
  const handleChange = (v) => {
    if (v !== selected) setSelected(v);
  };
  return (
    <div className="hire-head-container">
      <div
        className="h-item"
        style={{
          color: `${"Project" === selected ? "#3583F6" : "#0F0F0F"}`,
        }}
         onClick={() => {
          handleChange("Project");
        }}
      >
        <img src={png1} alt="" />
        <span className="sb">Project Requirements</span>
      </div>
      <div
        className="h-item"
        style={{
          color: `${"Accepted" === selected ? "#3583F6" : "#0F0F0F"}`,
        }}
        onClick={() => {
          handleChange("Accepted");
        }}
      >
        <img src={png2} alt="" />
        <span className="sb">Accepted</span>
      </div>
      <div
        className="h-item"
        style={{
          color: `${"Completed" === selected ? "#3583F6" : "#0F0F0F"}`,
        }}
        onClick={() => {
          handleChange("Completed");
        }}
      >
        <img src={png3} alt="" />
        <span className="sb">Completed Requirement</span>
      </div>
    </div>
  );
}

export default Header;
