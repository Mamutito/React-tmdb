import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../services/movies";
import MovieInfo from "../components/MovieInfo";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    getMovie(id, setMovie); //Get data from API using Movie ID
  }, []);
  return (
    <div className="movie-details">
      <div className="movie-image">
        <img src={movie.image} alt={movie.title} />
      </div>
      <MovieInfo movie={movie} />
    </div>
  );
};

export default MovieDetails;
