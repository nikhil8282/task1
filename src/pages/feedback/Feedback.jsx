import React,{useState} from "react";
import "./feedback.css";
import { Link } from "react-router-dom";
import FeedbackNavbar from "../../components/feedback_navbar/FeedbackNavbar"
function Feedback({ filter,sort,setFilter,setSort }) {
  return (
    <>
  <FeedbackNavbar filter={filter} sort={sort} setFilter={setFilter} setSort={setSort}/>
    
    <div className="main-sec">
      <div className="list-items">
        <div className="item companyName">
          <span>Company Name</span>
          <span>Krinvi Technologies</span>
        </div>
        <div className="item crzeatedOn">
          <span>Created on</span>
          <span>1/02/2024</span>
        </div>
        <div className="item issue">
          <span>Issue</span>
          <span>
            Recently, I've encountered an unexpected log-out issue while{" "}
            <Link style={{ textDecoration: "none" }} to={"/feedback/issue"}>
              view
            </Link>
          </span>
        </div>
        {filter !== "Open" && (
          <div className="item last-update">
            <span> Last Update</span>
            <span>
              This unexpected log-out issue hampers the seamless user{" "}
              <Link style={{ textDecoration: "none" }} to={"/feedback/issue"}>
              view
            </Link>
            </span>
          </div>
        )}
        <div className="item status">
          <span>Status</span>
          {}
          <span
            style={{
              color: `${
                filter === "Inprogress"
                  ? "#27B357"
                  : filter === "Open"
                  ? "#3583F6"
                  : "#FF4949"
                }`,
              }}
              >
            {filter}
          </span>
        </div>
        <div className="item">
        <Link style={{ textDecoration: "none" }} to={"/feedback/issue"}>
              view
            </Link>
        </div>
      </div>
    </div>
            </>
  );
}

export default Feedback;
