import React, { useState } from "react";
import "./MovieRating.css";
import { sendRating } from "../services/movies";
import Toast from "./Toast";

const MovieRating = ({ movie, user }) => {
  const showToastMessage = (message) => {
    setShowToast(message);

    // This allow multiple calls on the same page
    setTimeout(() => {
      setShowToast(undefined);
    }, 3000);
  };

  const [rating, setRating] = useState(0);
  const [showToast, setShowToast] = useState("");

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleRateSubmit = () => {
    // Send to the API rating value
    sendRating(movie.id, user, rating)
      .then(() => {
        showToastMessage("Rating Sucess");
      })
      .catch((error) => {
        showToastMessage("Rating Error");
        console.error(error);
      });
  };

  return (
    <div className="movie-rating">
      <h2>Rate {movie.title}</h2>
      <select value={rating} onChange={handleRatingChange}>
        <option value="">Select Rating</option>
        {[...Array(10)].map((_, index) => (
          <option key={index + 1} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
      <div className="movie-rate">
        <button onClick={handleRateSubmit}>Rate</button>
        {showToast && <Toast message={showToast} />}
      </div>
    </div>
  );
};

export default MovieRating;
