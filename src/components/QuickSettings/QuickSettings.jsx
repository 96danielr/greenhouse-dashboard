import React from "react";
import { Card, CardContent, Typography, Switch, Link } from "@mui/material";
import EastIcon from "@mui/icons-material/East"; // Importamos un ícono de flecha más larga
import styles from "./QuickSettings.module.css";

const QuickSettings = () => {
  return (
    <Card className={styles.card}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Quick Program Settings
        </Typography>
        <div className={styles.switchContainer}>
          <Typography>Group Start</Typography>
          <Switch color="primary" />
        </div>
        <div className={styles.linkContainer}>
          <Link href="#" underline="none" className={styles.linkText}>
            Settings
          </Link>
          <EastIcon className={styles.arrowIcon} /> {/* Ícono de flecha más larga */}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickSettings;
