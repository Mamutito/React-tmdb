import { useEffect, useState } from "react";
import "./Home.css";
import { popularMovies } from "./services/movies";
import MovieBox from "./components/MovieBox";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    popularMovies(setMovies);
  }, []);

  return (
    <div className="container">
      <h1>Popular Movies</h1>
      <ul className="movie-list">
        {movies.map((movie) => (
          <MovieBox movie={movie} />
        ))}
      </ul>
    </div>
  );
}

export default Home;
