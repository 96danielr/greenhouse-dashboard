// FertiOverview.jsx
import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import styles from "./FertiOverview.module.css";

/**
 * FertiOverview component
 * 
 * Displays an overview of fertilization schedules and fertilizer stock.
 * 
 * Props:
 * - fertilizations (array): List of upcoming fertilization dates.
 * - stockData (array): Details of fertilizer stock levels and labels.
 */
const FertiOverview = ({ fertilizations, stockData }) => {
  return (
    <Card className={styles.card}>
      <Typography variant="h6" className={styles.title}>
        Ferti Overview
      </Typography>
      <Box className={styles.content}>
        <Box className={styles.nextFertilizations}>
          <Typography variant="subtitle2" className={styles.sectionTitle}>
            Next Fertilizations
          </Typography>
          <Box className={styles.datesContainer}>
            {fertilizations.map((fertilization, index) => {
              const [month, day] = fertilization.date.split(" ");
              return (
                <Box key={index} className={styles.dateBox}>
                  <Typography className={styles.month}>{month}</Typography>
                  <Typography className={styles.day}>{day}</Typography>
                </Box>
              );
            })}
          </Box>
        </Box>

        <Box className={styles.fertilizerStock}>
          <Typography variant="subtitle2" className={styles.sectionTitle2}>
            Fertiliser Stock
          </Typography>
          <Box className={styles.stockContainer}>
            <div className={styles.mainLine}></div>
            {stockData.map((tank, index) => (
              <Box key={index} className={styles.tankContainer}>
                <Box
                  className={styles.tank}
                  style={{ borderColor: tank.color }}
                >
                  <Box
                    className={styles.fill}
                    style={{
                      height: `${tank.percentage}%`,
                      backgroundColor: tank.color,
                    }}
                  />
                  <Typography variant="body2" className={styles.label}>
                    {tank.label.split("").join("\n")}
                  </Typography>
                </Box>
                <div className={styles.connector}></div>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default FertiOverview;
