import React, { useState } from "react";
import "./manage.css";
import check from "../../images/check.png";
import back from "../../images/back.png";
function Body() {

  return (
    <div className="j-manage-container">
      <div div className="j-m-items">
        <div className="j-m-item-first">
          <span>React Developer</span>
        </div>
        <div className="j-m-item-middle">
          <span>Date</span>
          <div className="j-m-item-button">
            <span>20/01/2024</span>
            <img src={back} />
          </div>
        </div>

        <div className="j-m-item-last">
          <button className="undo-btn">Undo</button>
          <div className="check-img">
            <img src={check} alt="" />
          </div>
        </div>
      </div>
</div>
  );
}

export default Body;
