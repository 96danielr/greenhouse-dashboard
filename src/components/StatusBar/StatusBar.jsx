// ./components/StatusBar/StatusBar.jsx
import React from "react";
import styles from "./StatusBar.module.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import InfoIcon from "@mui/icons-material/Info";
import { Box, Typography } from "@mui/material";

const StatusBar = ({ statuses }) => {
  return (
    <Box className={styles.statusBar}>
      {statuses.map((status, index) => (
        <Box key={index} className={styles.status}>
          {/* Iconos dinámicos según el label */}
          {status.label === "Active" && (
            <CheckCircleIcon
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
            <InfoIcon className={styles.icon} style={{ color: status.color }} />
          )}
          {/* Texto y conteo */}
          <Typography variant="body2"  style={{ fontWeight: 700 }}>{status.label}</Typography>
          <Box className={styles.count} sx={{ backgroundColor: status.color }}>
            {status.count}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default StatusBar;
