import React from "react";
import styles from "./SearchBar.module.css";
import searchIcon from "../../assets/Search.svg";
import { useMovies } from "../../contexts/MoviesContext";

function SearchBar() {
  const { query, setQuery, getMovieByQuery } = useMovies();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;

    if (query.trim()) {
      getMovieByQuery();
      setQuery("");
    }
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="What do you want to watch?"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <img
        src={searchIcon}
        alt="searchIcon"
        onClick={handleSubmit}
        aria-hidden
      />
    </form>
  );
}

export default SearchBar;
