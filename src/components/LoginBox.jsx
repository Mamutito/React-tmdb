import React, { useState } from "react";
import "./LoginBox.css"; // Importa los estilos CSS
import { useAuth } from "../auth/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const LoginBox = () => {
  const [userAccount, setUserAccount] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { login, loginSession } = useAuth();
  const navigate = useNavigate();

  if (loginSession) {
    navigate("/"); // Redirect to home page if you try to access this URL when you are already logged
  }

  const handleInputChange = (target) => {
    setUserAccount((prevAccount) => ({
      ...prevAccount,
      [target.name]: target.value,
    }));
  };

  const handleLogin = async () => {
    const sessionId = await login(userAccount);
    if (sessionId.success) {
      setError(""); // Clean error message
      navigate("/"); // Redirect to the home page
    }
    setError(sessionId.errorMessage); //
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="login-box">
      <h2>Login</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={userAccount.username}
          name="username"
          onChange={(e) => handleInputChange(e.target)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={userAccount.password}
          onChange={(e) => handleInputChange(e.target)}
          onKeyDown={handleKeyDown}
        />
      </div>
      {error && <p className="error-message">{error}</p>}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginBox;
