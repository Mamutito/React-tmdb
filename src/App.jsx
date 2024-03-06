import Home from "./Home";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Favorite from "./Favorite";
import Login from "./Login";
import MovieDetails from "./MovieDetails";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorite />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
