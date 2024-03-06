import React, { useState } from "react";
import "./MovieFavoriteButton.css";
import { useAuth } from "../auth/AuthContext";

const MovieFavoriteButton = ({ movieId }) => {
  const { addToFavorites, removeFromFavorites, isFavorite, favorites } =
    useAuth();
  const movieIsFavorite = isFavorite(movieId);

  const toggleFavorite = () => {
    if (movieIsFavorite) {
      removeFromFavorites(movieId);
    } else {
      addToFavorites(movieId);
    }
    console.log(favorites);
    // Send to the api the petition using the movieId
  };

  return (
    <div className="movie-favorite">
      <button onClick={toggleFavorite}>
        {movieIsFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default MovieFavoriteButton;
