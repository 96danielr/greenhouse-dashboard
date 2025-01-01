import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, TextField, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./SettingsPopup.module.css";

const SettingsPopup = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle className={styles.title}>Settings</DialogTitle>
      <DialogContent className={styles.content}>
        <Typography variant="body1" className={styles.text}>
          Configure your greenhouse settings:
        </Typography>
        
        <TextField
          label="Desired Temperature (°C)"
          type="number"
          fullWidth
          className={styles.field}
          defaultValue={25}
        />
        <TextField
          label="Relative Humidity (%)"
          type="number"
          fullWidth
          className={styles.field}
          defaultValue={60}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} className={styles.button}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

SettingsPopup.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SettingsPopup;
