import React, { useState } from "react";
import "./body.css";
import check from "../../images/check.png";
import View from "../projectDetails/View";
import Popup from "../popup/Popup";
function Body({ selected }) {
  const [openView, setOpenView] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <div className="b-container">
      <div className="b-items">
        <div className="b-item">
          <span>Company</span>
          <span>Krinvi Technologies</span>
        </div>
        <div className="b-item">
          <span>Project</span>
          <span>FashionHub: E-Commerce Revolution</span>
        </div>
        <div className="b-item">
          <span>Budget</span>
          <span>$200</span>
        </div>
        {selected === "Project" && (
          <div className="details">
            <span
              style={{ color: "#3583F6", cursor: "pointer" }}
              onClick={() => setOpenView(true)}
            >
              Project Details
            </span>
          </div>
        )}
        {selected === "Accepted" && (
          <button
            className="accept-btn"
            onClick={() => {
              setOpenPopup(true);
            }}
          >
            Done
          </button>
        )}
        {selected === "Completed" && (
          <div className="comp-req">
            <button className="undo-btn">Undo</button>
            <div className="check-img">
              <img src={check} alt="" />
            </div>
          </div>
        )}
      </div>
      <View open={openView} setOpen={setOpenView} />
      <Popup open={openPopup} setOpen={setOpenPopup} />
    </div>
  );
}

export default Body;
