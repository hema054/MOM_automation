import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
// import Home from './Home';
import Header from './Components/Header';
// import Info from './Components/Info';
import Sidebar from './Components/Sidebar';
import Dashboard from './pages/Dashboard';
import Documents from './pages/Documents';
import CreateNew from './pages/CreateNew';
import DynamicTable from './pages/DynamicTable';

// import Footer from './Footer';

import './styles/Header.css';
import './styles/Sidebar.css';
import './styles/Login.css';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [theme, setTheme] = useState('light');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [showLogout, setShowLogout] = useState(false);

  const [showSidebarMenu, setShowSidebarMenu] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setShowLogout(false);
  };

  const handleThemeToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  
    if (newTheme === 'light') {
      document.documentElement.style.setProperty('--primary-color', '#009688');
      document.documentElement.style.setProperty('--background-color', '#fff');
    } else {
      document.documentElement.style.setProperty('--primary-color', '#333');
      document.documentElement.style.setProperty('--background-color', '#5d6867');
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setUsername('User'); // Set the username upon successful login
  };
  const handleUsernameClick = () => {
    setShowLogout(!showLogout);
  };

  const toggleSidebar = () => {
    setShowSidebarMenu(!showSidebarMenu);
  };

  return (
    <Router>
      <div className='App'>
        {!isLoggedIn ? (
          <>
            <Login onLogin={handleLogin} />
          </>
        ) : (
          <>
             
            <Sidebar 
            currentPage={currentPage} 
            setCurrentPage={setCurrentPage} 
            username={username} 
            showSidebarMenu={showSidebarMenu} 
            toggleSidebar={toggleSidebar} 
            
            />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Dashboard username={username} />} />
                <Route path="/documents" element={<Documents type="All" />}>
                  <Route path="bos" element={<Documents type="BoS" />} />
                  <Route path="acm" element={<Documents type="ACM" />} />
                  <Route path="scm" element={<Documents type="SCM" />} />
                </Route>
                <Route path='/dynamic-table' element={<DynamicTable/>}/>
                <Route path="/create" element={<CreateNew />} />
              </Routes>
            </main>
            {showLogout && (
              <div className="logout-dropdown">
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
            <div className="logout-btn-container">
              <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </div>
          </>
        )}
      </div>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
















