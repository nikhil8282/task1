import React from "react";
import "./feedback.css";
import { Link } from "react-router-dom";
function Feedback({ filter}) {

  return (
    
    <div className="main-sec">
      <div className="list-items">
        <div className="item companyName">
          <span>Company Name</span>
          <span>Krinvi Technologies</span>
        </div>
        <div className="item createdOn">
          <span>Created on</span>
          <span>1/02/2024</span>
        </div>
        <div className="item issue">
          <span>Issue</span>
          <span>
            Recently, I've encountered an unexpected log-out issue while
            <Link style={{ textDecoration: "none" }} to={"/feedback/issue"}>
              view
            </Link>
          </span>
        </div>
        {
            filter !=="Open" && 
        <div className="item last-update">
          <span> Last Update</span>
          <span>
            This unexpected log-out issue hampers the seamless user{" "}
            <Link style={{ textDecoration: "none" }} to={"/issue"}>
              view
            </Link>
          </span>
        </div>
        }
        <div className="item status">
          <span>Status</span>
          <span>$200</span>
        </div>
        <div className="item">
          <Link style={{ textDecoration: "none" }} to={"/issue"}>
            view
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
