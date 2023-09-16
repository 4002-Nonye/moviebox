/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */

/// ///////////////////////////////////////////////////////////////////
import React, { createContext, useContext, useEffect, useState } from "react";

const apiKey = import.meta.env.VITE_API_KEY;
const BASE_URL = `https://api.themoviedb.org/3`;

/// //////////////////////////////////////////////////
// a reusable function to filter and set movies
const filterAndSetMovies = (data, setMovies) => {
  // Filter the results to include only items with both backdrop_path, poster_path and overview
  const filteredMovies = data.results.filter(
    (movie) => movie.backdrop_path && movie.poster_path && movie.overview
  );
  setMovies(filteredMovies.slice(0, 10));
};

/// //////////////////////////////////////////////////

// subscribe to the useContext api
const MoviesContext = createContext();

/// //////////////////////////////////////////////////

// function to share data
function MoviesProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieID, setMovieID] = useState("");
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  /// //////////////////////////////////////////////////

  // get movies on initial page load
  useEffect(() => {
    setIsLoading(true);
    const getMovies = async () => {
      try {
        const res = await fetch(
          `${BASE_URL}/movie/top_rated?api_key=${apiKey}`
        );
        if (!res.ok) throw new Error("Unknow Request 💣");
        const data = await res.json();
        // Filter the results to include only items with both backdrop_path and poster_path
        filterAndSetMovies(data, setMovies);
      } catch (error) {
        console.error("An error occurred:", error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, []);

  /// //////////////////////////////////////////////////

  // get movie details by id
  useEffect(() => {
    setIsLoading(true);
    const getMovieByID = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/movie/${movieID}?api_key=${apiKey}&append_to_response=credits`
        );

        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    if (movieID) {
      getMovieByID();
    }
  }, [movieID]);

  /// /////////////////////////////////////////////////////

  // get movie by query

  const getMovieByQuery = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${BASE_URL}/search/movie?query=${query}&api_key=${apiKey}`
      );

      const data = await response.json();
      console.log(data);
      // Filter the results to include only items with both backdrop_path and poster_path
      filterAndSetMovies(data, setMovies);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  /// //////////////////////////////////////////////////

  return (
    <MoviesContext.Provider
      value={{
        movies,
        loading,
        setMovieID,
        movieDetails,
        setQuery,
        query,
        getMovieByQuery,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}

/// //////////////////////////////////////////////////

// CUSTOM HOOK INSTEAD OF USING useContext(MoviesContext) everywhere.

const useMovies = () => {
  const context = useContext(MoviesContext);
  if (context === undefined)
    throw new Error("Cannot use Cities context outside the Cities Provider");
  return context;
};

export { MoviesProvider, useMovies };
