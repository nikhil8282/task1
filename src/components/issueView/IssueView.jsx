import React from "react";
import "./issueView.css";
function IssueView() {
  return (
    <div className="issue-view">
      <div className="issue-heading">
        <div className="item companyName">
          <span>Company Name</span>
          <span>Krinvi Technologies</span>
        </div>
        <div className="item createdOn">
          <span>Created on</span>
          <span>1/02/2024</span>
        </div>

        <div className="item status">
          <span>Status</span>
          <span>$200</span>
        </div>
      </div>
      <div className="issue-details">
        <span>Issue</span>
        <div className="issue-content">
          Recently, I've encountered an unexpected log-out issue while using the
          Zestire platform. Despite being actively engaged in [mention the
          specific task or section you were using, e.g., "Resource Hire Cycle"
          or "Job Application"], the system unexpectedly logged me out. This
          interruption disrupts the user experience and requires
          re-authentication, leading to potential data loss or inconvenience.
        </div>
      </div>
      <div className="comment-sec">
        <div>your comment</div>
        <textarea></textarea>
        <button>update</button>
      </div>
    </div>
  );
}

export default IssueView;