import React from 'react';
import styles from './StatusBar.module.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import InfoIcon from '@mui/icons-material/Info';

const StatusBar = () => {
  return (
    <div className={styles.statusBar}>
      <div className={`${styles.status} ${styles.active}`}>
        <CheckCircleIcon className={styles.icon} />
        <span>Active</span>
        <span className={styles.count}>14</span>
      </div>
      <div className={`${styles.status} ${styles.acquit}`}>
        <ErrorOutlineIcon className={styles.icon} />
        <span>Acquit</span>
        <span className={styles.count}>0</span>
      </div>
      <div className={`${styles.status} ${styles.onDelay}`}>
        <InfoIcon className={styles.icon} />
        <span>On delay</span>
        <span className={styles.count}>1</span>
      </div>
    </div>
  );
};

export default StatusBar;
