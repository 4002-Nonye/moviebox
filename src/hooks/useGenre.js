import { useEffect, useState } from "react";

// Define a mapping of genre IDs to names
const movieGenre = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

function useGenre(genreID) {
  // Create a state variable to store the genre names
  const [genreNames, setGenreNames] = useState([]);

  // Use useEffect to update the genre names when genreID changes
  useEffect(() => {
    if (genreID) {
      const genreList = genreID.map((movieID) => movieGenre[movieID]);
      // Sort genre names alphabetically
      genreList.sort();
      const joinedGenreNames = genreList.join(", ");
      setGenreNames(joinedGenreNames);
    }
  }, [genreID]);

  return genreNames;
}

export default useGenre;
