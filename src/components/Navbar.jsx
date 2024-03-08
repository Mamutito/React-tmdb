import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import SearchBar from "./SearchBar";
import { useAuth } from "../auth/AuthContext";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { loginSession, logout } = useAuth();
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      {/* Mobile burger button */}
      <div className="mobile-menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
      <div className="navbar-left desktop-menu">
        <div className="navbar-brand">
          <NavLink end to="/">
            The Movie Data Base
          </NavLink>
        </div>
        {/*Main menu */}
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
          {loginSession && (
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
          )}
          <li className="nav-item">
            {loginSession ? (
              <a onClick={logout}>Logout</a>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                {}Login
              </NavLink>
            )}
          </li>
        </ul>
      </div>

      {/* Mobile slide menu */}
      {showMenu && (
        <>
          <ul className="navbar-nav mobile-menu">
            <li>
              {" "}
              <div className="navbar-brand">
                <NavLink to="/">The Movie Data Base</NavLink>
              </div>
            </li>
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                Popular
              </NavLink>
            </li>
            {loginSession && (
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
            )}
            <li className="nav-item">
              {loginSession ? (
                <a onClick={logout}>Logout</a>
              ) : (
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active" : "")
                  }
                >
                  Login'
                </NavLink>
              )}
            </li>
          </ul>
        </>
      )}

      <SearchBar />
    </nav>
  );
};

export default Navbar;
