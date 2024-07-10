// src/pages/Dashboard.jsx
import React from 'react';
import Card from '../Card';
import Card1 from '../Card1';
import Card2 from '../Card2';
import '../styles/Dashboard.css';

const Dashboard = ({ username }) => {
  return (
    <div>
      <h2 className="text">Welcome, {username}!</h2>
      <div className="card-container">
        <Card />
        <Card2 />
        <Card1 />
      </div>
    </div>
  );
};

export default Dashboard;