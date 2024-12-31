import React from "react";
import { Box, Typography, Switch } from "@mui/material";
import styles from "./SensorItem.module.css";

const SensorItem = ({ name, stat, color, isSwitch, icon }) => {
  return (
    <Box className={styles.sensorItem} style={{ backgroundColor: color }}>
      <Box className={styles.sensorName}>
        <span className={styles.icon}>{icon}</span>
        <Typography variant="subtitle1" className={styles.name}>
          {name}
        </Typography>
      </Box>
      <Box>
        <Typography variant="body2" className={styles.stat}>
          {stat}
        </Typography>
        {isSwitch && <Switch color="primary" className={styles.switch} />}
      </Box>
    </Box>
  );
};

export default SensorItem;
