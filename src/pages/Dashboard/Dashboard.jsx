import React, { useState } from 'react';
import AppBar from '../../components/AppBar/AppBar';
import Sidebar from '../../components/Sidebar/Sidebar';
import SearchBar from '../../components/SearchBar/SearchBar'; // Nuevo componente de búsqueda
import styles from './Dashboard.module.css';
import StatusBar from '../../components/StatusBar/StatusBar';

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
          {/* Primera fila */}
          <div className={styles.row}>
            <div className={styles.greeting}>
              <h1>Hi Elsa</h1>
              <p>Let’s check out your farm metrics</p>
            </div>
            <div className={styles.search}>
              <SearchBar /> {/* Barra de búsqueda */}
            </div>
          </div>
          <StatusBar />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
