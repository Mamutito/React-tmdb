import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};
// We handle favorites and login status here since we cannot log in to tmdb due to lack of time and knowledge.
export const AuthProvider = ({ children }) => {
  const [loginSession, setLoginSession] = useState({
    success: true,
    guest_session_id: "2402058dca5b869efae0d2b83653b4dd",
    expires_at: "2024-03-07 15:29:47 UTC",
  });
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

  const login = () => {
    setLoginSession({
      success: true,
      guest_session_id: "2402058dca5b869efae0d2b83653b4dd",
      expires_at: "2024-03-07 15:29:47 UTC",
    });
    localStorage.setItem(
      "isLoggedIn",
      JSON.stringify({
        success: true,
        guest_session_id: "2402058dca5b869efae0d2b83653b4dd",
        expires_at: "2024-03-07 15:29:47 UTC",
      })
    );
  };

  const logout = () => {
    setLoginSession({});
    localStorage.setItem("isLoggedIn", JSON.stringify({}));
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
