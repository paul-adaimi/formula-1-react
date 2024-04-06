import React, { createContext, useState, useContext, useEffect } from "react";
import { useAuth } from "./AuthContext";

const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userPosts, setUserPosts] = useState([]);

  const { requestNoAuth, request } = useAuth();

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const response = await requestNoAuth({
        url: "post",
      });
      const userResponse = await request({
        url: "post/user",
        isJson: false,
      });
      if (!response.ok || !userResponse.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const userData = await userResponse.json();
      setPosts(data);
      setUserPosts(userData);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [request]);

  const value = { posts, userPosts, isLoading, error, fetchPosts };

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};

export const usePosts = () => {
  const context = useContext(PostsContext);
  if (context === undefined) {
    throw new Error("usePosts must be used within a PostsProvider");
  }
  return context;
};
