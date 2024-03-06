import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "./services/movies";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    getMovie(id, setMovie);
  }, []);
  return (
    <div className="movie-details">
      <div className="movie-image">
        <img src={movie.image} alt={movie.title} />
      </div>
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
        {/* Otros detalles de la película */}
      </div>
    </div>
  );
};

export default MovieDetails;
