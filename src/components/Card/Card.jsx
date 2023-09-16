/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Rating from "../Rating/Rating";
import styles from "./Card.module.css";
import useGenre from "../../hooks/useGenre";
import useUTCDate from "../../hooks/useUTCDate";

function Card({ movie }) {
  const rate = (movie.vote_average * 10).toFixed(1);
  const [changeFavBg, setChangeFavBg] = useState(false);

  // get movie category
  const genreName = useGenre(movie.genre_ids);

  const handleChange = (event) => {
    event.preventDefault();
    setChangeFavBg((bg) => !bg);
  };

  return (
    <div className={styles.card} data-testid="movie-card" key={movie.id}>
      <div className={styles.posterImg}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt="poster-img"
          className={styles.posterImg}
          data-testid="movie-poster"
        />
        <div
          className={styles.fav}
          style={{
            backgroundColor: changeFavBg
              ? "rgba(190, 18, 60,0.5)"
              : "rgba(243,244,246,.50)",
          }}
          onClick={handleChange}
          aria-hidden
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.17157 5.48284C4.73367 3.96185 7.26633 3.96185 8.82842 5.48284L9.99999 6.62359L11.1716 5.48284C12.7337 3.96185 15.2663 3.96185 16.8284 5.48284C18.3905 7.00383 18.3905 9.46984 16.8284 10.9908L9.99999 17.6396L3.17157 10.9908C1.60948 9.46984 1.60948 7.00383 3.17157 5.48284Z"
              fill={changeFavBg ? "#be123c" : "#D1D5DB"}
            />
          </svg>
        </div>
      </div>

      <div>
        {" "}
        <p className={styles.location}>
          USA,{" "}
          <span data-testid="movie-release-date" className={styles.releaseDate}>
            {useUTCDate(movie.release_date)}
          </span>
        </p>
        <h3 className={styles.title} data-testid="movie-title">
          {movie.title}
        </h3>
        <Rating
          rate={rate}
          max={10 * 10}
          movie={movie}
          maxPossibleRating={10}
          type="full"
        />
        <p className={styles.category}>{genreName}</p>
      </div>
    </div>
  );
}

export default Card;
