import "./AppliedJobViewHeader.css";
import bookmark_manager from "../../images/bookmark_manager.png";
import bag from "../../images/1.png";
import check from "../../images/3.png";

function Header({ selected, setSelected }) {
  const handleChange = (v) => {
    if (v !== selected) setSelected(v);
  };
  return (
    <div className="p-manage-head-container">
      <div
        className={`p-h-item ${
          "CandidateDetails" === selected ? "select" : ""
        }`}
        onClick={() => {
          handleChange("CandidateDetails");
        }}
      >
        <div className="p-h-img">
          <img src={bag} alt="" />
        </div>
        <span className="sb">Candidate Details</span>
      </div>
      <div
        className={`p-h-item ${"JobDescription" === selected ? "select" : ""}`}
        onClick={() => {
          handleChange("JobDescription");
        }}
      >
        <div className="p-h-img">
          <img src={check} alt="" />
        </div>
        <span className="sb">Job Description</span>
      </div>
    </div>
  );
}

export default Header;
