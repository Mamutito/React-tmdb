import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-brand">
          <Link to="/">The Movie Data Base</Link>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Popular
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/favorites" className="nav-link">
              Favorites
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
        </ul>
      </div>
      <div className="search-bar">
        <p>Search:</p>
        <input type="text" />
      </div>
    </nav>
  );
};

export default Navbar;
