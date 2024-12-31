/**
 * StatusBar.jsx
 * 
 * A component that displays a dynamic status bar with labeled statuses and counts.
 * Each status is represented by an icon, a label, and a count, with dynamic styling based on the status.
 * 
 * Props:
 * - statuses (Array): Array of status objects. Each object includes:
 *   - label (string): Name of the status.
 *   - color (string): Color associated with the status.
 *   - count (number): Count of items in the status.
 */

import React from "react";
import styles from "./StatusBar.module.css";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Box, Typography } from "@mui/material";

const StatusBar = ({ statuses }) => {
  return (
    <Box className={styles.statusBar}>
      {statuses.map((status, index) => (
        <Box key={index} className={styles.status}>
          {status.label === "Active" && (
            <CheckCircleOutlineOutlinedIcon
              className={styles.icon}
              style={{ color: status.color }}
            />
          )}
          {status.label === "Acquit" && (
            <ErrorOutlineIcon
              className={styles.icon}
              style={{ color: status.color }}
            />
          )}
          {status.label === "On delay" && (
            <InfoOutlinedIcon
              className={styles.icon}
              style={{ color: status.color }}
            />
          )}
          <Typography variant="body2" style={{ fontWeight: 700 }}>
            {status.label}
          </Typography>
          <Box className={styles.count} sx={{ backgroundColor: status.color }}>
            {status.count}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default StatusBar;
