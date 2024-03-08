import React from "react";
import MovieFavoriteButton from "./MovieFavoriteButton";

const MovieInfo = ({ movie, user }) => {
  return (
    <div className="movie-info">
      <h2>{movie.title}</h2>
      <p>
        {movie.releaseDate && <strong>Release Date: </strong>}
        {movie.releaseDate}
      </p>
      <p>
        {movie.overview && <strong>Overview:</strong>} {movie.overview}
      </p>
      <p>
        <strong>Rating:</strong> {movie.rating}
      </p>
      <p>
        <strong>Num. votes: </strong>
        {movie.ratingCount}
      </p>
      {user && <MovieFavoriteButton movie={movie} />}
    </div>
  );
};

export default MovieInfo;
