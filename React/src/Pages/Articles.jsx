import React, { useState } from "react";
import Article from "../Components/Article";
import { usePosts } from "../Context/PostsContext";
import EditArticleModal from "../Components/Modal/EditArticle";

function Articles() {
  const { userPosts } = usePosts();
  const [activeArticle, setActiveArticle] = useState(null);

  return (
    <>
      <div className="articles-container">
        {userPosts.map((post) => (
          <Article
            key={post.id}
            title={post.title}
            details={post.body}
            image={post.image}
            creatorFirst={post.author.firstname}
            creatorLast={post.author.lastname}
            onClick={() =>
              setActiveArticle({
                title: post.title,
                details: post.body,
                image: `data:image/jpeg;base64,${post.image}`,
                id: post.id,
              })
            }
          />
        ))}
      </div>
      {activeArticle && (
        <EditArticleModal
          articleInfo={activeArticle}
          onClose={() => setActiveArticle(null)}
          isOpen={!!activeArticle}
        />
      )}
    </>
  );
}

export default Articles;
