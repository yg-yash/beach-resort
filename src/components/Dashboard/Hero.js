import React from "react";
import styles from "./Hero.module.css";

const Hero = ({ children, hero }) => {
  return <header className={hero}>{children}</header>;
};

Hero.defaultProps = {
  hero: styles.DefaultHero
};
export default Hero;
