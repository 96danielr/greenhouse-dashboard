/**
 * QuickSettings.jsx
 * 
 * Component for displaying quick program settings. This includes a toggle switch
 * for enabling or disabling features and a link to navigate to the settings page.
 * 
 * Props:
 * - None
 */

import React, { useState } from "react";
import { Card, CardContent, Typography, Switch, Link } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import styles from "./QuickSettings.module.css";
import SettingsPopup from "../SettingsPopup/SettingsPopup";

const QuickSettings = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    console.log(`Toggle is now: ${!isToggled ? "ON" : "OFF"}`);
    if (!isToggled) {
      console.log("Activating automatic irrigation system...");
    } else {
      console.log("Deactivating irrigation system. Manual operation enabled.");
    }
  };

  return (
    <Card className={styles.card}>
      <CardContent>
        <Typography variant="h6" className={styles.title}>
          Quick Program Settings
        </Typography>
        <div className={styles.switchContainer}>
          <Typography>Group Start</Typography>
          <Switch
            checked={isToggled}
            onChange={handleToggle}
            sx={{
              "& .MuiSwitch-switchBase.Mui-checked": {
                color: "#3F52EF",
              },
              "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                backgroundColor: "#1A1A60",
              },
              "& .MuiSwitch-track": {
                backgroundColor: "#1A1A60",
              },
            }}
          />
        </div>
        <div className={styles.linkContainer}>
          <Link href="#" underline="none" className={styles.linkText} onClick={openDialog}>
            Settings
          </Link>
          <EastIcon className={styles.arrowIcon} />
        </div>
      </CardContent>

      <SettingsPopup open={isDialogOpen} onClose={closeDialog} />
    </Card>
  );
};

export default QuickSettings;
