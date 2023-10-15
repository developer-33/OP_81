import React from 'react';

const Post = ({ post }) => {
  return (
    <div>
      <p>ID: {post.id}</p>
      <p>Title: {post.title}</p>
      <p>Content: {post.content}</p>
      <p>Tags: {post.tags.map(tag => tag.name).join(', ')}</p>
      <p>Author: {post.author.name}</p>
    </div>
  );
};

export default Post;