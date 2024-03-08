import "./MovieFavoriteButton.css";
import { useAuth } from "../auth/AuthContext";

const MovieFavoriteButton = ({ movie }) => {
  const { addToFavorites, removeFromFavorites, isFavorite } = useAuth();
  const movieIsFavorite = isFavorite(movie.id);

  const toggleFavorite = () => {
    if (movieIsFavorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
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
