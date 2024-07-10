// src/Home.js
import React from 'react';

const Home = ({ username }) => {
  return (
    <div>
      <h2>Welcome, {username}!</h2>
      <p>This is the home page.</p>
    </div>
  );
};

export default Home;
