import React from "react";
import "./navbar.css";
import bell from "../../images/bell.png";
import back from "../../images/back.png";
function Navbar({ filter, setFilter, sort, setSort }) {

  const handleChangeFilter = (val) => {
    if (val === filter) return;
    setFilter(val);
  };
  const handleChangeSort = (val) => {
    if (val === sort) return;
    setSort(val);
  };
  return (
    <div className="navbar">
      <div className="left-nav">
        <h5>Feedback and Support</h5>
        <h5>Hire</h5>
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
              {filter}
              <img src={back} alt="" />
            </button>
            <div class="dropdown-content">
              <span onClick={()=>handleChangeFilter("Closed")}>Closed</span>
              <span onClick={()=>handleChangeFilter("Inprogress")}>Inproges</span>
              <span onClick={()=>handleChangeFilter("Open")}>Open</span>
            </div>
          </div>
        </div>
        <div className="nav-items">
          <span>sort</span>

          <div class="dropdown">
            <button class="dropbtn">
              {sort}
              <img src={back} alt="" />
            </button>
            <div class="dropdown-content">
              <span onClick={()=>handleChangeSort("Creation Date")}>Creation Date</span>
              <span onClick={()=>handleChangeSort("Last Update")}>Last Update</span>
            </div>
          </div>
        </div>

        {/* <div className="dropdown">
          <button className="dropbtn">
            Today
            <img src={back} alt="" />
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;
