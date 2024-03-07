import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Favorite from "./pages/Favorite";
import Login from "./pages/Login";
import MovieDetails from "./pages/MovieDetails";
import { AuthProvider } from "./auth/AuthContext";
import SearchResults from "./pages/SearchResults";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorite />} />
            <Route path="/login" element={<Login />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
