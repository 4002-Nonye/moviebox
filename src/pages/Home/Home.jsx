import React from "react";
import { Triangle } from "react-loader-spinner";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";

import Footer from "../../components/Footer/Footer";
import styles from "./Home.module.css";
import { useMovies } from "../../contexts/MoviesContext";
import Error from "../../components/Error/Error";
import Button from "../../components/Button/Button";

function Home() {
  const { loading, movies } = useMovies();
  const refreshPage = () => {
    window.location.reload(); // Refresh the page to go back to the initial state.
  };

  return (
    <div className={styles.home}>
      {loading && (
        <div className={styles.loaderWrapper}>
          <Triangle
            height="80"
            width="80"
            color="#be123c"
            ariaLabel="triangle-loading"
            visible
          />
        </div>
      )}
      {!movies.length && (
        <Error
          message="The movie does not exist in the database"
          className={styles.err}
        >
          <Button text="Go home" className={styles.btn} onClick={refreshPage}>
            &#8592;
          </Button>
        </Error>
      )}
      {!loading && movies.length && (
        <>
          {" "}
          <Header />
          <Main />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Home;
