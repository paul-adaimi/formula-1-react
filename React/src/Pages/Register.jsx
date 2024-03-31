import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { useAuth } from "../Context/AuthContext";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (!firstName) {
      setError("First name is required.");
      return;
    }
    if (!lastName) {
      setError("Last name is required.");
      return;
    }
    if (!username) {
      setError("Username is required.");
      return;
    }
    if (!password) {
      setError("Password is required.");
      return;
    }
    if (!confirmPassword) {
      setError("Confirming password is required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const result = await register({
      username,
      password,
    });

    if (result.message) {
      navigate("/sign-in");
    } else if (result.error) {
      setError(result.error);
    } else {
      setError(result.unknownError);
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2 className="register-title">Register</h2>
        {error && <div className="error-message">{error}</div>}
        <div className="input-group">
          <label htmlFor="first-name" className="input-label">
            First Name
          </label>
          <input
            type="text"
            id="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="input-field"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="last-name" className="input-label">
            Last Name
          </label>
          <input
            type="text"
            id="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="input-field"
            required
          />
        </div>
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
        <div className="input-group">
          <label htmlFor="confirm-password" className="input-label">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="input-field"
            required
          />
        </div>
        <button type="submit" className="register-button">
          Register
        </button>
        <p className="register-text">
          Have an account?{" "}
          <Link to="/sign-in" className="register-link">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
