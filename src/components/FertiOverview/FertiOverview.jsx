import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import styles from "./FertiOverview.module.css";

const FertiOverview = ({ fertilizations, stockData }) => {
  return (
    <Card className={styles.card}>
      
        <Typography variant="h6" className={styles.title}>
          Ferti Overview
        </Typography>
        <Box className={styles.content}>
          {/* Sección de Próximas Fertilizaciones */}
          <Box className={styles.nextFertilizations}>
            <Typography variant="subtitle2" className={styles.sectionTitle}>
              Next Fertilizations
            </Typography>
            <Box className={styles.datesContainer}>
              {fertilizations.map((fertilization, index) => {
                const [month, day] = fertilization.date.split(" "); // Dividimos en mes y día
                return (
                  <Box key={index} className={styles.dateBox}>
                    <Typography className={styles.month}>
                      {month}
                    </Typography>
                    <Typography className={styles.day}>{day}</Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>

          {/* Gráfico de Fertiliser Stock */}
          <Box className={styles.fertilizerStock}>
            <Typography variant="subtitle2" className={styles.sectionTitle2}>
              Fertiliser Stock
            </Typography>
            <Box className={styles.stockContainer}>
              <div className={styles.mainLine}></div> {/* Línea principal */}
              {stockData.map((tank, index) => (
                <Box key={index} className={styles.tankContainer}>
                  {/* Línea negra que conecta el tanque con la línea principal */}
                  <Box
                    className={styles.tank}
                    style={{ borderColor: tank.color }} // Color dinámico del borde
                  >
                    {/* Nivel del tanque */}
                    <Box
                      className={styles.fill}
                      style={{
                        height: `${tank.percentage}%`,
                        backgroundColor: tank.color,
                      }}
                    />
                    {/* Letras dentro del tanque */}
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
