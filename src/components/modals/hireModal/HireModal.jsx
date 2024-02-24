import Dialog from "@mui/material/Dialog";
import "./hireModal.css";
import { useState } from "react";
export default function HireModal({ open, setOpen }) {
  const [noPopup, setNoPopup] = useState(false);
  const [yesPopup, setYesPopup] = useState(false);
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog fullWidth="true" maxWidth="sm" open={open} onClose={handleClose}>
        <div className="hire-modal-container">
          <div className="hire-modal-text">
            Are you sure the ticket is resolved ?
          </div>
          <div className="hire-modal-btn">
            <button
              onClick={() => {
                setYesPopup(true);
                setOpen(false);
              }}
            >
              Yes
            </button>
            <button
              onClick={() => {
                setNoPopup(true);
                setOpen(false);
              }}
            >
              No
            </button>
          </div>
        </div>
      </Dialog>
      {noPopup && (
        <Dialog
          fullWidth="true"
          maxWidth="sm"
          open={noPopup}
          onClose={() => {
            setNoPopup(false);
          }}
        >
          <div className="hire-modal-container">
            <div className="hire-modal-text">
              Do you want to mark this ticket as inprogress?
            </div>
            <div className="hire-modal-btn">
              <button>Yes</button>
              <button
                onClick={() => {
                  setNoPopup(false);
                }}
              >
                No
              </button>
            </div>
          </div>
        </Dialog>
      )}
      {yesPopup && (
        <Dialog
          fullWidth="true"
          maxWidth="sm"
          open={yesPopup}
          onClose={() => {
            setYesPopup(false);
          }}
        >
          <div className="hire-modal-container">
            <div className="hire-modal-text">
              Do you want to mark this ticket as closed?
            </div>
            <div className="hire-modal-btn">
              <button>Yes</button>
              <button
                onClick={() => {
                  setYesPopup(false);
                }}
              >
                No
              </button>
            </div>
          </div>
        </Dialog>
      )}
    </>
  );
}
