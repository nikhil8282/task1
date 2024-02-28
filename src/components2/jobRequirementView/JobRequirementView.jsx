import "./jobRequirementView.css";
import {useState} from "react";
import Dialog from "@mui/material/Dialog";
import AcceptPopup from "../acceptPopup/AcceptPopup"
import RejectPopup from "../rejectPopup/RejectPopup"
import businessman from "../../images/Businessman.png";
export default function JobRequirementView({ open, setOpen }) {
  const [acceptPopup,setAcceptPopup]=useState(false);
  const [rejectPopup,setRejectPopup]=useState(false);
  return (
    <>
    <Dialog
      fullWidth={true}
      maxWidth="md"
      open={open}
      onClose={() => setOpen(false)}
    >
      <div className="j-r-view-section">
        <div className="j-r-view-heading">
          <span>Company</span>
          <span>Krinvi Technologies</span>
        </div>
        <div className="j-r-btn-sec">
          <button className="blue-btn" onClick={()=>{setAcceptPopup(true)}}>Accept</button>
          <button className="white-btn" onClick={() => setRejectPopup(true)}>
            Reject
          </button>
        </div>
        {/* <hr /> */}
        {/* <div className="details-sec">
          </div> */}
        <div div className="j-v-nav">
          <div className="j-v-nav-first">
            <div className="j-v-nav-first-img">
              <img src={businessman} alt="" />
            </div>
            <span>React Developer</span>
          </div>
          <div className="j-v-nav-second">
            <div className="j-v-nav-second-item">
              <span>Experience req</span>
              <span>Intern</span>
            </div>
            <div className="j-v-nav-second-item">
              <span>Date of joining</span>
              <span>25/04/2024</span>
            </div>
            <div className="j-v-nav-second-item">
              <span>No of Positions</span>
              <span>1</span>
            </div>
          </div>
        </div>

        <div className="j-v-main">
          <div className="j-v-main-first">
            <span>Budget</span>
            <span>$200</span>
          </div>
          <div className="j-v-main-second">
            <div className="j-v-main-des">Description</div>
            <div className="j-v-main-second-contenent">
              <div className="j-v-main-contenent-item">
                <div className="content-heading">
                  1. Position:Chief Technology Officer (CTO)
                </div>
                <div className="v-contenent-points">
                  <span>- Lead our tech innovation and development.</span>
                </div>
              </div>
              <div className="j-v-main-contenent-item">
                <div className="content-heading">2. Responsibilities:</div>
                <div className="v-contenent-points">
                  <span>- Shape and implement the company's tech roadmap.</span>
                  <span>
                    - Drive product development and ensure high-quality
                    standards.
                  </span>
                  <span>
                    - Manage the tech team, fostering a culture of collaboration
                    and innovation.
                  </span>
                </div>
              </div>
              <div className="j-v-main-contenent-item">
                <div className="content-heading">3.Qualifications:</div>
                <div className="v-contenent-points">
                  <span> - Proven CTO or executive leadership experience.</span>
                  <span>- Strong tech background and strategic mindset.</span>
                  <span>- Excellent communication and leadership skills.</span>
                </div>
              </div>
              <div className="j-v-main-contenent-item">
                <div className="content-heading">4. Benefits:</div>
                <div className="v-contenent-points">
                  <span>- Competitive salary and benefits package.</span>
                  <span>- Opportunity to drive tech innovation.</span>
                  <span>- Collaborative and dynamic work environment.</span>
                </div>
              </div>
              <div className="j-v-main-contenent-item">
                <div className="content-heading">5. How to Apply:</div>
                <div className="v-contenent-points">
                  <span>- Submit your resume and cover letter.</span>
                  <span>- Showcase your tech leadership experience.</span>
                  <span>
                    - Join us in shaping the future through innovation!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
          <AcceptPopup open={acceptPopup} setOpen={setAcceptPopup} setViewOpen={setOpen}/>
          <RejectPopup open={rejectPopup} setOpen={setRejectPopup} setViewOpen={setOpen}/>
    </>
  );
}
