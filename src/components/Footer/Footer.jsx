import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import facebookIcon from "../../assets/facebook.svg";
import instagramIcon from "../../assets/instagram.svg";
import twitterIcon from "../../assets/twitter.svg";
import youTubeIcon from "../../assets/youtube.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        <Link to="/">
          <img src={facebookIcon} alt="facebook" />
        </Link>
        <Link to="/">
          <img src={instagramIcon} alt="instagram" />
        </Link>{" "}
        <Link to="/">
          <img src={twitterIcon} alt="twitter" />
        </Link>
        <Link to="/">
          <img src={youTubeIcon} alt="youtube" />
        </Link>
      </div>

      <div className={styles.terms}>
        <p>Conditions of Use</p>
        <p>Privacy & Policy</p>
        <p>Press Room</p>
      </div>

      <p className={styles.copyRight}>
        © 2021 MovieBox by Adriana Eka Prayudha
      </p>
    </footer>
  );
}

export default Footer;
