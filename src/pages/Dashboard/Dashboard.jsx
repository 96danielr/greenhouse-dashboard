// ./pages/Dashboard/Dashboard.jsx (o donde tengas tu Dashboard)
import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import AppBar from "../../components/AppBar/AppBar"; // Asumiendo tu ruta
import Sidebar from "../../components/Sidebar/Sidebar";
import StatusBar from "../../components/StatusBar/StatusBar";
import FarmsList from "../../components/FarmsList/FarmsList";
import QuickSettings from "../../components/QuickSettings/QuickSettings";
import MonitorSensors from "../../components/MonitorSensors/MonitorSensors";
import ClimateOverview from "../../components/ClimateOverview/ClimateOverview";
import FertiOverview from "../../components/FertiOverview/FertiOverview";
import { generateMockData } from "../../data/dashboardData";
import styles from "./Dashboard.module.css";
import GreetingSearch from "../../components/GreetingSearch/GreetingSearch";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const mockData = generateMockData();
    setData(mockData);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  if (!data) return <div>Loading...</div>;
  return (
    <div className={styles.dashboard}>
      {/* AppBar con un ícono/hamburguesa que llama toggleSidebar */}
      <AppBar onMenuClick={toggleSidebar} />

      <div className={styles.container}>
        {/* Sidebar: No lo desmontamos, solo pasamos isOpen para la animación. */}
        <Sidebar isOpen={sidebarOpen} />

        {/* Contenido principal */}
        <main
          className={`${styles.main} ${sidebarOpen ? styles.mainShift : ""}`}
        >
          <GreetingSearch user={data.user} />

          <StatusBar
            statuses={[
              {
                label: "Active",
                count: data.farms.filter((farm) => farm.status === "Active")
                  .length,
                color: "#28a745",
              },
              {
                label: "Acquit",
                count: data.farms.filter((farm) => farm.status === "Acquit")
                  .length,
                color: "#ffc107",
              },
              {
                label: "On delay",
                count: data.farms.filter((farm) => farm.status === "On delay")
                  .length,
                color: "#007bff",
              },
            ]}
          />

          {/* Tercera fila */}
          <Grid
            container
            spacing={3}
            style={{ display: "flex", alignItems: "stretch" }}
          >
            {/* Primera columna */}
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={3}
              style={{
                display: "flex",
                flexDirection: "column",
              }}

             
              
            >
              <div style={{ flexGrow: 1 }}>
                <FarmsList farms={data.farms} />
              </div>
              <div>
                <QuickSettings />
              </div>
            </Grid>
            {/* Segunda columna */}
            <Grid
              item
              xs={12}
              lg={12}
              xl={9}
              
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ flexGrow: 1 }}>
                <MonitorSensors sensors={data.sensors} />
              </div>
            </Grid>
          </Grid>

          {/* Última fila */}
          <Grid
            container
            spacing={3}
            style={{
              marginTop: "20px",
              display: "flex",
              alignItems: "stretch",
            }}
          >
            {/* Primera columna de la última fila */}
            <Grid
              item
              xs={12}
              md={12}
              xl={6}
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ flexGrow: 1 }} className={styles.card}>
                <ClimateOverview climateData={data.climateOverview} />
              </div>
            </Grid>
            {/* Segunda columna de la última fila */}
            <Grid
              item
              xs={12}
              md={12}
              xl={6}
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ flexGrow: 1 }} className={styles.card}>
                <FertiOverview
                  fertilizations={data.nextFertilizations}
                  stockData={data.fertilizerStock}
                />
              </div>
            </Grid>
          </Grid>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
