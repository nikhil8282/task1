import React from "react";
import "./navbar.css";
import bell from "../../images/bell.png";
import back from "../../images/back.png";
function Navbar() {
  return (
    <div className="navbar">
      <div className="left-nav">
        <h5>Hiring</h5>
      </div>
      <div className="right-nav">
        <div className="bell-icon">
          <img src={bell} alt="" />
          <span className="counter">1</span>
        </div>
        <span className="sort">sort</span>
        <div className="drop-down">
          <span>Today</span>
          <img src={back} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
