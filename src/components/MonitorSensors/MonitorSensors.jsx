// MonitorSensors.jsx
import React from "react";
import { Card, Typography, Grid } from "@mui/material";
import LeftColumn from "./LeftColumn/LeftColumn";
import CentralColumn from "./CentralColumn/CentralColumn";
import RightColumn from "./RightColumn/RightColumn";
import styles from "./MonitorSensors.module.css";

/**
 * MonitorSensors component
 * 
 * Displays sensor data in three columns: left, central, and right. Each column
 * contains data specific to a category of sensors. The layout adapts to different
 * screen sizes for improved user experience.
 * 
 * Props:
 * - sensors (object): Contains data for left, central, and right columns.
 */
const MonitorSensors = ({ sensors }) => {
  return (
    <Card className={styles.card}>
      <Typography variant="h6" className={styles.title}>
        Monitor Sensors
      </Typography>
      <Grid container spacing={2} sx={{ display: "flex", alignItems: "stretch" }}>
        <Grid item xs={12} md={12} lg={3} sx={{ display: "flex", flexDirection: "column" }}>
          <LeftColumn sensors={sensors.left} />
        </Grid>
        <Grid item xs={12} md={6} lg={5} sx={{ display: "flex", flexDirection: "column" }}>
          <CentralColumn />
        </Grid>
        <Grid item xs={12} md={6} lg={4} sx={{ display: "flex", flexDirection: "column" }}>
          <RightColumn waterHeat={sensors.waterHeat} valves={sensors.valves} />
        </Grid>
      </Grid>
    </Card>
  );
};

export default MonitorSensors;