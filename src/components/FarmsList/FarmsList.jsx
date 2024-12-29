import React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import GrassIcon from "@mui/icons-material/Grass";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import NaturePeopleIcon from "@mui/icons-material/NaturePeople";
import SpaIcon from "@mui/icons-material/Spa";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InfoIcon from "@mui/icons-material/Info";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import styles from "./FarmsList.module.css";

// Lista de íconos aleatorios
const farmIcons = [
  AgricultureIcon,
  GrassIcon,
  LocalFloristIcon,
  NaturePeopleIcon,
  SpaIcon,
];

const FarmsList = ({ farms }) => {
  // Función para obtener un ícono aleatorio
  const getRandomIcon = () => {
    const Icon = farmIcons[Math.floor(Math.random() * farmIcons.length)];
    return <Icon />;
  };

  return (
    <Card className={styles.card}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Your Farms (GSC Tabs)
        </Typography>
        <List className={styles.listContainer}>
          {farms.map((farm, index) => {
            // Determinamos clase y estado dinámico
            const statusClass =
              farm.status === "Active"
                ? styles.active
                : farm.status === "On delay"
                ? styles.delayed
                : styles.inactive;

            const stateIcon =
              farm.status === "Active" ? (
                <CheckCircleIcon className={styles.stateIcon} />
              ) : farm.status === "On delay" ? (
                <InfoIcon className={styles.stateIcon} />
              ) : (
                <ErrorOutlineIcon className={styles.stateIcon} />
              );

            return (
              <ListItem key={index} className={styles.listItem}>
                {/* Ícono y nombre de la finca */}
                <div style={{ display: "flex", alignItems: "center" }}>
                  <ListItemIcon className={`${styles.icon} ${statusClass}`}>
                    {getRandomIcon()} {/* Ícono aleatorio */}
                  </ListItemIcon>
                  <Typography className={`${styles.name} ${statusClass}`}>
                    {farm.name}
                  </Typography>
                </div>
                {/* Estado de la finca */}
                {stateIcon}
              </ListItem>
            );
          })}
        </List>
      </CardContent>
    </Card>
  );
};

export default FarmsList;
