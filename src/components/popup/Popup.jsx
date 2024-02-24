import Dialog from "@mui/material/Dialog";
import "./popup.css";
export default function HireModal({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog fullWidth="true" maxWidth="sm" open={open} onClose={handleClose}>
        <div className="hire-modal-container">
          <div className="hire-modal-text">
            Are you sure the project requirement is completed?
          </div>
          <div className="hire-modal-btn">
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
