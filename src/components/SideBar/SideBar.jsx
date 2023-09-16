import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./SideBar.module.css";
import logo from "../../assets/logowhite.svg";
import home from "../../assets/Home.svg";
import movieProjector from "../../assets/Movie-projector.svg";
import tvShow from "../../assets/TV-show.svg";
import calendar from "../../assets/Calendar.svg";
import logout from "../../assets/Logout.svg";
import { useMovies } from "../../contexts/MoviesContext";

const sideOptions = [
  {
    src: home,
    text: "Home",
    alt: "home",
    active: false,
    to: "/",
  },
  {
    src: movieProjector,
    text: "Movies",
    alt: "movie-projector",
    active: true,
    to: "#",
  },
  { src: tvShow, text: "TV Series", alt: "tv-show", active: false, to: "#" },

  { src: calendar, text: "Upcoming", alt: "calendar", active: false, to: "#" },
];
function SideBar() {
  const { setIsOpen } = useMovies();
  return (
    <div className={styles.sideBar}>
      <Button btnType="close" onClick={() => setIsOpen(false)}>
        x
      </Button>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>

      <ul className={styles.tab}>
        {sideOptions.map((opt) => (
          <li className={opt.active ? styles.active : ""} key={opt.text}>
            <Link className={styles.links} to={opt.to}>
              <img src={opt.src} alt={opt.alt} />
              <span>{opt.text}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.btmInfo}>
        <p className={styles.topParagraph}>
          Play movie quizes and earn free tickets
        </p>
        <p className={styles.btmParagraph}>50k people are playing now</p>
        <Button btnType="start" text="Start playing" />
      </div>

      <div className={styles.logoutHolder}>
        <img src={logout} alt="logout" />
        <span>Log out</span>
      </div>
    </div>
  );
}

export default SideBar;
