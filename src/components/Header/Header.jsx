/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import styles from "./Header.module.css";
import Button from "../Button/Button";
import SearchBar from "../SearchBar/SearchBar";
import logo from "../../assets/Logo.svg";
import menu from "../../assets/Menu.svg";
import play from "../../assets/Play.png";
import Rating from "../Rating/Rating";
import { useMovies } from "../../contexts/MoviesContext";

function Header() {
  const { movies, loading } = useMovies();
  const [activeIndex, setActiveIndex] = useState(0);
  const rate = (movies[0].vote_average * 10).toFixed(1);
  const overview = movies[activeIndex].overview
    .split(" ")
    .slice(0, 50)
    .join(" ");
  // change hero image
  const handleHeroChange = (index) => {
    setActiveIndex(index);
  };

  if (!loading)
    return (
      <div>
        <header
          className={styles.header}
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%),  url('https://image.tmdb.org/t/p/original${movies[activeIndex].backdrop_path}')`,
          }}
        >
          <nav className={styles.nav}>
            <div className={styles.logo}>
              <img src={logo} alt="logo" />
            </div>

            <SearchBar />

            <div className={styles.userLogin}>
              <a className={styles.link} href="#">
                Sign in
              </a>
              <img src={menu} alt="ham" className={styles.ham} />
            </div>
          </nav>
          <div className={styles.headerContent}>
            <div className={styles.movieIntro}>
              <h1 className={styles.movieTitle}>
                <span>{movies[activeIndex].title}</span>
              </h1>

              <Rating
                type="gap"
                rate={rate}
                max={10 * 10}
                movie={movies[activeIndex]}
                maxPossibleRating={10}
              />
              <p className={styles.movieInfo}>
                {overview}
                ...
              </p>

              <Button btnType="watch" text="watch trailer">
                <img src={play} alt="playIcon" className={styles.playBtn} />
              </Button>
            </div>

            <div className={styles.tab}>
              {Array.from(
                { length: movies.length < 5 ? movies.length : 5 },
                (_, index) => (
                  <span
                    key={index}
                    aria-hidden
                    onClick={() => handleHeroChange(index)}
                    className={`${activeIndex === index ? styles.active : ""} ${
                      styles.tabSpan
                    }`}
                  >
                    {index + 1}{" "}
                  </span>
                ),
              )}
            </div>
          </div>
        </header>
      </div>
    );
}

export default Header;
