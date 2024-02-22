import React from "react";
import "./body.css";
import check from "../../images/check.png";
function Body({selected}) {
  return (
    <div className="b-container">
      <div className="b-items">
        <div className="item company" >
          <span>Company</span>
          <span>Krinvi Technologies</span>
        </div>
        <div className="item project">
          <span>Project</span>
          <span>FashionHub: E-Commerce Revolution</span>
        </div>
        <div className="item budget">
          <span>Budget</span>
          <span>$200</span>
        </div>
        {
          selected === "Project" && 
          <div className="details">
          <span>Project Details</span>
        </div>
        }
        {
          selected === "Accepted" && 
          <button className="btn">Done</button>
          
        }
        {
        selected === "Completed" && 
        <div className="comp-req">
          <button className="undo-btn">
            Undo
          </button>
          <div className="check-img"><img src={check} alt="" /></div>
        </div>

        }
      </div>
    </div>
  );
}

export default Body;
