/**
 * SearchBar.jsx
 * 
 * A responsive search bar component that includes a text input and a button with an icon.
 * It allows users to search for specific data.
 * 
 * Props:
 * - None
 */

import React from "react";
import { TextField } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <TextField
        variant="standard"
        placeholder="Search for specific data"
        InputProps={{
          disableUnderline: true,
          style: {
            borderRadius: "28px",
            padding: "12px 20px",
            backgroundColor: "white",
            boxShadow: "none",
            fontSize: "16px",
            height: "54px",
          },
        }}
        className={styles.input}
      />
      <button className={styles.button}>
        <SearchIcon className={styles["button-icon"]} />
      </button>
    </div>
  );
};

export default SearchBar;
