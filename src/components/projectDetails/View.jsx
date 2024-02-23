import "./view.css";
import * as React from "react";
import Dialog from "@mui/material/Dialog";

export default function View({ open, setOpen }) {
  return (
    <Dialog
      fullWidth={true}
      maxWidth="xl"
      open={open}
      onClose={() => setOpen(false)}
    >
      <div className="view-section">
        <div className="view-heading">Project Requirement</div>
        <div className="btn-sec">
          <button className="blue-btn">Accept</button>
          <button className="white-btn" onClick={() => setOpen(false)}>Reject</button>
        </div>
        {/* <hr /> */}
        {/* <div className="details-sec">
          </div> */}

        <div className="company-details">
          <div className="dt">
            <span>Company Name</span>
            <span>Krinvi Technologies</span>
          </div>
          <div className="dt">
            <span>Email</span>
            <span>info@krinvitech.com</span>
          </div>
          <div className="dt">
            <span>Phone no</span>
            <span>7895759572</span>
          </div>
        </div>
        <div className="project-details">
          <div className="project-name">
            <span>Project</span>
            <span>FashionHub: E-Commerce Revolution</span>
          </div>
          <div className="project-des">
            <span>Project Description</span>
            <span>
              At FashionHub, we're embarking on a groundbreaking e-commerce
              project that promises to redefine the online fashion experience.
              Our goal is to create a seamless platform that not only showcases
              the latest trends but also provides a personalized and enjoyable
              shopping journey. From intuitive navigation to cutting-edge
              features, FashionHub will set a new standard in the digital
              fashion realm
            </span>
          </div>
          <div className="project-budget">
            <span>budget</span>
            <span>$200</span>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
