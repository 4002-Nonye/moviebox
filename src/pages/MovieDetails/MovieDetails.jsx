import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import Box from "../../components/Box/Box";
import styles from "./MovieDetails.module.css";
import { useMovies } from "../../contexts/MoviesContext";
import MobileNav from "../../components/MobileNav/MobileNav";

function MovieDetails() {
  const { setMovieID, setIsOpen } = useMovies();
  const { id } = useParams();

  // Initialize screenSize based on the initial width
  const [screenSize, setScreenSize] = useState(
    window.matchMedia("(max-width:768px)").matches,
  );

  useEffect(() => {
    setMovieID(id);

    // Update screenSize when the window is resized
    function handleResize() {
      setScreenSize(window.matchMedia("(max-width:768px)").matches);
      setIsOpen(false);
    }

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [id, setMovieID, setIsOpen]);

  return (
    <div className={styles.container}>
      {screenSize && <MobileNav />}
      {!screenSize && <SideBar />}
      <Box />
    </div>
  );
}

export default MovieDetails;
