import React from "react";
import { Dialog, DialogContent } from "@mui/material";
import styles from "./ChatPopup.module.css";

function ChatPopup({ open, title, message, onClose }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        style: {
          borderRadius: "16px",
          backgroundColor: "#f8f1ff",
        },
      }}
    >
      <div className={styles.popup}>
        <h2 className={styles.popupTitle}>{title}</h2>
        <DialogContent className={styles.popupContent}>
          {message}
        </DialogContent>
        <button className={styles.popupButton} onClick={onClose}>
          Close
        </button>
      </div>
    </Dialog>
  );
}

export default ChatPopup;
