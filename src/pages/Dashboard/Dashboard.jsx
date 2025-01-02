import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import AppBar from "../../components/AppBar/AppBar";
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
import ChatPopup from "../../components/ChatPopup/ChatPopup";
import { fetchOpenAISummary } from "../../services/openaiService";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [data, setData] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [summary, setSummary] = useState("");
  

  useEffect(() => {
    const getSummary = async () => {
      if (data) {
        try {
          const summary = await fetchOpenAISummary(data);
          setSummary(summary);
          setShowPopup(true);
        } catch (error) {
          console.error("Failed to fetch summary:", error);
        }
      }
    };

    getSummary();
  }, [data]);

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
      <AppBar onMenuClick={toggleSidebar} />
      <div className={styles.container}>
        <Sidebar isOpen={sidebarOpen} />
        <main className={`${styles.main} ${sidebarOpen ? styles.mainShift : ""}`}>
        <GreetingSearch user={data.user} data={data} />
        <StatusBar
            statuses={[
              {
                label: "Active",
                count: data.farms.filter((farm) => farm.status === "Active").length,
                color: "#28a745",
              },
              {
                label: "Acquit",
                count: data.farms.filter((farm) => farm.status === "Acquit").length,
                color: "#ffc107",
              },
              {
                label: "On delay",
                count: data.farms.filter((farm) => farm.status === "On delay").length,
                color: "#007bff",
              },
            ]}
          />
          <Grid container spacing={3} style={{ display: "flex", alignItems: "stretch" }}>
            <Grid
              item
              xs={12}
              xl={3}
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  xl: "column",
                },
                gap: 2,
              }}
            >
              <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <FarmsList farms={data.farms} />
              </Box>
              <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <QuickSettings />
              </Box>
            </Grid>
            <Grid item xs={12} xl={9} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ flexGrow: 1 }}>
                <MonitorSensors sensors={data.sensors} />
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={3} style={{ marginTop: "0px", display: "flex", alignItems: "stretch" }}>
            <Grid item xs={12} xl={6} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ flexGrow: 1 }}>
                <ClimateOverview climateData={data.climateOverview} />
              </div>
            </Grid>
            <Grid item xs={12} xl={6} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ flexGrow: 1 }}>
                <FertiOverview
                  fertilizations={data.nextFertilizations}
                  stockData={data.fertilizerStock}
                />
              </div>
            </Grid>
          </Grid>
        </main>
      </div>
      {showPopup && (
        <ChatPopup
          open={showPopup}
          title="Intelligent Summary"
          message={summary}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
}

export default Dashboard;
