import React, { Component } from "react";
import logo from "../../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className={styles.Navbar}>
        <div className={styles.NavCenter}>
          <div className={styles.NavHeader}>
            <Link to="/">
              <img src={logo} alt="Beach Resort" />
            </Link>
            <button
              className={styles.NavBtn}
              type="button"
              onClick={this.handleToggle}
            >
              <FaAlignRight className={styles.NavIcon} />
            </button>
          </div>
          <ul
            className={
              this.state.isOpen
                ? `${styles.NavLinks} ${styles.ShowNav}`
                : styles.NavLinks
            }
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
