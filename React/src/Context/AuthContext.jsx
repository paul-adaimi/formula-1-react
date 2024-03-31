import React, { createContext, useContext, useState, useEffect } from "react";

const SERVER_URL = "http://127.0.0.1:5000";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
  }, []);

  const request = async ({ url, method, body }) => {
    const result = await fetch(`${SERVER_URL}/${url}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${currentUser.token}`,
      },
      body,
    });

    return result;
  };

  const login = async (userCredentials) => {
    const result = await fetch(`${SERVER_URL}/auth/login`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(userCredentials),
    });

    const responseBody = await result.json();

    if (result.ok) {
      const userInfo = {
        ...userCredentials,
        token: responseBody.token,
      };
      localStorage.setItem("user", JSON.stringify(userInfo));
      setCurrentUser(userInfo);
      return {
        message: responseBody.message,
      };
    } else if (result.status === 400) {
      return {
        error: responseBody.error,
      };
    }
    return {
      unkownError: "An unknown error occured",
    };
  };

  const register = async (userCredentials) => {
    const result = await fetch(`${SERVER_URL}/auth/register`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(userCredentials),
    });

    const responseBody = await result.json();

    if (result.ok) {
      return {
        message: responseBody.message,
      };
    } else if (result.status === 400) {
      return {
        error: responseBody.error,
      };
    }
    return {
      unkownError: "An unknown error occured",
    };
  };

  const logout = () => {
    localStorage.removeItem("user");
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    login,
    register,
    logout,
    request,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
