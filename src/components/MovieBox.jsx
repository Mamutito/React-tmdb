import React from "react";
import { Link } from "react-router-dom";
import "./MovieBox.css";

const API_IMG = "https://image.tmdb.org/t/p/w500/"; //BasePath url

//Get a movie and return a movie box
function MovieBox({ movie }) {
  return (
    <li key={movie.id} className="movie-box">
      <Link to={`/movie/${movie.id}`}>
        <img src={API_IMG + movie.image} alt={movie.title} />
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
