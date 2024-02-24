import Dialog from "@mui/material/Dialog";
import "./popup.css";
export default function HireModal({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog maxWidth="sm" open={open} onClose={handleClose}>
        <div className="popup-container">
          <div className="popup-container-text">
            Are you sure the project requirement is completed?
          </div>
          <div className="popup-container-btn">
            <button
              onClick={() => {
                setOpen(false);
              }}
            >
              Yes
            </button>
            <button
              onClick={() => {
                setOpen(false);
              }}
            >
              No
            </button>
          </div>
        </div>
      </Dialog>
    </>
  );
}
