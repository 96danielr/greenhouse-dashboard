import React from "react";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <h1>Welcome to the Dashboard</h1>
        <p>Your hub for all monitoring and control tools.</p>
      </header>
      <div className={styles.content}>
        <div className={styles.card} style={{ animationDelay: "0.1s" }}>
          <h2>Monitor Sensors</h2>
          <p>Track real-time data from your sensors.</p>
        </div>
        <div className={styles.card} style={{ animationDelay: "0.2s" }}>
          <h2>Manage Farms</h2>
          <p>View and update your farm data efficiently.</p>
        </div>
        <div className={styles.card} style={{ animationDelay: "0.3s" }}>
          <h2>Quick Settings</h2>
          <p>Access and configure key settings instantly.</p>
        </div>
        <div className={styles.card} style={{ animationDelay: "0.4s" }}>
          <h2>Climate Overview</h2>
          <p>Stay informed about weather conditions.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
