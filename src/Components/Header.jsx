// src/Header.jsx
import React from 'react';
import '../styles//Header.css';
const Header = ({ username, onLogout, onThemeToggle }) => {
  return (
    <header className="header">
      <div className="header-left">
        <button onClick={onclick}>MOM Documentation</button>
      </div>
      {/* <div className="header-center">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="header-right">
        <button onClick={onThemeToggle}>Toggle Theme</button>
        <span onClick={onLogout}>Logout</span>
      </div> */}
    </header>
  );
};
//() => window.location.reload()

export default Header;
