import { useEffect, useState } from "react";
import { trendingMovies } from "../services/movies";
import MovieBox from "../components/MovieBox";

function Home() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    trendingMovies(setPopularMovies);
  }, []);

  return (
    <>
      <h1>Popular Movies</h1>
      <ul className="movie-list">
        {popularMovies.map((movie) => (
          <MovieBox key={movie.id} movie={movie} />
        ))}
      </ul>
    </>
  );
}

export default Home;
