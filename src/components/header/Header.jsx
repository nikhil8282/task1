import React from "react";
import "./header.css";
import png1 from "../../images/1.png";
import png2 from "../../images/2.png";
import png3 from "../../images/3.png";
function Header({selected,setSelected}) {
const handleChange=(v)=>{
if(v!==selected)setSelected(v);
}
  return (
    <div className="h-container" >
      <div className={`h-item ${"Project"===selected?"select":""}`} onClick={()=>{handleChange("Project")}}>
        <img src={png1} alt="" />
        <span>Project Requirements</span>
      </div>
      <div className={`h-item ${"Accepted"===selected?"select":""}`} onClick={()=>{handleChange("Accepted")}}>
        <img src={png2} alt="" />
        <span>Accepted</span>
      </div>
      <div className={`h-item ${"Completed"===selected?"select":""}`} onClick={()=>{handleChange("Completed")}}>
        <img src={png3} alt="" />
        <span>Completed Requirement</span>
      </div>
    </div>
  );
}

export default Header;
