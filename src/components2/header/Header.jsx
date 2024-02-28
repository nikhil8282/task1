import "./header.css";
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
        className="j-item"
        style={{
          color: `${"JobRequirement" === selected ? "#3583F6" : "#0F0F0F"}`,
        }}
        onClick={() => {
          handleChange("JobRequirement");
        }}
      >
        <img src={png1} alt="" />
        <span className="sb">Job Requirements</span>
      </div>
      <div
        className="j-item"
        style={{ color: `${"Accepted" === selected ? "#3583F6" : "#0F0F0F"}` }}
        onClick={() => {
          handleChange("Accepted");
        }}
      >
        <img src={png2} alt="" />
        <span className="sb">Accepted</span>
      </div>
      <div
        className="j-item"
        style={{
          color: `${
            "CompletedRequirement" === selected ? "#3583F6" : "#0F0F0F"
          }`,
        }}
        onClick={() => {
          handleChange("CompletedRequirement");
        }}
      >
        <img src={png3} alt="" />
        <span className="sb">Completed Requirement</span>
      </div>
    </div>
  );
}

export default Header;
