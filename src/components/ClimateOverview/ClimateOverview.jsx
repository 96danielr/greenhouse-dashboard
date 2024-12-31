import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import styles from "./ClimateOverview.module.css";
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';

const ClimateOverview = ({ climateData }) => {
  return (
    <Card className={styles.card}>
      
        <Typography variant="h6" className={styles.title}>
          Climate Overview
        </Typography>
        <Box
          className={styles.content}
          sx={{
            flexDirection: { xs: "column", sm: "row" }, // En columna para pantallas pequeñas
          }}
        >
          {/* Información de Light Intensity */}
          <Box className={styles.iconBox}>
          <Typography variant="body1" className={styles.text}>
              Light Intensity
            </Typography>
            <Box className={styles.iconBoxTwo}>
              <WbSunnyOutlinedIcon/>
           
            <Typography variant="h6" className={styles.stat}>
              {climateData.lightIntensity}
            </Typography>
            </Box>
          </Box>

          {/* Gráfico */}
          <Box className={styles.graph}>
            <ResponsiveContainer width="100%" height={150}>
              <LineChart data={climateData.weeklyData}>
                {/* Configuración del eje X */}
                <XAxis
                  dataKey="day"
                  tick={{ fontSize: 15, fontWeight: 500, fill: "#1E2150" }} // Personalización de los días
                  axisLine={false} // Oculta la línea del eje X
                  tickLine={false} // Oculta las marcas del eje X
                />
                {/* Configuración del eje Y (sin valores) */}
                <YAxis
                  domain={[40, 70]} // Rango ajustado
                  tick={false} // Ocultamos los valores del eje Y
                  axisLine={false} // Ocultamos la línea del eje Y
                />
                <CartesianGrid
                  vertical={true} // Mostramos las líneas verticales
                  horizontal={false} // Ocultamos las horizontales
                  stroke="#94A5C3" // Color de las líneas verticales
                  strokeWidth={2} // Grosor de las líneas
                />
                <Tooltip />

                {/* Líneas del gráfico */}
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#1600F4"
                  strokeWidth={5} // Más gruesa
                  dot={false} // Sin puntos
                />
                <Line
                  type="monotone"
                  dataKey="average"
                  stroke="#F200A8"
                  strokeWidth={5} // Más gruesa
                  dot={false} // Sin puntos
                />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </Box>
      
    </Card>
  );
};

export default ClimateOverview;
