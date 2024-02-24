import React, { useState } from "react";
import "./adminNavbar.css";
import bell from "../../images/bell.png";
import back from "../../images/back.png";
function AdminNavbar() {
  return (
    <div className="admin-nav">
      <div className="admin-left-nav">
        <h5>Hiring</h5>
      </div>
      <div className="admin-right-nav">
        <div className="bell-icon">
          <img src={bell} alt="" />
          <span className="counter">1</span>
        </div>

        <div className="r-nav-items">
          <span className="sb ">sort</span>

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

export default AdminNavbar;
