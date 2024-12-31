import React from "react";
import { Card, Box, Typography } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import styles from "./ClimateOverview.module.css";

/**
 * ClimateOverview component
 *
 * Displays a card containing climate data such as light intensity and a graph for weekly trends.
 *
 * Props:
 * - climateData (object): Contains light intensity and weekly data for the chart.
 */
const ClimateOverview = ({ climateData }) => {
  return (
    <Card className={styles.card}>
      <Typography variant="h6" className={styles.title}>
        Climate Overview
      </Typography>
      <Box
        className={styles.content}
        sx={{
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Box className={styles.iconBox}>
          <Typography variant="body1" className={styles.text}>
            Light Intensity
          </Typography>
          
          <Box className={styles.iconBoxTwo}>
          <WbSunnyOutlinedIcon className={styles.icon} />
          <Box flexDirection={"column"} >
          <Typography className={styles.stat}>
              {climateData.lightIntensity}
            </Typography>
            <Typography className={styles.wattsLabel}>Watts</Typography>
          </Box>
           
          </Box>
        </Box>

        <Box className={styles.graph}>
          <ResponsiveContainer width="100%" height={150}>
            <LineChart data={climateData.weeklyData}>
              <XAxis
                dataKey="day"
                tick={{ fontSize: 15, fontWeight: 500, fill: "#1E2150" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                domain={[40, 70]}
                tick={false}
                axisLine={false}
              />
              <CartesianGrid
                vertical={true}
                horizontal={false}
                stroke="#94A5C3"
                strokeWidth={2}
              />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#1600F4"
                strokeWidth={5}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="average"
                stroke="#F200A8"
                strokeWidth={5}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </Card>
  );
};

export default ClimateOverview;
