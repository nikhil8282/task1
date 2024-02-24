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
      <Dialog maxWidth="sm" open={open} onClose={handleClose}>
        <div className="popup-container">
          <div className="popup-container-text">
            Are you sure the ticket is resolved ?
          </div>
          <div className="popup-container-btn">
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
          maxWidth="sm"
          open={noPopup}
          onClose={() => {
            setNoPopup(false);
          }}
        >
          <div className="popup-container">
            <div className="popup-container-text">
              Do you want to mark this ticket as inprogress?
            </div>
            <div className="popup-container-btn">
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
          maxWidth="sm"
          open={yesPopup}
          onClose={() => {
            setYesPopup(false);
          }}
        >
          <div className="popup-container">
            <div className="popup-container-text">
              Do you want to mark this ticket as closed?
            </div>
            <div className="popup-container-btn">
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
