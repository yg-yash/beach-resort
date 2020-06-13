import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import styles from "./Services.module.css";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, aliquid."
      },
      {
        icon: <FaHiking />,
        title: "Endless hiking",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, aliquid."
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle van",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, aliquid."
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, aliquid."
      }
    ]
  };
  render() {
    return (
      <section className={styles.Services}>
        <Title title="services" />
        <div className={styles.ServicesCenter}>
          {this.state.services.map((service, index) => {
            return (
              <article key={index} className={styles.Service}>
                <span>{service.icon}</span>
                <h6>{service.title}</h6>
                <p>{service.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
