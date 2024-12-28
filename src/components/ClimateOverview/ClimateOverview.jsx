import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import styles from './ClimateOverview.module.css';

const ClimateOverview = () => {
  return (
    <Card className={styles.card}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Climate Overview
        </Typography>
        <Box className={styles.content}>
          <Box className={styles.iconBox}>
            <span className={styles.icon}>☀️</span> {/* Representa el ícono de sol */}
            <Typography variant="body2" className={styles.text}>
              Light Intensity
            </Typography>
            <Typography variant="h6" className={styles.stat}>
              50 Watts
            </Typography>
          </Box>
          <Box className={styles.graph}>
            {/* Aquí puedes insertar un gráfico real usando librerías como Recharts */}
            <Typography variant="body2" className={styles.placeholder}>
              [Graph Placeholder]
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ClimateOverview;
