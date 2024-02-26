import "./header.css";
import bookmark_manager from "../../images/bookmark_manager.png";
import assignment from "../../images/assignment.png";
function Header({ selected, setSelected }) {
  const handleChange = (v) => {
    if (v !== selected) setSelected(v);
  };
  return (
    <div className="p-manage-head-container">
      <div
        className={`p-h-item ${"Manage" === selected ? "select" : ""}`}
        onClick={() => {
          handleChange("Manage");
        }}
      >
        <div className="p-h-img">

        <img src={bookmark_manager} alt="" />
        </div>
        <span className="sb">Manage</span>
      </div>
      <div
        className={`p-h-item ${"CompanyRequirement" === selected ? "select" : ""}`}
        onClick={() => {
          handleChange("CompanyRequirement");
        }}
      >
        <div className="p-h-img">

        <img src={assignment} alt="" />
        </div>
        <span className="sb">Company Requirement</span>
      </div>
    </div>
  );
}

export default Header;
