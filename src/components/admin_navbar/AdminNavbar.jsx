import React, { useState } from "react";
import "./hireNavbar.css";
import bell from "../../images/bell.png";
import back from "../../images/back.png";
function HireNavbar() {
  return (
    <div className="hire-nav">
      <div className="hire-left-nav">
        <span className="hire-nav-title">Hiring</span>
      </div>
      <div className="hire-right-nav">
        <div className="bell-icon">
          <img src={bell} alt="" />
          <span className="counter">1</span>
        </div>

        <div className="r-nav-items">
          <span>sort</span>

          <div className="dropdown">
            <button className="dropbtn">
              <span>Today</span>
              <img src={back} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HireNavbar;
