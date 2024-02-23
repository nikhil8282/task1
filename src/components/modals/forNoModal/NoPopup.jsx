import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import "./hireModal.css";
export default function HireModal({}) {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open max-width dialog
      </Button>
      <Dialog fullWidth="true" maxWidth="sm" open={open} onClose={handleClose}>
        <div className="hire-modal-container">
          <div className="hire-modal-text">
            Are you sure the ticket is resolved ?
          </div>
          <div className="hire-modal-btn">
            <button>Yes</button>
            <button>No</button>
          </div>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
