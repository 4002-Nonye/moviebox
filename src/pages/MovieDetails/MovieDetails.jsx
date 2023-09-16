import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import Box from "../../components/Box/Box";
import styles from "./MovieDetails.module.css";
import { useMovies } from "../../contexts/MoviesContext";
import MobileNav from "../../components/MobileNav/MobileNav";

function MovieDetails() {
  const { setMovieID } = useMovies();
  const { id } = useParams();
  useEffect(() => {
    setMovieID(id);
  }, [id, setMovieID]);

  return (
    <div className={styles.container}>
      <div>
        <MobileNav />
      </div>
      <SideBar />
      <Box />
    </div>
  );
}

export default MovieDetails;
