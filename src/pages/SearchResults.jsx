import React, { useEffect, useState } from "react";
import MovieBox from "../components/MovieBox";
import { searchMovies } from "../services/movies";
import { useSearchParams } from "react-router-dom";

const SearchResults = () => {
  const [moviesResults, setMoviesResults] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    searchMovies(query, setMoviesResults);
  }, [query]);

  return (
    <>
      <h1>Search Results: {query}</h1>
      {moviesResults.length === 0 ? (
        <h2 style={{ textAlign: "center" }}>No results found...</h2>
      ) : (
        <ul className="movie-list">
          {moviesResults.map((movie) => (
            <MovieBox key={movie.id} movie={movie} />
          ))}
        </ul>
      )}
    </>
  );
};

export default SearchResults;
