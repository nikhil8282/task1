import React,{useState} from "react";
import "./feedback.css";
import { Link } from "react-router-dom";
import FeedbackNavbar from "../../components/feedback_navbar/FeedbackNavbar"
function Feedback({ filter,sort,setFilter,setSort }) {
  return (
    <>
  <FeedbackNavbar filter={filter} sort={sort} setFilter={setFilter} setSort={setSort}/>
    
    <div className="feedback-container">
      <div className="f-container-items">
        <div className="f-c-item">
          <span>Company Name</span>
          <span>Krinvi Technologies</span>
        </div>
        <div className="f-c-item">
          <span>Created on</span>
          <span>1/02/2024</span>
        </div>
        <div className="f-c-item">
          <span>Issue</span>
          <span>
            Recently, I've encountered an unexpected log-out issue while{" "}
            <Link style={{ textDecoration: "none" }} to={"/feedback/issue"}>
              view
            </Link>
          </span>
        </div>
        {filter !== "Open" && (
          <div className="f-c-item">
            <span> Last Update</span>
            <span>
              This unexpected log-out issue hampers the seamless user{" "}
              <Link style={{ textDecoration: "none" }} to={"/feedback/issue"}>
              view
            </Link>
            </span>
          </div>
        )}
        <div className="f-c-item">
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
        <div className="f-c-item">
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
