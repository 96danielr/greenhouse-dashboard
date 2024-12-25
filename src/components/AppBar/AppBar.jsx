import React from 'react';
import { AppBar as MuiAppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Importar el ícono de menú
import styles from './AppBar.module.css';

const AppBar = ({ onMenuClick }) => {
  return (
    <MuiAppBar position="fixed"> {/* Fijo para que quede siempre arriba */}
      <Toolbar className={styles.toolbar}>
        <IconButton
          edge="start"
          color="black"
          aria-label="menu"
          onClick={onMenuClick} // Llamar la función de abrir/cerrar
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h4" component="div" className={styles.title} sx={{ flexGrow: 1 }}>
          Kanut
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
