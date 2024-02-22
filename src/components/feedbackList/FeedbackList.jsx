import React from 'react'
import "./feedbackList.css"
function FeedbackList() {
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
              Recently, I've encountered an unexpected log-out issue while View
            </span>
          </div>
          <div className="item last-update">
            <span>Issue</span>
            <span>
              This unexpected log-out issue hampers the seamless user View
            </span>
          </div>
          <div className="item status">
            <span>Status</span>
            <span>$200</span>
          </div>
          <div className="item">
            <a>view</a>
          </div>
        </div>
      </div>

  )
}

export default FeedbackList