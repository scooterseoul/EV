import React from "react";
import styles from "./Header.module.css";
import headerimg from "../images/headerBannerPink2.png";
import mail from "../images/icons8-secured-letter-64.png";
import logo from "../images/logo2.png";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.navbar}>
        <img src={logo} className={styles.logo} />
        <div className={styles.mailCont}>
          <img
            src={mail}
            className={styles.mail}
            onClick={() => (window.location = "mailto: scooterseoul@gmail.com")}
          />
        </div>
      </div>
      <img src={headerimg} className={styles.headerimg} />
    </div>
  );
};

export default Header;
