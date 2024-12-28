import React from "react";
import styles from "./StatusBar.module.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import InfoIcon from "@mui/icons-material/Info";

const StatusBar = () => {
  const statuses = [
    {
      label: "Active",
      count: 14,
      icon: (
        <CheckCircleIcon
          className={styles.icon}
          style={{ color: "#28a745" }}
        />
      ),
      color: "#28a745",
    },
    {
      label: "Acquit",
      count: 0,
      icon: (
        <ErrorOutlineIcon
          className={styles.icon}
          style={{ color: "#ffc107" }}
        />
      ),
      color: "#ffc107",
    },
    {
      label: "On delay",
      count: 1,
      icon: (
        <InfoIcon
          className={styles.icon}
          style={{ color: "#007bff" }}
        />
      ),
      color: "#007bff",
    },
  ];

  return (
    <div className={styles.statusBar}>
      {statuses.map((status, index) => (
        <div key={index} className={styles.status}>
          {status.icon}
          <span>{status.label}</span>
          <span
            className={styles.count}
            style={{ backgroundColor: status.color }}
          >
            {status.count}
          </span>
        </div>
      ))}
    </div>
  );
};

export default StatusBar;
