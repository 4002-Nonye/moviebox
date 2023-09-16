import React from "react";
import ham from "../../assets/Menu.svg";
import logo from "../../assets/logodark.svg";
import styles from "./MobileNav.module.css";

function MobileNav() {
  return (
    <nav className={styles.nav}>
      <img src={logo} alt="logo" />
      <img src={ham} alt="ham" />
    </nav>
  );
}

export default MobileNav;
