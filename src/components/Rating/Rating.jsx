/* eslint-disable react/prop-types */
import React from "react";
import styles from "./Rating.module.css";
import imdbRateIcon from "../../assets/imdb.svg";
import tomatoIcon from "../../assets/tomato.svg";

// movie rating percentage where maximum possible score is 10
// Rating Percentage = (Total Vote Score / (Maximum Possible Score * Vote Count)) * 100

function Rating({ type, rate = 86, max = 100, movie = [] }) {
  return (
    <div className={`${styles.rating} ${styles[type]}`}>
      <div className={styles.imdb}>
        <img src={imdbRateIcon} alt="imdb" />
        <span>
          {" "}
          &nbsp; {rate} / {max}
        </span>
      </div>
      <div>
        <img src={tomatoIcon} alt="tomato" />{" "}
        <span>
          {" "}
          &nbsp;
          {Math.floor((movie.vote_average / 10) * 100)}%
        </span>
      </div>
    </div>
  );
}

export default Rating;
