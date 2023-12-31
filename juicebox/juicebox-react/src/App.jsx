


import React, { useState, useEffect } from 'react';
import Post from './Post'; // Import the Post component
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/api/posts");
        const result = await response.json();
        setPosts(result.posts);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

export default App;