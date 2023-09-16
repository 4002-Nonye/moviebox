import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useMovies } from "../../contexts/MoviesContext";
import useUTCDate from "../../hooks/useUTCDate";
import Ad from "../Ad/Ad";
import styles from "./Box.module.css";
import play from "../../assets/play.svg";
import star from "../../assets/star.svg";
import arrowDown from "../../assets/expand-arrow.svg";

function Box() {
  const { movieDetails, loading } = useMovies();
  const [starActors, setStarActors] = useState("");
  const [writers, setWriters] = useState("");
  const [directors, setDirectors] = useState("");
  const utcdate = useUTCDate(movieDetails?.release_date);
  const { credits } = movieDetails;

  useEffect(() => {
    if (credits) {
      const { cast, crew } = credits;

      // to get stars of the movie

      // STEP 1 - get actors popularity number
      const stars = cast.map((cas) => cas.popularity);

      // STEP 2 - sort in descending order
      const popularActor = stars
        .sort((a, b) => b - a)
        // STEP 3 -  get first three actors with the highest popularity rate (they are the stars of the show!😂)
        .slice(0, 3);

      // STEP 4 - get actors name with the highest popularity rate
      const actualStars = cast
        .filter((cas) => popularActor.includes(cas.popularity))
        .map((cas) => cas.name)
        .join(", ");
      setStarActors(actualStars);

      /// ///////////////////////////////////////////////////////////////////////
      // to get crew writers

      // STEP 1 - use the new Set() to prevent duplicate names
      const UniquecrewWriters = new Set(
        crew
          // STEP 2 - get crew members whose job was writing
          .filter((crewMember) => crewMember.department === "Writing")

          // STEP 3 - get their names
          .map((crewMember) => crewMember.name)
      );

      const crewWriters = [...UniquecrewWriters].join(", ");
      setWriters(crewWriters);

      /// //////////////////////////////////////////////////////////////////////////
      // get most popular director (I need just one director so we are taking the most popular!)
      const popularDirector = crew
        // STEP 1 - get directors popularity number
        .map((director) => director.popularity)
        // STEP 2 - sort in descending order
        .sort((a, b) => b - a)
        // STEP 3 - get the highest popularity rate at first position (he is the main director!)
        .slice(0, 1);

      // STEP 4 - use the new Set() to prevent duplicate names
      const uniqueDirectorNames = new Set(
        crew
          .filter((castMember) =>
            popularDirector.includes(castMember.popularity)
          )
          .map((cas) => cas.name)
      );

      const mainDirector = [...uniqueDirectorNames].join(", ");

      setDirectors(mainDirector);
    }
  }, [credits]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <div className={styles.heroImg}>
          {loading ? (
            <Skeleton height={400} />
          ) : (
            <>
              {" "}
              <img
                className={styles.hero}
                src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
                alt="hero img"
              />
            </>
          )}

          <div className={styles.play}>
            <img src={play} alt="play" />
          </div>
        </div>
      </div>

      <div className={styles.titleWrapper}>
        <div className={styles.title}>
          <div className={styles.titleDetails}>
            {loading ? (
              <Skeleton height={40} />
            ) : (
              <>
                <p>{movieDetails.title}</p>
                <span className={styles.dot} />
                <p>{utcdate}</p>
                <span className={styles.dot} />
                <p>PG-13</p>
                <span className={styles.dot} />
                <p>
                  {movieDetails.runtime} <span>mins</span>
                </p>
              </>
            )}
          </div>

          <div className={styles.category}>
            {loading ? (
              <Skeleton height={40} />
            ) : (
              movieDetails?.genres?.map((item) => (
                <p key={item.id}>{item.name}</p>
              ))
            )}
          </div>
        </div>
        <div className={styles.rating}>
          {loading ? (
            <Skeleton height={30} />
          ) : (
            <>
              <p className={styles.star}>
                <img src={star} alt="star" />{" "}
                <span className={styles.number}>
                  {(movieDetails.vote_average * 1).toFixed(1)}
                </span>
              </p>
              <span className={styles.divider} />
              <p className={styles.num2}>350k</p>
            </>
          )}
        </div>
      </div>

      <div className={styles.movieDetailWrapper}>
        <div className={styles.movieDetail}>
          <p className={styles.movieDetailP}>
            {loading ? <Skeleton count={4} /> : movieDetails.overview}
          </p>

          <div>
            {loading ? (
              <Skeleton count={3} />
            ) : (
              <>
                <p className={styles.castCrew}>
                  Director : <span>{directors}</span>
                </p>
                <p className={styles.castCrew}>
                  Writers : <span>{writers || "no information on this"}</span>
                </p>
                <p className={styles.castCrew}>
                  Stars : <span>{starActors}</span>
                </p>
              </>
            )}
          </div>

          <div className={styles.rateAward}>
            <p className={styles.rate}>Top rated movie #65</p>
            <p className={styles.award}>
              <span> Awars 9 nominations </span>

              <img src={arrowDown} alt="arrow" />
            </p>
          </div>
        </div>

        <Ad />
      </div>
    </div>
  );
}

export default Box;
