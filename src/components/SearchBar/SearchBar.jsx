import React from 'react';
import { TextField, Button } from '@mui/material';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <TextField
        variant="outlined"
        placeholder="Search for specific data"
        size="small"
        className={styles.input}
      />
      <Button variant="contained" color="primary" className={styles.button}>
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
