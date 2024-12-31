import React from "react";
import { Box, Typography, Switch } from "@mui/material";
import styles from "./LeftColumn.module.css";

const LeftColumn = ({ sensors }) => {
  return (
    <Box className={styles.container}>
      {sensors.map((sensor, index) => (
        <Box key={index} className={styles.section}>
          <Box className={styles.row}>
            <Box className={styles.leftAligned}>
              <span className={styles.icon}>{sensor.icon}</span>
              <Typography variant="subtitle1" className={styles.title}>
                {sensor.name}
              </Typography>
            </Box>
            {sensor.isSwitch && <Switch color="primary" className={styles.switch} />}
          </Box>
          <Box className={styles.row}>
            <Typography variant="body2" className={styles.label}>
              {sensor.stat === "Settings" ? "Settings" : "Main Stat"}
            </Typography>
            {sensor.stat !== "Settings" && (
              <Typography variant="body2" className={styles.value}>
                {sensor.stat}
              </Typography>
            )}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default LeftColumn;
