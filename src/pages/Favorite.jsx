import MovieBox from "../components/MovieBox";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

function Favorites() {
  const { favorites, loginSession } = useAuth();
  const navigate = useNavigate();

  if (!loginSession) {
    navigate("/login"); // If try to enter this page without login you go to the login page
  }

  return (
    <>
      <h1>My favorite movies</h1>
      {favorites.length === 0 ? (
        <h3 style={{ textAlign: "center" }}>
          You dont have favorite movies yet
        </h3>
      ) : (
        <ul className="movie-list">
          {favorites.map((movie) => (
            <MovieBox key={movie.id} movie={movie} />
          ))}
        </ul>
      )}
    </>
  );
}

export default Favorites;
