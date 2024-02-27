import React, { useEffect, useState } from "react";
import "./hireNavbar.css";
import bell from "../../images/bell.png";
import back from "../../images/back.png";
function HireNavbar() {
  const [openSort, setOpenSort] = useState(false);
  const [sort, setSort] = useState("Today");

  const handleChangeFilter = (val) => {
    if (val !== sort) setSort(val);
    setOpenSort(false);
  };
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

          <div class="dropdown">
            <button
              class="dropbtn"
              onClick={() => {
                setOpenSort(!openSort);
              }}
            >
              <span className="sb">{sort}</span>
              <img src={back} alt="" />
            </button>
            <div
              style={{ display: `${openSort ? "block" : "none"}` }}
              class="dropdown-content"
            >
              <span onClick={() => setSort("Today")}>Today</span>
              <span onClick={() => setSort("Yesterday")}>Yesterday</span>
              <span onClick={() => setSort("Last Week")}>Last Week</span>
              <span onClick={() => setSort("Last Month")}>Last Month</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HireNavbar;
