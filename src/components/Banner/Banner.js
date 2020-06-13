import React from "react";
import styles from "./Banner.module.css";

export default function Banner({ children, title, subTitle }) {
  return (
    <div className={styles.Banner}>
      <h1>{title}</h1>
      <div></div>
      <p>{subTitle}</p>
      {children}
    </div>
  );
}
