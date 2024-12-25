import React, { useState } from 'react';
import AppBar from '../../components/AppBar/AppBar';
import Sidebar from '../../components/Sidebar/Sidebar';
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
        {sidebarOpen && <Sidebar />} {/* Renderizar el Sidebar sólo si está abierto */}
        <main className={styles.main}>
          <h1>Welcome to the Dashboard</h1>
          <p>Here is your content.</p>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
