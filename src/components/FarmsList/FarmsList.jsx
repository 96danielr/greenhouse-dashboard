import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';
import styles from './FarmsList.module.css';

const farms = [
  { name: 'Subachoque', status: 'active' },
  { name: 'Facatativá', status: 'active' },
  { name: 'El Rosal', status: 'inactive' },
];

const FarmsList = () => {
  return (
    <Card className={styles.card}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Your Farms (GSC Tabs)
        </Typography>
        <List className={styles.listContainer}>
          {farms.map((farm, index) => (
            <ListItem key={index} className={styles.listItem}>
              <ListItemIcon>
                <RoomIcon className={farm.status === 'active' ? styles.icon : styles.inactive} />
              </ListItemIcon>
              <ListItemText primary={farm.name} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default FarmsList;
