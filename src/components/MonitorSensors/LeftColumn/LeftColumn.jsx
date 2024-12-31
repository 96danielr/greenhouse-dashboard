import React from "react";
import { Box, Typography, Switch } from "@mui/material";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import styles from "./LeftColumn.module.css";

const LeftColumn = ({ sensors }) => {
  return (
    <Box className={styles.container}>
      {/* Sección 1: COMPART */}
      <Box className={styles.section}>
        <Box className={styles.row}>
          <Box className={styles.leftAligned}>
            <span className={styles.icon}>
              <ShareOutlinedIcon />
            </span>
            <Typography variant="subtitle1" className={styles.title}>
              Compart
            </Typography>
          </Box>
        </Box>
        <Box className={styles.row}>
          <Typography variant="body2" className={styles.label}>
            Main Stat
          </Typography>
          <Typography variant="body2" className={styles.value}>
            {sensors[0].stat}
          </Typography>
        </Box>
      </Box>

      {/* Sección 2: VENTS */}
      <Box className={styles.section}>
        <Box className={styles.row}>
          <Box className={styles.leftAligned}>
            <span className={styles.icon}>
              <EventOutlinedIcon />
            </span>
            <Typography variant="subtitle1" className={styles.title}>
              Vents
            </Typography>
          </Box>
          <Switch color="primary" className={styles.switch} />
        </Box>
        <Box className={styles.row}>
          <Typography variant="body2" className={styles.label}>
            Settings
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LeftColumn;
