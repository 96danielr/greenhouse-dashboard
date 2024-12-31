// GreetingSearch.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import SearchBar from '../SearchBar/SearchBar';
import styles from './GreetingSearch.module.css';

/**
 * GreetingSearch component
 * 
 * Displays a personalized greeting and a search bar. Adapts layout responsively based on screen size.
 * 
 * Props:
 * - user (object): Contains user information such as `name`.
 */
const GreetingSearch = ({ user }) => {
  return (
    <Box
      className={styles.greetingRow}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 2,
        flexDirection: { xs: 'column', lg: 'row' },
      }}
    >
      <Box className={styles.greeting}>
        <Typography component="h1" className={styles.heading}>
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
