import React from 'react';
import { Card, CardContent, Typography, Switch, Link } from '@mui/material';
import styles from './QuickSettings.module.css';

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
        <Link href="#" underline="hover" className={styles.settingsLink}>
          Settings
        </Link>
      </CardContent>
    </Card>
  );
};

export default QuickSettings;
