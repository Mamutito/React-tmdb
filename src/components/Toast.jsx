import React, { useState, useEffect } from "react";
import "./Toast.css";

const Toast = ({ message }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`toast ${isVisible ? "show" : ""}`}>
      <p>{message}</p>
    </div>
  );
};

export default Toast;
