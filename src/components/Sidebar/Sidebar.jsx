// Sidebar.jsx
import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";

import styles from "./Sidebar.module.css";

/**
 * Sidebar component
 * 
 * A collapsible sidebar that provides navigation to various sections of the application.
 * Features responsive design for smaller screens.
 * 
 * Props:
 * - isOpen (boolean): Determines whether the sidebar is visible or hidden.
 */
const Sidebar = ({ isOpen }) => {
  return (
    <aside
      className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ""}`}
    >
      <div>
        <List>
          <ListItem button>
            <ListItemIcon>
              <DashboardOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AccountCircleOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SettingsOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Parameters" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ContactSupportOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </div>
    </aside>
  );
};

export default Sidebar;
