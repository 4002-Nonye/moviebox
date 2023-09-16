import React from "react";
import { useMovies } from "../../contexts/MoviesContext";
import SideBar from "../SideBar/SideBar";
import ham from "../../assets/Menu.svg";
import logo from "../../assets/logodark.svg";
import styles from "./MobileNav.module.css";

function MobileNav() {
  const { isOpen, setIsOpen } = useMovies();

  return (
    <nav className={styles.nav}>
      <img src={logo} alt="logo" />
      <img src={ham} alt="ham" onClick={() => setIsOpen(true)} aria-hidden />

      {isOpen && <SideBar />}
    </nav>
  );
}

export default MobileNav;
