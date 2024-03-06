import React from "react";
import { Link } from "react-router-dom";
import "./MovieBox.css";

//Get a movie and return a movie box
function MovieBox({ movie }) {
  return (
    <li key={movie.id} className="movie-box">
      <Link to={`/movie/${movie.id}`}>
        <img src={movie.image} alt={movie.title} />
        <div className="movie-info">
          <h2>{movie.title}</h2>
          <p>Year: {parseInt(movie.year)}</p>
          <p>Popularity: {parseInt(movie.popularity)}</p>
        </div>
      </Link>
    </li>
  );
}

export default MovieBox;
