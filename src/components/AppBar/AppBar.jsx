// AppBar.jsx
import React from "react";
import { AppBar as MuiAppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./AppBar.module.css";

/**
 * AppBar component
 * 
 * A top navigation bar that includes a menu button and a title.
 * 
 * Props:
 * - onMenuClick (function): Callback function triggered when the menu button is clicked.
 */
const AppBar = ({ onMenuClick }) => {
  return (
    <MuiAppBar position="fixed">
      <Toolbar className={styles.toolbar}>
        <IconButton
          edge="start"
          color="#000000"
          aria-label="menu"
          onClick={onMenuClick}

          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h4"
          component="div"
          className={styles.title}
          sx={{ flexGrow: 1 }}
        >
          Kanut
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
