import React, { createContext, useContext, useState, useEffect } from "react";

const SERVER_URL = "http://127.0.0.1:5000";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  const requestNoAuth = async ({ url, method = "GET", body }) => {
    const result = await fetch(`${SERVER_URL}/${url}`, {
      method,
      body,
    });

    return result;
  };

  const request = async ({ url, method = "GET", body, isJson = true }) => {
    console.log(`${SERVER_URL}/${url}`);
    let headers = {
      Authorization: `Bearer ${user.token}`,
    };
    if (isJson) {
      headers = {
        ...headers,
        "Content-Type": "application/json",
      };
    }

    const result = await fetch(`${SERVER_URL}/${url}`, {
      method,
      headers,
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
        firstName: responseBody.firstName,
        lastName: responseBody.lastName,
        token: responseBody.token,
      };
      localStorage.setItem("user", JSON.stringify(userInfo));
      setUser(userInfo);
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
    setUser(null);
  };

  const value = {
    user,
    login,
    register,
    logout,
    request,
    requestNoAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
