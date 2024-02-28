import Dialog from "@mui/material/Dialog";
import "./acceptPopup.css";
export default function HireModal({ open, setOpen,setViewOpen }) {
  const handleClose = () => {
    setOpen(false);
    
  };

  return (
    <>
      <Dialog maxWidth="sm" open={open} onClose={handleClose}>
        <div className="popup-container">
          <div className="popup-container-text">
          Are you sure you want to consider this company?
          </div>
          <div className="popup-container-btn">
            <button
              onClick={() => {
                setOpen(false);
                setViewOpen(false);
              }}
            >
              Yes
            </button>
            <button
              onClick={() => {
                setOpen(false);
                setViewOpen(false);
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
