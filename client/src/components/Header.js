import React from "react";
import styles from "./Header.module.css";
import headerVideo from "../images/road_traffic_-_116172 (720p).mp4";
import mail from "../images/icons8-secured-letter-64.png";
import logo from "../images/logo2.png";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.navbar}>
        <img src={logo} className={styles.logo} alt="logo" />
        <div className={styles.mailCont}>
          <img
            src={mail}
            className={styles.mail}
            alt="email"
            onClick={() => (window.location = "mailto: scooterseoul@gmail.com")}
          />
        </div>
      </div>
      <div className={styles.headerCont}>
        <video autoPlay loop muted className={styles.headerVideo}>
          <source src={headerVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.overlay}>
          <h1 className={styles.overlayText}>
            Are you ready to <strong>GO ELECTRIC?</strong>
          </h1>{" "}
        </div>
      </div>
    </div>
  );
};

export default Header;
