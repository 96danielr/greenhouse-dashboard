// ./components/GreetingSearch/GreetingSearch.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import SearchBar from '../SearchBar/SearchBar';
import styles from './GreetingSearch.module.css';

const GreetingSearch = ({ user }) => {
  return (
    <Box
      className={styles.greetingRow}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 2,
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      <Box className={styles.greeting}>
        <Typography variant="h4" component="h1" className={styles.heading}>
          Hi {user.name}
        </Typography>
        <Typography variant="body1" component="p">
          Let’s check out your farm metrics
        </Typography>
      </Box>
      <Box className={styles.search}>
        <SearchBar />
      </Box>
    </Box>
  );
};

export default GreetingSearch;
