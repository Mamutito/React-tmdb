import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../services/movies";
import "./MovieDetails.css";
import MovieInfo from "../components/MovieInfo";
import { useAuth } from "../auth/AuthContext";
import MovieRating from "../components/MovieRating";
import noImage from "../assets/no_image_available.svg";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    getMovie(id, setMovie); //Get data from API using Movie ID
  }, []);
  const { isFavorite, loginSession } = useAuth();

  const isMovieFavorite = isFavorite(movie.id);

  return (
    <div
      className={`movie-details ${
        isMovieFavorite && loginSession ? "favorite-movie" : ""
      }`}
    >
      <div className="movie-image">
        <img src={movie.image ?? noImage} alt={movie.title} />
      </div>
      <MovieInfo movie={movie} user={loginSession} />
      {loginSession && <MovieRating movie={movie} user={loginSession} />}
    </div>
  );
};

export default MovieDetails;
