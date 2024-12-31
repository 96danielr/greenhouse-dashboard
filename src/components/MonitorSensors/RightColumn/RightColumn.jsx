// RightColumn.jsx
import React from "react";
import { Card, CardContent, Typography, Box, Link } from "@mui/material";
import ThermostatOutlinedIcon from "@mui/icons-material/ThermostatOutlined";
import PlumbingIcon from "@mui/icons-material/Plumbing";
import styles from "./RightColumn.module.css";
import ValveGraph from "./ValveGraph/ValveGraph";

/**
 * RightColumn component
 * 
 * Displays sections for "Water Heat" and "Valves" with respective data and actions.
 * 
 * Props:
 * - waterHeat (object): Contains `current`, `min`, and `max` temperatures for water heat.
 */
const RightColumn = ({ waterHeat }) => {
  return (
    <Box className={styles.container}>
      <Card className={`${styles.card} ${styles.waterHeat}`}>
        <CardContent className={styles.header}>
          <Box className={styles.content}>
            <Box className={styles.statsRowOne}>
              <ThermostatOutlinedIcon className={`${styles.icon} ${styles.redIcon}`} />
              <Typography className={`${styles.title} ${styles.redText}`}>
                Water Heat
              </Typography>
            </Box>
            <Box className={styles.statsRow}>
              <Typography className={styles.temperature}>
                {waterHeat.current}°
              </Typography>
              <Box className={styles.linksRow}>
                <Box className={styles.values}>
                  <Typography>
                    Min
                    <Box className={styles.valueBox}>{waterHeat.min}°</Box>
                  </Typography>
                  <Typography>
                    Max
                    <Box className={styles.valueBox}>{waterHeat.max}°</Box>
                  </Typography>
                </Box>
                <Link href="#" underline="hover" className={styles.settingsLink}>
                  Settings
                </Link>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
      <Card className={`${styles.card} ${styles.valves}`}>
        <CardContent className={styles.header}>
          <Box className={styles.content}>
            <Box className={styles.statsRowOne}>
              <PlumbingIcon className={`${styles.icon} ${styles.blueIcon}`} />
              <Typography className={`${styles.title} ${styles.blueText}`}>
                Valves
              </Typography>
            </Box>
            <Box className={styles.statsRow}>
              <Box className={styles.graphPlaceholder}>
                <ValveGraph />
              </Box>
              <Box className={styles.linksRow}>
                <Link href="#" underline="hover" className={styles.settingsLink}>
                  Manual
                </Link>
                <Link href="#" underline="hover" className={styles.settingsLink}>
                  Settings
                </Link>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RightColumn;
