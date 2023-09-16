import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from "react-router-dom";
import styles from "./Main.module.css";

import arrowRight from "../../assets/arrowRight.png";
import Card from "../Card/Card";
import { useMovies } from "../../contexts/MoviesContext";

function Main() {
  const { movies } = useMovies();

  return (
    <main className={styles.main}>
      {" "}
      <div className={styles.headWrapper}>
        <h2 className={styles.head}>featured movie</h2>
        <Link to="/" className={styles.headLink}>
          <span>see more </span>
          <img src={arrowRight} alt="arrow" />
        </Link>
      </div>
      <div className={styles.moviesWrapper}>
        {!movies.length ? (
          "oops nothing to see here!"
        ) : (
          <>
            {movies.map((movie) => (
              <Link
                to={`movies/${movie.id}`}
                className={styles.movieLink}
                key={movie.id}
              >
                <Card movie={movie} />
              </Link>
            ))}
          </>
        )}
      </div>
    </main>
  );
}

export default Main;
