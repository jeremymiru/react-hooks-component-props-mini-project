import React from 'react';
import Article from './Article';

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post, index) => (
        <Article key={index} title={post.title} content={post.content} />
      ))}
    </main>
  );
}

export default ArticleList;
