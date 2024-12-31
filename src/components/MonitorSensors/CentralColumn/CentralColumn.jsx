import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny"; // Ícono para Meteo
import OpacityIcon from "@mui/icons-material/Opacity"; // Ícono para Irrigation Unit
import InputIcon from "@mui/icons-material/Input"; // Ícono para Inputs
import EventIcon from "@mui/icons-material/Event"; // Ícono para Events
import styles from "./CentralColumn.module.css";

const CentralColumn = () => {
  const stats = [
    { icon: <WbSunnyIcon className={styles.icon} />, title: "Meteo", value: "102x" },
    { icon: <OpacityIcon className={styles.icon} />, title: "Irrigation Unit", value: "102x" },
    { icon: <InputIcon className={styles.icon} />, title: "Inputs", value: "102x" },
    { icon: <EventIcon className={styles.icon} />, title: "Events", value: "102x" },
  ];

  return (
    <Card className={styles.card}>
      <CardContent>
        <Box className={styles.container}>
          {/* Columna izquierda */}
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

          {/* Línea divisoria */}
          <Box className={styles.divider}></Box>

          {/* Columna derecha */}
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
      </CardContent>
    </Card>
  );
};

export default CentralColumn;
