import React, { useState } from 'react';
import {Grid } from '@mui/material';
import AppBar from '../../components/AppBar/AppBar';
import Sidebar from '../../components/Sidebar/Sidebar';
import SearchBar from '../../components/SearchBar/SearchBar';
import StatusBar from '../../components/StatusBar/StatusBar';
import FarmsList from '../../components/FarmsList/FarmsList';
import QuickSettings from '../../components/QuickSettings/QuickSettings';
import MonitorSensors from '../../components/MonitorSensors/MonitorSensors';
import ClimateOverview from '../../components/ClimateOverview/ClimateOverview';
import FertiOverview from '../../components/FertiOverview/FertiOverview';
import styles from './Dashboard.module.css';

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={styles.dashboard}>
      <AppBar onMenuClick={toggleSidebar} />
      <div className={styles.content}>
        {sidebarOpen && <Sidebar />}
        <main className={styles.main}>
          {/* Primera fila */}
          <div className={styles.row}>
            <div className={styles.greeting}>
              <h1>Hi Elsa</h1>
              <p>Let’s check out your farm metrics</p>
            </div>
            <div className={styles.search}>
              <SearchBar />
            </div>
          </div>
          {/* Segunda fila: StatusBar */}
          <StatusBar />
          {/* Tercera fila */}
          <Grid container spacing={3}> {/* Ajusta de 1 a 3 para mayor espacio */}
          <Grid item xs={12} md={4}>
            <FarmsList />
            <QuickSettings />
          </Grid>
          <Grid item xs={12} md={8}>
            <MonitorSensors />
          </Grid>
        </Grid>
         {/* Última fila */}
          <Grid container spacing={3} style={{ marginTop: '20px' }}>
            <Grid item xs={12} md={7}>
              <div className={styles.card}>
                <ClimateOverview />
              </div>
            </Grid>
            <Grid item xs={12} md={5}>
              <div className={styles.card}>
                <FertiOverview />
              </div>
            </Grid>
          </Grid>

        </main>
      </div>
    </div>
  );
}

export default Dashboard;
