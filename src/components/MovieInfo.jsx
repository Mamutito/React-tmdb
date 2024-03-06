import React from "react";
import MovieFavoriteButton from "./MovieFavoriteButton";

const MovieInfo = ({ movie }) => {
  return (
    <div className="movie-info">
      <h2>{movie.title}</h2>
      <p>
        <strong>Release Date:</strong> {movie.releaseDate}
      </p>
      <p>
        <strong>Overview:</strong> {movie.overview}
      </p>
      <p>
        <strong>Rating:</strong> {movie.rating}
      </p>
      <p>
        <strong>Num. votes: </strong>
        {movie.ratingCount}
      </p>
      <MovieFavoriteButton movieId={movie.id} />
      {/* Otros detalles de la película */}
    </div>
  );
};

export default MovieInfo;
