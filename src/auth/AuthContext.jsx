import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};
// We handle favorites and login status here since we cannot log in to tmdb due to lack of time and knowledge.
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  const addToFavorites = (movieId) => {
    setFavorites([...favorites, movieId]);
  };

  const isFavorite = (movieId) => favorites.find((id) => movieId === id);

  const removeFromFavorites = (movieId) => {
    setFavorites(favorites.filter((id) => id !== movieId));
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
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
