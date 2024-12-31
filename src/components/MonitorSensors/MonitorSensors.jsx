import React from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import SensorItem from "./SensorItem/SensorItem";
import styles from "./MonitorSensors.module.css";
import LeftColumn from "./LeftColumn/LeftColumn";
import CentralColumn from "./CentralColumn/CentralColumn";
import RightColumn from "./RightColumn/RightColumn";

// Datos de los sensores

const sensorsRight = [
  { name: "Meteo", stat: "Main Stat", color: "#ffe6a5", icon: "🌦️" },
  { name: "Irrigation Unit", stat: "Main Stat", color: "#ffe6a5", icon: "💧" },
  { name: "Inputs", stat: "Main Stat", color: "#ffe6a5", icon: "📥" },
  { name: "Events", stat: "Main Stat", color: "#ffe6a5", icon: "📅" },
];

const waterHeat = {
  name: "Water Heat",
  stat: "12°",
  color: "#ffcccb",
  extra: "Min   Max",
  icon: "🔥",
};

const valves = {
  name: "Valves",
  stat: "Manual",
  color: "#d9eaf5",
  extra: "G.H",
  icon: "🔧",
};

const MonitorSensors = ({ sensors }) => {
  return (
    <Card className={styles.card}>
    <Typography variant="h6" className={styles.title}>
      Monitor Sensors
    </Typography>
    <Grid container spacing={2} style={{ display: "flex", alignItems: "stretch" }}>
      {/* Columna Izquierda */}
      <Grid
        item
        xs={12}
        md={12}
        lg={3}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ flexGrow: 1 }}>
          <LeftColumn sensors={sensors.left} />
        </div>
      </Grid>
  
      {/* Columna Central */}
      <Grid
        item
        xs={12}
        md={6}
        lg={5}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ flexGrow: 1 }}>
          <CentralColumn />
        </div>
      </Grid>
  
      {/* Columna Derecha */}
      <Grid
        item
        xs={12}
        md={6}
        lg={4}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ flexGrow: 1 }}>
          <RightColumn />
        </div>
      </Grid>
    </Grid>
  </Card>
  );
};

export default MonitorSensors;
