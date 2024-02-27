import React, { useState } from "react";
import "./jobRequirementList.css";
import check from "../../images/check.png";
import search from "../../images/search.png";
import businessman from "../../images/Businessman.png";
import JobRequirementView from "../../components2/jobRequirementView/JobRequirementView";
import Popup from "../popup/Popup";
import { Link } from "react-router-dom";
function Body({ selected }) {
  const [openView, setOpenView] = useState(false);

  return (
    <div className={`j-${selected}-container`}>
      {(selected === "Accepted" || selected === "CompletedRequirement") && (
        <div className="j-search">
          <div className="j-search-img">
            <img src={search} alt="" />
          </div>
          <input type="text" className="j-search-input" />
        </div>
      )}
      <div div className="j-items">
        <div className="j-item-first">
          <div className="j-item-first-img">
            <img src={businessman} alt="" />
          </div>
          <span>React Developer</span>
        </div>
        <div className="j-item-middle">
          <div className="j-item-middle-el">
            <span>Experience req</span>
            <span>Intern</span>
          </div>
          <div className="j-item-middle-el">
            <span>Date of joining</span>
            <span>25/01/2024</span>
          </div>
        </div>

        {selected === "JobRequirement" && (
          <>
            <div className="j-item-buttons">
              <button
                // onClick={() => {
                //   setOpenPopup(true);
                // }}
              >
                Accept
              </button>
              <button
                // onClick={() => {
                //   setOpenPopup(true);
                // }}
              >
                Reject
              </button>
            </div>
            <div className="j-r-item-View">
              <span onClick={() => setOpenView(true)}>view</span>
            </div>
          </>
        )}
        {selected === "Accepted" && (
          <Link to="/jobRequirementManage">
            <button className="accept-btn">Manage</button>
          </Link>
        )}

        {selected === "CompletedRequirement" && (
          <div className="comp-req">
            <button className="undo-btn">Undo</button>
            <div className="check-img">
              <img src={check} alt="" />
            </div>
          </div>
        )}
      </div>
      <div div className="j-items">
        <div className="j-item-first">
          <div className="j-item-first-img">
            <img src={businessman} alt="" />
          </div>
          <span>React Developer</span>
        </div>
        <div className="j-item-middle">
          <div className="j-item-middle-el">
            <span>Experience req</span>
            <span>Intern</span>
          </div>
          <div className="j-item-middle-el">
            <span>Date of joining</span>
            <span>25/01/2024</span>
          </div>
        </div>

        {selected === "JobRequirement" && (
          <>
            <div className="j-item-buttons">
              <button
                // onClick={() => {
                //   setOpenPopup(true);
                // }}
              >
                Accept
              </button>
              <button
                // onClick={() => {
                //   setOpenPopup(true);
                // }}
              >
                Reject
              </button>
            </div>
            <div className="j-r-item-View">
              <span onClick={() => setOpenView(true)}>view</span>
            </div>
          </>
        )}
        {selected === "Accepted" && (
          <Link to="/jobRequirementManage">
            <button className="accept-btn">Manage</button>
          </Link>
        )}

        {selected === "CompletedRequirement" && (
          <div className="comp-req">
            <button className="undo-btn">Undo</button>
            <div className="check-img">
              <img src={check} alt="" />
            </div>
          </div>
        )}
      </div>
      <div div className="j-items">
        <div className="j-item-first">
          <div className="j-item-first-img">
            <img src={businessman} alt="" />
          </div>
          <span>React Developer</span>
        </div>
        <div className="j-item-middle">
          <div className="j-item-middle-el">
            <span>Experience req</span>
            <span>Intern</span>
          </div>
          <div className="j-item-middle-el">
            <span>Date of joining</span>
            <span>25/01/2024</span>
          </div>
        </div>

        {selected === "JobRequirement" && (
          <>
            <div className="j-item-buttons">
              <button
                // onClick={() => {
                //   setOpenPopup(true);
                // }}
              >
                Accept
              </button>
              <button
                // onClick={() => {
                //   setOpenPopup(true);
                // }}
              >
                Reject
              </button>
            </div>
            <div className="j-r-item-View">
              <span onClick={() => setOpenView(true)}>view</span>
            </div>
          </>
        )}
        {selected === "Accepted" && (
          <Link to="/jobRequirementManage">
            <button className="accept-btn">Manage</button>
          </Link>
        )}

        {selected === "CompletedRequirement" && (
          <div className="comp-req">
            <button className="undo-btn">Undo</button>
            <div className="check-img">
              <img src={check} alt="" />
            </div>
          </div>
        )}
      </div>
      <div div className="j-items">
        <div className="j-item-first">
          <div className="j-item-first-img">
            <img src={businessman} alt="" />
          </div>
          <span>React Developer</span>
        </div>
        <div className="j-item-middle">
          <div className="j-item-middle-el">
            <span>Experience req</span>
            <span>Intern</span>
          </div>
          <div className="j-item-middle-el">
            <span>Date of joining</span>
            <span>25/01/2024</span>
          </div>
        </div>

        {selected === "JobRequirement" && (
          <>
            <div className="j-item-buttons">
              <button
                // onClick={() => {
                //   setOpenPopup(true);
                // }}
              >
                Accept
              </button>
              <button
                // onClick={() => {
                //   setOpenPopup(true);
                // }}
              >
                Reject
              </button>
            </div>
            <div className="j-r-item-View">
              <span onClick={() => setOpenView(true)}>view</span>
            </div>
          </>
        )}
        {selected === "Accepted" && (
          <Link to="/jobRequirementManage">
            <button className="accept-btn">Manage</button>
          </Link>
        )}

        {selected === "CompletedRequirement" && (
          <div className="comp-req">
            <button className="undo-btn">Undo</button>
            <div className="check-img">
              <img src={check} alt="" />
            </div>
          </div>
        )}
      </div>

      <JobRequirementView open={openView} setOpen={setOpenView} />
      {/* <Popup open={openPopup} setOpen={setOpenPopup} /> */}
    </div>
  );
}

export default Body;
