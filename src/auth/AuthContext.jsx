import React, { createContext, useContext, useState, useEffect } from "react";
import { createSessionId } from "../services/movies";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};
// We handle favorites and login status here since we cannot log in to tmdb due to lack of time and knowledge.
export const AuthProvider = ({ children }) => {
  const [loginSession, setLoginSession] = useState();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Get the state of localStorage on page load

    const storedLoggedIn = localStorage.getItem("loginSession");
    if (storedLoggedIn) {
      setLoginSession(JSON.parse(storedLoggedIn));
    }

    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const login = async ({ username, password }) => {
    setLoginSession();
    if (username === "admin" && password === "2coders") {
      const sessionId = await createSessionId();
      if (sessionId.success) {
        setLoginSession(sessionId);
        localStorage.setItem("loginSession", JSON.stringify(sessionId));
        return sessionId;
      } else {
        return { ...sessionId, errorMessage: "Something wrong happen..." };
      }
    } else
      return {
        success: false,
        errorMessage: "Username or password are incorrect",
      };
  };

  const logout = () => {
    setLoginSession(undefined);
    localStorage.removeItem("loginSession");
  };

  const addToFavorites = (movieId) => {
    setFavorites((prevFavorites) => {
      const newFavorites = [...prevFavorites, movieId];
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const isFavorite = (movieId) => {
    return favorites.includes(movieId);
  };

  const removeFromFavorites = (movieId) => {
    setFavorites((prevFavorites) => {
      const newFavorites = prevFavorites.filter((id) => id !== movieId);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  return (
    <AuthContext.Provider
      value={{
        loginSession,
        login,
        logout,
        favorites,
        isFavorite,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
