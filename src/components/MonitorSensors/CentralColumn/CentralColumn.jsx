import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import OpacityIcon from "@mui/icons-material/Opacity";
import InputIcon from "@mui/icons-material/Input";
import EventIcon from "@mui/icons-material/Event";
import styles from "./CentralColumn.module.css";

/**
 * CentralColumn Component
 * 
 * This component displays statistics in two columns, with each stat represented by an icon, title, 
 * and value. A divider separates the columns.
 * 
 * @returns {JSX.Element} Rendered CentralColumn component.
 */
const CentralColumn = () => {
  const stats = [
    { icon: <WbSunnyIcon className={styles.icon} />, title: "Meteo", value: "102x" },
    { icon: <OpacityIcon className={styles.icon} />, title: "Irrigation Unit", value: "102x" },
    { icon: <InputIcon className={styles.icon} />, title: "Inputs", value: "102x" },
    { icon: <EventIcon className={styles.icon} />, title: "Events", value: "102x" },
  ];

  return (
    <Card className={styles.card}>
      <Box className={styles.container}>
        <Box className={styles.column}>
          {stats.slice(0, 2).map((stat, index) => (
            <Box key={index} className={styles.statBox}>
              <Box className={styles.titleRow}>
                {stat.icon}
                <Typography className={styles.title}>{stat.title}</Typography>
              </Box>
              <Box className={styles.valueRow}>
                <Typography className={styles.label}>Main Stat</Typography>
                <Typography className={styles.value}>{stat.value}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
        <Box className={styles.divider}></Box>
        <Box className={styles.column}>
          {stats.slice(2).map((stat, index) => (
            <Box key={index} className={styles.statBox}>
              <Box className={styles.titleRow}>
                {stat.icon}
                <Typography className={styles.title}>{stat.title}</Typography>
              </Box>
              <Box className={styles.valueRow}>
                <Typography className={styles.label}>Main Stat</Typography>
                <Typography className={styles.value}>{stat.value}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Card>
  );
};

export default CentralColumn;
