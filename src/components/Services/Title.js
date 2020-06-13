import React from "react";
import styles from "./Title.module.css";

export default function Title({ title }) {
  return (
    <div className={styles.SectionTitle}>
      <h4>{title}</h4>
      <div></div>
    </div>
  );
}
