import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import SensorItem from './SensorItem/SensorItem';
import styles from './MonitorSensors.module.css';

const sensorsLeft = [
  { name: 'Compart', stat: '102x', color: '#c8f7c5' },
  { name: 'Vents', stat: 'Settings', color: '#c8f7c5', isSwitch: true },
];

const sensorsRight = [
  { name: 'Meteo', stat: '102x', color: '#ffe6a5' },
  { name: 'Irrigation Unit', stat: '102x', color: '#ffe6a5' },
  { name: 'Inputs', stat: '102x', color: '#ffe6a5' },
 
];

const waterHeat = {
  name: 'Water Heat',
  stat: '12°',
  color: '#ffcccb',
  extra: 'Min   Max',
};

const valves = {
  name: 'Valves',
  stat: 'Manual',
  color: '#d9eaf5',
  extra: 'G.H',
};

const MonitorSensors = () => {
  return (
    <Card className={styles.card}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Monitor Sensors
        </Typography>
        <Grid container spacing={2}>
          {/* Columna Izquierda */}
          <Grid item xs={12} md={4}>
            <Box className={styles.sensorGroup} style={{ backgroundColor: '#c8f7c5' }}>
              {sensorsLeft.map((sensor, index) => (
                <SensorItem key={index} {...sensor} />
              ))}
            </Box>
          </Grid>

          {/* Columna Central */}
          <Grid item xs={12} md={4}>
            <Box className={styles.sensorGroup} style={{ backgroundColor: '#ffe6a5' }}>
              {sensorsRight.map((sensor, index) => (
                <SensorItem key={index} {...sensor} />
              ))}
            </Box>
          </Grid>

          {/* Columna Derecha */}
          <Grid item xs={12} md={4}>
            <Box className={styles.sensorGroup}>
              <SensorItem {...waterHeat} />
              <SensorItem {...valves} />
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MonitorSensors;
