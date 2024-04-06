import React from "react";
import Article from "./Article";
import { usePosts } from "../Context/PostsContext";

function Articles() {
  const { posts } = usePosts();

  return (
    <div className="articles-container">
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          details={post.body}
          image={post.image}
          creatorFirst={post.author.firstname}
          creatorLast={post.author.lastname}
        />
      ))}

      <div className="track-image">
        <img
          src="red-bull-and-ferrari-on-track-during-monaco-grand-prix-planet-f1.jpg"
          alt="RedBull and Ferrari racing in Monaco"
          width="1031"
        />
        <img
          src="hungaroring-the-hungarian-f1-race-track-hungary.jpg"
          alt="RedBull and Ferrari racing in Monaco"
          width="1031"
        />
      </div>
    </div>
  );
}

export default Articles;
