import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';
import Header from './Header';
import Menuicon from '../assets/Menud.png';

const Sidebar = ({ currentPage, setCurrentPage, username, showSidebarMenu, toggleSidebar }) => {
  const [isDocumentsDropdownOpen, setIsDocumentsDropdownOpen] = useState(false);
  const [isDocumentsDropdownfirstOpen, setIsDocumentsDropdownfirstOpen] = useState(false);
  const [isCreateDropdownOpen, setIsCreateDropdownOpen] = useState(false);

  const toggleCreateDropdown = () => {
    setIsCreateDropdownOpen(!isCreateDropdownOpen);
  };

  const toggleDocumentsDropdown = () => {
    setIsDocumentsDropdownOpen(!isDocumentsDropdownOpen);
  };

  const toggleDocumentsDropdownfirst = () => {
    setIsDocumentsDropdownfirstOpen(!isDocumentsDropdownfirstOpen);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
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


  return (
    <aside className="sidebar-container">
      <div className="menu-btn-wrapper">
        <button className="menu-btn" onClick={toggleSidebar}>
          <img src={Menuicon} alt="Menu Button" />
        </button>
      </div>
      {showSidebarMenu && (
        <div className="Sidebar">
          <ul className="SidebarList">
            {/* <Header username={username} onLogout={handleLogout} onThemeToggle={handleThemeToggle} /> */}
            <div className='documents-container'>
            <li className="row"  onClick={toggleDocumentsDropdownfirst}>
                <div className="text1">MoM DOCUMENTATION
                <i className="arrow-icon" >    &#9660;</i> </div>
              </li>
              {isDocumentsDropdownfirstOpen && (
                <div>
                  <li className="row" onClick={() => handlePageChange('dashboard')}>
                  <Link className="text1" to="/">
                  <div className="title">Dashboard</div>
                  </Link>
                  </li>
                <div className="documents-container">
                <li className="row"  onClick={toggleDocumentsDropdown}>
                  <div className="text1">Documents
                  <i className="arrow-icon" >    &#9660;</i> </div>
                </li>
                {isDocumentsDropdownOpen && (
                  <ul className={`dropdown-list ${isDocumentsDropdownOpen ? 'show' : ''}`}>
                    <li className="row" onClick={() => handlePageChange('bos')}>
                      <Link className="text1" to="/documents/bos">
                        <div className="title">BoS Documents</div>
                      </Link>
                    </li>
                    <li className="row" onClick={() => handlePageChange('acm')}>
                      <Link className="text1" to="/documents/acm">
                        <div className="title">ACM Documents</div>
                      </Link>
                    </li>
                    <li className="row" onClick={() => handlePageChange('scm')}>
                      <Link className="text1" to="/documents/scm">
                        <div className="title">SCM Documents</div>
                      </Link>
                    </li>
                  </ul>
                )}</div>
                {/* Create new  */}
                 <div className="documents-container">
                <li className="row"  onClick={toggleCreateDropdown}>
                  <div className="text1">Create
                  <i className="arrow-icon" >    &#9660;</i> </div>
                </li>
                {isCreateDropdownOpen && (
                  <ul className={`dropdown-list ${isCreateDropdownOpen ? 'show' : ''}`}>
                    <li className="row" onClick={() => handlePageChange('create')}>
                      <Link className="text1" to="/create">
                        <div className="title">Create BoS</div>
                      </Link>
                    </li>
                    <li className="row" onClick={() => handlePageChange('create')}>
                      <Link className="text1" to="/create">
                        <div className="title">Create ACM</div>
                      </Link>
                    </li>
                    <li className="row" onClick={() => handlePageChange('create')}>
                      <Link className="text1" to="/create">
                        <div className="title">Create SCM</div>
                      </Link>
                    </li>
                  </ul>
                )}</div>
                 <li className="row" onClick={() => handlePageChange('create')}>
                 <Link className="text1" to="/create">
                     <div className="title">+ Create New</div>
                  </Link>
                 </li>
                
              </div>
              )}
            </div>
                       
           

            <center>
              <br />
              <div className="text2">Welcome, {username}!</div>
            </center>
          </ul>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;