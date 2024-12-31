// FarmsList.jsx
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import GrassIcon from "@mui/icons-material/Grass";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import NaturePeopleIcon from "@mui/icons-material/NaturePeople";
import SpaIcon from "@mui/icons-material/Spa";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import styles from "./FarmsList.module.css";

/**
 * FarmsList component
 * 
 * Displays a list of farms with their status. Each farm is represented by an icon,
 * its name, and a status icon that indicates whether the farm is active, delayed,
 * or has an error.
 * 
 * Props:
 * - farms (array): List of farm objects with `name` and `status` properties.
 */
const farmIcons = [
  AgricultureIcon,
  GrassIcon,
  LocalFloristIcon,
  NaturePeopleIcon,
  SpaIcon,
];

const FarmsList = ({ farms }) => {
  const getRandomIcon = () => {
    const Icon = farmIcons[Math.floor(Math.random() * farmIcons.length)];
    return <Icon />;
  };

  return (
    <Card className={styles.card}>
      <CardContent>
        <Typography variant="h6" className={styles.title}>
          Your Farms (GSC Tabs)
        </Typography>
        <List className={styles.listContainer}>
          {farms.map((farm, index) => {
            const stateIcon =
              farm.status === "Active" ? (
                <CheckCircleOutlineOutlinedIcon className={styles.stateIcon} />
              ) : farm.status === "On delay" ? (
                <InfoOutlinedIcon className={styles.stateIcon} />
              ) : (
                <ErrorOutlineIcon className={styles.stateIcon} />
              );

            return (
              <ListItem
                key={index}
                className={styles.listItem}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex", alignItems: "start" }}>
                  <ListItemIcon className={styles.icon}>
                    {getRandomIcon()}
                  </ListItemIcon>
                  <Typography className={styles.name}>{farm.name}</Typography>
                </div>
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
