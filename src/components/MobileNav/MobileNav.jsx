import React from "react";
import SideBar from '../SideBar/SideBar'
import ham from "../../assets/Menu.svg";
import logo from "../../assets/logodark.svg";
import styles from "./MobileNav.module.css";

function MobileNav() {
  return (
    <nav className={styles.nav}>
      <img src={logo} alt="logo" />
      <img src={ham} alt="ham" />


      <SideBar/>
    </nav>
  );
}

export default MobileNav;
