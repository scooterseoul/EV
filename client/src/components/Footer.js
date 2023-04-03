import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import Github from "../images/icons8-github-96.png";
import Linkdin from "../images/icons8-linkedin-100.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <ul className={styles.footerNav}>
          <li>
            <Link to="/" className={styles.footerTitle}>
              EVolution
            </Link>
          </li>
          <li
            className={styles.email}
            onClick={() => (window.location = "mailto: scooterseoul@gmail.com")}
          >
            @Get in Touch
          </li>
          <li className={styles.thanksCont}>
            <p className={styles.thanks}>
              Thanks for visiting.
              <br /> This site was created by C. Alexander.
            </p>
            <Link to="https://github.com/scooterseoul" target="_blank">
              <img src={Github} className={styles.ghicon} alt="github"></img>
            </Link>
            <Link
              to="https://www.linkedin.com/in/claudette-alexander"
              target="_blank"
            >
              <img
                src={Linkdin}
                className={styles.linkdinIcon}
                alt="linkdin"
              ></img>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
