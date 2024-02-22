import * as React from "react";
import "./view.css";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs({ open, handleClose }) {
  return (
    <React.Fragment>
      {/* <Button variant="outlined">Open dialog</Button> */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <div className="view-section">
          <h3>Project Requirement</h3>
          <div className="btn-sec">
            <button>Accept</button>
            <button>Reject</button>
          </div>
          {/* <hr /> */}
          {/* <div className="details-sec">
          </div> */}
          <div className="h-line"></div>
          <div className="details">
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
        </div>
      </BootstrapDialog>
    </React.Fragment>
  );
}
