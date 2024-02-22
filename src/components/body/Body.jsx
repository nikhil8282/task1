import React, { useState } from "react";
import "./body.css";
import check from "../../images/check.png";
import View from "../projectDetails/View";
function Body({ selected }) {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="b-container">
      <div className="b-items">
        <div className="item company">
          <span>Company</span>
          <span>Krinvi Technologies</span>
        </div>
        <div className="item project">
          <span>Project</span>
          <span>FashionHub: E-Commerce Revolution</span>
        </div>
        <div className="item budget">
          <span>Budget</span>
          <span>$200</span>
        </div>
        {selected === "Project" && (
          <div className="details">
            <span onClick={() => setOpen(true)}>Project Details</span>
          </div>
        )}
        {selected === "Accepted" && <button className="btn">Done</button>}
        {selected === "Completed" && (
          <div className="comp-req">
            <button className="undo-btn">Undo</button>
            <div className="check-img">
              <img src={check} alt="" />
            </div>
          </div>
        )}
      </div>
      <View open={open} handleClose={handleClose} />
    </div>
  );
}

export default Body;
