// src/Login.js
import React, { useState } from 'react';
import '../styles/Login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if ((username === 'viewer' && password === '1234' ) || (username === 'editor' && password === '1234' )|| (username === 'User' && password === '1234' )) {
      onLogin();
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/>
    <div className='container'>
        
        <div className='headerx'>
        
      <div className='text'>Login</div>
      <div className='underline'></div></div>
     <center>{error && <p style={{ color: 'red' }}>{error}</p>}</center> 
     <div className='inputs'> 
     <input
        className='input'
        type="text1"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
      className='input'
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
     <center><button className="submit" onClick={handleLogin}>Login</button></center> 
    </div></div></>
  );
};

export default Login;
