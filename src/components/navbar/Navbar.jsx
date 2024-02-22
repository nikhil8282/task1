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
        {/* <div className="nav-items">
          <span>filter</span>
          <div className="drop-down">
            <span>Inprogress</span>
            <img src={back} alt="" />
          </div>
          <div className="drop-opt">
            
          </div>
        </div>
        <div className="nav-items">
          <span>sort</span>
          <div className="drop-down">
            <span>Creation Date</span>
            <img src={back} alt="" />
          </div>
          <div className="drop-opt">
                     </div>
        </div> */}
        <div className="nav-items">
          <span>filter</span>
          <div class="dropdown">
            <button class="dropbtn">
              Inprogress
              <img src={back} alt="" />
            </button>
            <div class="dropdown-content">
              <span>Closed</span>
              <span>Inproges</span>
              <span>Open</span>
            </div>
          </div>
        </div>
        <div className="nav-items">
          <span>filter</span>

          <div class="dropdown">
            <button class="dropbtn">
              Dropdown
              <img src={back} alt="" />
            </button>
            <div class="dropdown-content">
              <span>Creation Date</span>
              <span>Last Update</span>
            </div>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">
            Today
            <img src={back} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
