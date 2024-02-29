import React, { useState } from "react";
import bookmark_manager from "../../images/bookmark_manager.png";
import assignment from "../../images/assignment.png";
import check from "../../images/check.png";
import back from "../../images/back.png";
import businessman from "../../images/Businessman.png";
import AdminNavbar from "../../components/admin_navbar/AdminNavbar";
// import JobRequirementList from "../../components2/jobRequirement/jobRequirementList";
import "./jobRequirementManage.css";
function Main() {
  const [selected, setSelected] = useState("Manage");
  // const [selected, setSelected] = useState("JobRequirement");
  // const [openPopup, setOpenPopup] = useState(false);
  // const [openView, setOpenView] = useState(false);

  const handleChange = (v) => {
    if (v !== selected) setSelected(v);
  };

  return (
    <>
      <AdminNavbar />
      {/* <Header setSelected={setSelected} selected={selected} /> */}
      <div className="comon-header" style={{ margin: "20px 40px 0px 40px" }}>
        <div
          className="c-h-item"
          style={{
            color: `${"Manage" === selected ? "#3583F6" : "#0F0F0F"}`,
          }}
          onClick={() => {
            handleChange("Manage");
          }}
        >
          <img src={bookmark_manager} alt="" />

          <span className="sb">Manage</span>
        </div>
        <div
          className="c-h-item"
          style={{
            color: `${
              "CompanyRequirement" === selected ? "#3583F6" : "#0F0F0F"
            }`,
          }}
          onClick={() => {
            handleChange("CompanyRequirement");
          }}
        >
          <img src={assignment} alt="" />
          <span className="sb">Company Requirement</span>
        </div>
      </div>
      {selected === "Manage" ? (
        <div className="j-r-m-main">
          {/* <Manage /> */}
          <div className="j-manage-container">
            <div div className="j-m-items">
              <div className="j-m-item-first">
                <span>React Developer</span>
              </div>
              <div className="j-m-item-middle">
                <span>Date</span>
                <div className="j-m-item-button">
                  <span>20/01/2024</span>
                  <img src={back} />
                </div>
              </div>

              <div className="j-m-item-last">
                <button className="undo-btn">Undo</button>
                <div className="check-img">
                  <img src={check} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="j-r-c-main">
          {/* <CompanyRequirement /> */}
          <div className="j-c-container">
            <div div className="j-c-nav">
              <div className="j-c-nav-first">
                <div className="j-c-nav-first-img">
                  <img src={businessman} alt="" />
                </div>
                <span>React Developer</span>
              </div>
              <div className="j-c-nav-second">
                <div className="j-c-nav-second-item">
                  <span>Experience req</span>
                  <span>Intern</span>
                </div>
                <div className="j-c-nav-second-item">
                  <span>Date of joining</span>
                  <span>25/04/2024</span>
                </div>
                <div className="j-c-nav-second-item">
                  <span>No of Positions</span>
                  <span>Intern</span>
                </div>
              </div>
            </div>
            <div className="j-c-main">
              <div className="j-c-main-first">
                <span>Budget</span>
                <span>$200</span>
              </div>
              <div className="j-c-main-second">
                <div className="j-c-main-des">Description</div>
                <div className="j-c-main-second-contenent">
                  <div className="j-c-main-contenent-item">
                    <div className="content-heading">
                      1. Position:Chief Technology Officer (CTO)
                    </div>
                    <div className="contenent-points">
                      <span>- Lead our tech innovation and development.</span>
                    </div>
                  </div>
                  <div className="j-c-main-contenent-item">
                    <div className="content-heading">2. Responsibilities:</div>
                    <div className="contenent-points">
                      <span>
                        - Shape and implement the company's tech roadmap.
                      </span>
                      <span>
                        - Drive product development and ensure high-quality
                        standards.
                      </span>
                      <span>
                        - Manage the tech team, fostering a culture of
                        collaboration and innovation.
                      </span>
                    </div>
                  </div>
                  <div className="j-c-main-contenent-item">
                    <div className="content-heading">3.Qualifications:</div>
                    <div className="contenent-points">
                      <span>
                        {" "}
                        - Proven CTO or executive leadership experience.
                      </span>
                      <span>
                        - Strong tech background and strategic mindset.
                      </span>
                      <span>
                        - Excellent communication and leadership skills.
                      </span>
                    </div>
                  </div>
                  <div className="j-c-main-contenent-item">
                    <div className="content-heading">4. Benefits:</div>
                    <div className="contenent-points">
                      <span>- Competitive salary and benefits package.</span>
                      <span>- Opportunity to drive tech innovation.</span>
                      <span>- Collaborative and dynamic work environment.</span>
                    </div>
                  </div>
                  <div className="j-c-main-contenent-item">
                    <div className="content-heading">5. How to Apply:</div>
                    <div className="contenent-points">
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
        </div>
      )}
    </>
  );
}

export default Main;
