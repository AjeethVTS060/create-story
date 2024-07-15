import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBook, FaCog, FaInfoCircle, FaBars, FaTimes, FaSignOutAlt } from 'react-icons/fa';
import './Sidebar.css';
import { MdWebStories } from "react-icons/md";
import { FaWandMagicSparkles } from "react-icons/fa6";
// import logo from './logo.png';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        {/* <img src={logo} alt="Logo" className="logo" /> */}
        <button className="toggle-button" onClick={toggleSidebar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        {isOpen && <div className="logo">AI Story Generator</div>}

      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link to="/">
              {/* <FaHome /> */}
              <FaWandMagicSparkles />
              {isOpen && <span>Create</span>}
            </Link>
          </li>
          <li>
            <Link to="/stories">
              <FaBook />
              {isOpen && <span>Stories</span>}
            </Link>
          </li>
          <li>
            <Link to="/settings">
              {/* <FaCog /> */}
              <MdWebStories />
              {/* <img src={storiesIcon} alt="Stories" className="custom-icon" /> */}
              {isOpen && <span>My Stories</span>}
            </Link>
          </li>
          <li>
            <Link to="/about">
              <FaInfoCircle />
              {isOpen && <span>About</span>}
            </Link>
          </li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <button className="logout-button">
          <FaSignOutAlt />
          {isOpen && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;