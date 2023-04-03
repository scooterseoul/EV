import React from "react";
import styles from "./Header.module.css";
import headerimg from "../images/headerBanner.png";
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
      <img src={headerimg} className={styles.headerimg} alt="banner" />
    </div>
  );
};

export default Header;
