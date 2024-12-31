import React from "react";
import { Card, CardContent, Typography, Switch, Link } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import styles from "./QuickSettings.module.css";

const QuickSettings = () => {
  return (
    <Card className={styles.card}>
      <CardContent>
        <Typography variant="h6" className={styles.title}>
          Quick Program Settings
        </Typography>
        <div className={styles.switchContainer}>
          <Typography>Group Start</Typography>
          <Switch
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
          <Link href="#" underline="none" className={styles.linkText}>
            Settings
          </Link>
          <EastIcon className={styles.arrowIcon} />
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickSettings;
