import React from "react";
import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  const brandStyle = {
    color: "#000",
    textDecoration: "none",
  };
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <h1><Link style={brandStyle} to="/">VC Folks</Link></h1>
        <button><Link style={brandStyle} to="/reports">Reports</Link></button>
      </div>
    </div>
  );
};

export default Navigation;
