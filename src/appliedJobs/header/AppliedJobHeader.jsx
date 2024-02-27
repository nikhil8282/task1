import "./AppliedJobHeader.css";
import png1 from "../../images/1.png";
import png2 from "../../images/2.png";
import png3 from "../../images/3.png";
function Header({ selected, setSelected }) {
  const handleChange = (v) => {
    if (v !== selected) setSelected(v);
  };
  return (
    <div className="hire-head-container">
      <div
        className={`h-item ${"AppliedJobs" === selected ? "select" : ""}`}
        onClick={() => {
          handleChange("AppliedJobs");
        }}
      >
        <img src={png1} alt="" />
        <span className="sb">Applied Jobs</span>
      </div>
      <div
        className={`h-item ${"Shortlisted" === selected ? "select" : ""}`}
        onClick={() => {
          handleChange("Shortlisted");
        }}
      >
        <img src={png2} alt="" />
        <span className="sb">Shortlisted</span>
      </div>
      <div
        className={`h-item ${
          "Rejected" === selected ? "select" : ""
        }`}
        onClick={() => {
          handleChange("Rejected");
        }}
      >
        <img src={png3} alt="" />
        <span className="sb">Rejected</span>
      </div>
    </div>
  );
}

export default Header;
