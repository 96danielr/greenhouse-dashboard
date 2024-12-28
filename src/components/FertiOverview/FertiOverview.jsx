import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import styles from './FertiOverview.module.css';

const FertiOverview = () => {
  return (
    <Card className={styles.card}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Ferti Overview
        </Typography>
        <Box className={styles.content}>
          <Box className={styles.nextFertilizations}>
            <Typography variant="subtitle2">Next Fertilizations</Typography>
            <Box className={styles.dates}>
              <Typography className={styles.date}>June 15</Typography>
              <Typography className={styles.date}>June 30</Typography>
              <Typography className={styles.date}>July 15</Typography>
            </Box>
          </Box>
          <Box className={styles.fertilizerStock}>
            <Typography variant="subtitle2">Fertiliser Stock</Typography>
            {/* Aquí puedes insertar un gráfico de barras real */}
            <Typography className={styles.placeholder}>[Bar Chart Placeholder]</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default FertiOverview;
