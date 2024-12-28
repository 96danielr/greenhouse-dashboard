import React from 'react';
import { Box, Typography, Switch } from '@mui/material';
import styles from './SensorItem.module.css';

const SensorItem = ({ name, stat, color, isSwitch }) => {
  return (
    <Box className={styles.card} style={{ backgroundColor: color }}>
      <Typography variant="subtitle1" className={styles.name}>
        {name}
      </Typography>
      <Typography variant="body2" className={styles.stat}>
        {stat}
      </Typography>
      {isSwitch && <Switch color="primary" className={styles.switch} />}
    </Box>
  );
};

export default SensorItem;
