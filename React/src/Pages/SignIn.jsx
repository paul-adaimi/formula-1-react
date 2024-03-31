import React, { useState } from "react";
import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    const result = await login({
      username,
      password,
    });

    if (result.message) {
      navigate("/");
    } else if (result.error) {
      setError(result.error);
    } else {
      setError(result.unknownError);
    }
  };

  return (
    <div className="signin-container">
      <form onSubmit={handleSubmit} className="signin-form">
        <h2 className="signin-title">Sign In</h2>
        {error && <div className="error-message">{error}</div>}
        <div className="input-group">
          <label htmlFor="username" className="input-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password" className="input-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            required
          />
        </div>
        <button type="submit" className="signin-button">
          Sign In
        </button>
        <p className="register-text">
          Don't have an account?{" "}
          <Link to="/register" className="register-link">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
