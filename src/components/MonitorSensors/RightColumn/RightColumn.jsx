import React from "react";
import { Card, CardContent, Typography, Box, Link } from "@mui/material";
import ThermostatOutlinedIcon from '@mui/icons-material/ThermostatOutlined';
import PlumbingIcon from "@mui/icons-material/Plumbing"; // Ícono para Valves
import styles from "./RightColumn.module.css";

const RightColumn = () => {
  return (
    <Box className={styles.container}>
      {/* Sección Water Heat */}
      <Card className={`${styles.card} ${styles.waterHeat}`}>
        <CardContent>
          <Box className={styles.header}>
            <ThermostatOutlinedIcon  className={`${styles.icon} ${styles.redIcon}`} />
            <Typography className={`${styles.title} ${styles.redText}`}>
              Water Heat
            </Typography>
          </Box>
          <Typography className={styles.temperature}>12°</Typography>
          <Box className={styles.statsRow}>
            <Typography className={styles.label}>Min</Typography>
            <Typography className={styles.label}>Max</Typography>
          </Box>
          <Link href="#" underline="hover" className={styles.settingsLink}>
            Settings
          </Link>
        </CardContent>
      </Card>

      {/* Sección Valves */}
      <Card className={`${styles.card} ${styles.valves}`}>
        <CardContent>
          <Box className={styles.header}>
            <PlumbingIcon className={`${styles.icon} ${styles.blueIcon}`} />
            <Typography className={`${styles.title} ${styles.blueText}`}>
              Valves
            </Typography>
          </Box>
          <Typography className={styles.graphLabel}>G.H</Typography>
          <Box className={styles.graphPlaceholder}>
            {/* Aquí puedes insertar un gráfico o diseño de válvulas */}
          </Box>
          <Box className={styles.linksRow}>
            <Link href="#" underline="hover" className={styles.manualLink}>
              Manual
            </Link>
            <Link href="#" underline="hover" className={styles.settingsLink}>
              Settings
            </Link>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RightColumn;
