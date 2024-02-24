import React, { useState } from "react";
import "./feedbackNavbar.css";
import bell from "../../images/bell.png";
import back from "../../images/back.png";
function FeedbackNavbar({ filter, setFilter, sort, setSort }) {
  const [filterDropOpen, setFilterDropOpen] = useState(false);
  const [sortDropOpen, setSortDropOpen] = useState(false);

  const handleChangeFilter = (val) => {
    if (val !== filter) setFilter(val);
    setFilterDropOpen(false);
  };
  const handleChangeSort = (val) => {
    if (val !== sort) setSort(val);
    setSortDropOpen(false);
  };
  return (
    <div className="feedback-nav">
      <div className="feedback-left-nav">
        <h5>Feedback and Support</h5>
      </div>
      <div className="feedback-right-nav">
        <div className="bell-icon">
          <img src={bell} alt="" />
          <span className="counter">1</span>
        </div>
        <div className="r-nav-items">
          <span className="sb">filter</span>
          <div class="dropdown">
            <button
              class="dropbtn"
              onClick={() => {
                setFilterDropOpen(!filterDropOpen);
              }}
            >
              <span className="sb">{filter}</span>
              <img src={back} alt="" />
            </button>
            <div
              style={{ display: `${filterDropOpen ? "block" : "none"}` }}
              class="dropdown-content"
            >
              <span onClick={() => handleChangeFilter("Closed")}>Closed</span>
              <span onClick={() => handleChangeFilter("Inprogress")}>
                Inprogress
              </span>
              <span onClick={() => handleChangeFilter("Open")}>Open</span>
            </div>
          </div>
        </div>
        <div className="r-nav-items">
          <span className="sb ">sort</span>

          <div class="dropdown">
            <button
              class="dropbtn "
              onClick={() => {
                setSortDropOpen(!sortDropOpen);
              }}
            >
              <span className="sb">{sort}</span>
              <img src={back} alt="" />
            </button>
            <div
              style={{ display: `${sortDropOpen ? "block" : "none"}` }}
              class="dropdown-content"
            >
              <span onClick={() => handleChangeSort("Creation Date")}>
                Creation Date
              </span>
              <span onClick={() => handleChangeSort("Last Update")}>
                Last Update
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackNavbar;
