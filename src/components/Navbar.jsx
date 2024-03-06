import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-brand">
          <NavLink end to="/">
            The Movie Data Base
          </NavLink>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              end
              to="/"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
            >
              Popular
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
            >
              Favorites
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
            >
              Login
            </NavLink>
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
