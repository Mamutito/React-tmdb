import { useEffect, useState } from "react";
import "./App.css";
import { popularMovies } from "./services/movies";

const API_IMG = "https://image.tmdb.org/t/p/w500/";
function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    popularMovies(setMovies);
  }, []);
  return (
    <div className="container">
      <h1>Popular Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <img src={API_IMG + movie.image} alt={movie.title} />
            <div className="movie-info">
              <h2>{movie.title}</h2>
              <p>Year: {movie.year}</p>
              <p>Popularity: {movie.popularity}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
